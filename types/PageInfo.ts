import { Image } from "sanity";

export type PageInfo = {
    _id: string;
    _createdAt: Date;
    _type: "pageInfo";
    name: string;
    slug: string;
    profession: string;
    url: string;
    backgroundInformation: string;
    profilePicture: Image;
}