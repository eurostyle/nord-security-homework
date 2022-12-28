import Api from '../../utils/api.js';
import ArtistModel from '../../utils/artist.model.js';

describe('Test get artist from spotify API', () => {
    let api: Api;

    before(async () => {
        api = new Api();
    });

    it('should validate the response', async () => {
        // FIXME: refactor all default exports
        const response: ArtistModel = await api.getArtist('3jOstUTkEu2JkjvRdBA5Gu');
        console.log(response);
    });

});
