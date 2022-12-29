import SpotifyApi from '../../utils/spotifyApi.js';
import ArtistModel from '../../utils/artist.model.js';

describe('Test get artist from spotify API', () => {
    let api: SpotifyApi;

    before(async () => {
        api = new SpotifyApi();
    });

    // The response status code is being checked inside the `getArtist` method.

    it('should ensure all keys in artist data are present in ArtistModel class ', async () => {
        // Get the artist data for "Queen" using the provided API method.
        const artist: ArtistModel = await api.getArtist('1dfeR4HaWDbWqFHLkxsg1d');
        // Get the keys of the ArtistModel class.
        const artistModelKeys = Object.keys(new ArtistModel());
        // Get the keys of the artist data.
        const responseKeys = Object.keys(artist);

        // Expect that all keys in the artist data are also present in the ArtistModel class.
        expect(responseKeys.every((key) => { return artistModelKeys.includes(key); })).toBe(true);
    });

    it('should ensure all values in artist data are not null or undefined', async () => {
        // Get the artist data for "Queen" using the provided API method.
        const artist: ArtistModel = await api.getArtist('1dfeR4HaWDbWqFHLkxsg1d');
        // Get the keys of the artist data returned by the API.
        const responseKeys = Object.keys(artist);

        // Expect that all values in the artist data are not null or undefined.
        expect(responseKeys.every((key) => { return typeof artist[key] !== 'undefined' && artist[key]; })).toBe(true);
    });

    it('should ensure the name of the artist is correct', async () => {
        // Get the artist data for "Queen" using the provided API method.
        const artist: ArtistModel = await api.getArtist('1dfeR4HaWDbWqFHLkxsg1d');

        // Expect the name is matching
        expect(artist.name).toBe('Queen');
    });

});
