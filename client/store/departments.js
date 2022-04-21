export const state = () => ({
    departments: [{
            id: 0,
            name: 'ВТ'
        },
        {
            id: 1,
            name: 'ИС'
        },
        {
            id: 2,
            name: 'ИВК'
        },
    ],
})
export const getters = {
    getDepartments: s => s.departments
}