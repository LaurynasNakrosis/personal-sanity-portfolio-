const project = {
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of the project',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'title'}
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
        },
        {
            name: 'summary',
            title: 'Summary',
            type: 'string',
        },
        {
            name: 'technologies',
            title: 'Technologes',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'skill'}}],
        },
        {
            name: 'linkToBuild',
            title: 'LinkToBuild',
            type: 'url',
        },
    ]
}

export default project;