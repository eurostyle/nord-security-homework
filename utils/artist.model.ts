/**
 * Class `ArtistModel` representing GET artist endpoint
 */
export default class ArtistModel {
    public readonly id: string;

    public readonly name: string;

    public readonly followers: object;

    public readonly genres: string[];

    public readonly images: object[];

    public readonly popularity: number;

    public readonly external_urls: object;

    public readonly href: string;

    public readonly type: string;

    public readonly uri: string;

    [key: string]: any; // Allow access to any property using a string index.

}

