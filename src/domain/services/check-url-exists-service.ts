export default interface CheckUrlExistsService {
    check(url: string): Promise<boolean>; 
}