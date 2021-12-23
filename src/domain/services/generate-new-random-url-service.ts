export default interface GenerateNewRandomUrlService {
    generate(): Promise<string>;
}