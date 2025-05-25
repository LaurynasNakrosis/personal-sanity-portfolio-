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

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    name: string;
    slug: string;
    backgroundInformation: string;
    image: Image;
    // images: Array<{
    //     _key: string;
    //     url: string;
    // }>;
}