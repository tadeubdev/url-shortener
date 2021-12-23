export default interface SaveUrlRepository {
    save(url: string): Promise<number>;
}