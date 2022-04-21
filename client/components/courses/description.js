//Общий список курсов

[{
        id: 0,
        title: '',
        author: '',
        description: ''
    },
    {
        id: 2,
        title: '',
        author: '',
        description: ''
    }
]

//Конкретный курс

let concret = {
    id: 0,
    image: 'path',
    title: '',
    information: 'html',
    lessons: [{
        id: '',
        title: '',
        description: ''
    }]
}

//Конкретный урок

let lesson = {
    title: '',
    description: '',
    information: '',
    test: [{
            id: 0,
            type: 'multiple' | 'select' | 'write' | 'order',
            variants: [
                'string',
                'string'
            ],
            rightAnswers: [
                'string'
            ]
        },

    ]
}