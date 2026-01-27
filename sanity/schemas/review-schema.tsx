const review = {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        {
            name: 'reviewerName',
            title: 'Reviewer Name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'reviewerRole',
            title: 'Reviewer Role',
            type: 'string',
            description: 'e.g., Project Manager, CEO, Team Lead'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
            description: 'Company or organization name'
        },
        {
            name: 'companyUrl',
            title: 'Company Website URL',
            type: 'url',
            description: 'Company website URL (optional)'
        },
        {
            name: 'reviewText',
            title: 'Review Text',
            type: 'text',
            validation: (Rule: any) => Rule.required().min(10).max(500),
            description: 'The actual review/testimonial (10-500 characters)'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: (Rule: any) => Rule.required().min(1).max(5),
            description: 'Rating from 1 to 5 stars'
        },
        {
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Profile picture of the reviewer'
        },
        {
            name: 'projectType',
            title: 'Project Type',
            type: 'string',
            description: 'e.g., Web Development, Mobile App, Consulting'
        },
        {
            name: 'isApproved',
            title: 'Approved',
            type: 'boolean',
            description: 'Mark this review as approved to display on the website',
            initialValue: false
        },
        {
            name: 'isFeatured',
            title: 'Featured Review',
            type: 'boolean',
            description: 'Mark this review as featured to display prominently'
        },
        {
            name: 'reviewDate',
            title: 'Review Date',
            type: 'date',
            description: 'When this review was given'
        }
    ]
}

export default review; 