const social = {
    name: 'social',
    title: 'Socials',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Platform for social media',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'}
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
        },
    ]
}
export default social;