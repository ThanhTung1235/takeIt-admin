export class Article {
    link: string;
    categoryId: number;
    title: string;
    thumbnail: string[];
    author: string;
    description: string;
    sourceId: number;
    createdAtMLS: string;
    updatedAtMLS: string;
    status: ArticleStatus;
}
export enum ArticleStatus {
    Pending = 0,
    Active = 1,
    Delete = -1
}
