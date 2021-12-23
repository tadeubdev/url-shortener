export default interface FindUrlBySlugRepository {
    find(slug: string): Promise<any>;
}