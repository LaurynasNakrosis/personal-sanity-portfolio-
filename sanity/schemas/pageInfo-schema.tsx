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
            name: 'profession',
            title: 'Profession',
            type: 'string',
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
        },
        // {
        //     name: 'image',
        //     title: 'Image',
        //     type: 'image',
        //     options: {hotspot: true},
        //     fields: [
        //         {
        //             name:'alt',
        //             title: 'Alt',
        //             type: 'string'
        //         }
        //     ]
        // },
        {
            name: 'backgroundInformation',
            title: 'Background Information',
            type: 'text',
        },
        {
            name: 'profilePicture',
            title: 'Profile Picture',
            type: 'image',
            options: {hotspot: true},
        },

    ]
}

export default pageInfo;