import { Image, PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    title: string;
    slug: string;
    image: Image;
    summary: string;    
    linkToBuild: string;


}