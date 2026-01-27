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

export interface Skill extends SanityBody {
    _type: 'skill';
    slug: string;
    image: Image;
    progress: number;
    title: string;
}