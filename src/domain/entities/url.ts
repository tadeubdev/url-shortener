export default class Url {
    private url: string;

    constructor(url: string) {
        this.setUrl(url);
    }

    private setUrl(url: string) {
        if (url.indexOf('http') === -1) {
            url = 'http://' + url;
        }
        this.url = url;
    }

    getUrl(): string {
        return this.url;
    }
}