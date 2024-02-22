import { Skill } from "./Skill";

interface SanityBody{
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface Project extends SanityBody {
    title: string;
    slug: string;
    image: Image;
    summary: string;    
    linkToBuild: string;
    technologies: Skill[];
}