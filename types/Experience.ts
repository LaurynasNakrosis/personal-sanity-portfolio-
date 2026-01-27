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


export interface Experience extends SanityBody {
    _type: "experience"
    jobTitle: string;
    _slug: string;
    companyImage: Image;
    company: string;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    points: string[];
    technologies: Skill[];
}

