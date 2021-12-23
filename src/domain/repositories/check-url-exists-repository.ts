export default interface CheckUrlExistsRepository {
    check(url: string): Promise<boolean>;
}