export default class UrlNotFoundException extends Error {
    constructor() {
        super('Url not found');
        Object.setPrototypeOf(this, UrlNotFoundException.prototype);
    }
}