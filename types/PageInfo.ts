export type PageInfo = {
    _id: string;
    _createdAt: Date;
    _type: "pageInfo";
    name: string;
    slug: string;
    backgroundInformation: string;
    images: Array<{
        _key: string;
        url: string;
    }>;
}