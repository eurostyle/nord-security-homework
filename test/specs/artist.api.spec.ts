import Api from '../../utils/api.js';
import ArtistModel from '../../utils/artist.model.js';

describe('Test get artist from spotify API', () => {

    it('should validate the response', async () => {
        const response: ArtistModel = await Api.getArtist('3jOstUTkEu2JkjvRdBA5Gu');
        console.log(response);
    });

});
