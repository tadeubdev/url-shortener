import UrlAttrs from "../attrs/url-attrs";

export default interface FindUrlBySlugService {
    /**
     * @throws UrlNotFoundException
     * @param slug string
     */
    find(slug: string): Promise<UrlAttrs|null>;
}