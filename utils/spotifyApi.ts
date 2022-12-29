import { config } from 'dotenv';
import fetch, { Response } from 'node-fetch';
import { plainToInstance } from 'class-transformer';
import ArtistModel from './artist.model.js';

/**
 * This is a wrapper class for Spotify API
 */
export default class SpotifyApi {
    private readonly token: string;

    constructor() {
        config();
        this.token = process.env.SPOTIFY_TOKEN;
    }

    /**
     * Fetches the information about the artist from the Spotify API and returns it as an `ArtistModel` object.
     * @param artistId The Spotify ID of the artist.
     * @returns A `Promise` that resolves to an `ArtistModel` object representing the artist.
     */
    public async getArtist(artistId: string): Promise<ArtistModel> {

        const response: Response = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
            headers: {
                Authorization: `Bearer ${this.token}`,
            },
        });

        /**
         * Not the ideal use case to handle the response. Under a normal circumstances, I would use HTTP-STATUS-CODES library
         * and handle the response inside a try / catch block. This is a quick solution, and it works in this case.
         */
        await expect(response.status).toBe(200);

        const data: Object = await response.json();

        return plainToInstance(ArtistModel, data);
    }

}
