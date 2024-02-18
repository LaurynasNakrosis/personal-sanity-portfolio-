const pageInfo = {
    name: 'pageInfo',
    title: 'PageInfo',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'}
        },
        {
            name: 'images',
            type: 'array',
            options: {hotspot: true},
            of:[
                {
                    type: 'object',
                    fields: [
                        { name:'url', type: 'url', title: 'URL' },
                        { name:'file', type: 'file', title: 'File' },
                    ],
                    validation: (Rule: any) => Rule.required(),
                },
            ],
        },
        {
            name: 'backgroundInformation',
            title: 'Background Information',
            type: 'text',
        },
    ]
}

export default pageInfo;