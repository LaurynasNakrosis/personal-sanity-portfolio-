const experience = {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        
        {
            name: 'jobTitle',
            title: 'JobTitle',
            description: 'Title of the job',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'jobTitle'}
        },
        {
            name: 'companyImage',
            title: 'CompanyImage',
            type: 'image',
            options: {hotspot: true},
        },
        {
            name: 'company',
            title: 'Company',
            type: 'text',
        },
        {
            name: 'dateStarted',
            title: 'DateStarted',
            type: 'date',
        },
        {
            name: 'dateEnded',
            title: 'DateEnded',
            type: 'date',
        },
        {
            name: 'isCurrentlyWorkingHere',
            title: 'IsCurrentlyWorkingHere',
            type: 'boolean',
        },
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of: [{type: "string"}],
        },
        {
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{type: "reference", to: {type: "skill"}}],
        },
        
    ]
}

export default experience;