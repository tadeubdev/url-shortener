export default interface SaveUrlService {
    save(url: string): Promise<number>;
}