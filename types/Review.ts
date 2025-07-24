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

export interface Review extends SanityBody {
    _type: "review";
    reviewerName: string;
    reviewerRole?: string;
    company?: string;
    reviewText: string;
    rating: number;
    profileImage?: Image;
    projectType?: string;
    isApproved?: boolean;
    isFeatured?: boolean;
    reviewDate?: string;
} 