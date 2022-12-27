import { config } from 'dotenv';
import fetch from 'node-fetch';
import { plainToInstance } from 'class-transformer';
import ArtistModel from './artist.model.js';

class Api {
    private readonly token: string;

    constructor() {
        config();
        this.token = process.env.SPOTIFY_TOKEN;
    }

    public async getArtist(artistId: string): Promise<ArtistModel> {
        const response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });
        const data = await response.json();
        return plainToInstance(ArtistModel, data);
    }
}

export default new Api();
