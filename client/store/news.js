export const state = () => ({
    news: [{
            id: 0,
            title: 'Работа пошла',
            date: '26.01.2021',
            description: 'lorem svcvsd s csd scdkcdskcdsnkjsn dcjks ndcjksdnkjdsc nkjnsdc сыввввввввввввввввввв vdfdfvvdfdvf cds s',
            tags: [
                {name:'default'},
         
            ],
            img: 'https://memepedia.ru/wp-content/uploads/2021/10/machomen-mem.jpg'
        },
        {
            id: 1,
            title: 'Работа пошла',
            date: '27.01.2021',
            description: 'lorem svcvsd s csd scdkcdskcdsnkjsn dcjks ndcjksdnkjdsc nkjnsdc scdsdc smscdklsd cmksd cklmsdckl slkdcm mklsmc slmd klsdcm klsmdc lskdm lksd  scdscds s d scds sd csd /n scdsd sdc sdsd s csdjknsdcklmsmdlk sdc;lsdcsd mlkl;c;lefwoi  jnnscdkjs ',
            tags: [
                {name:'default'},
                {name:'C#'},
                {name:'JS'},
            ],
            img: 'https://memepedia.ru/wp-content/uploads/2021/10/machomen-mem.jpg'
        },
        {
            id: 2,
            title: 'Работа пошла',
            date: '29.01.2021',
            description: 'lorem svcvsd s csd scdkcdskcdsnkjsn dcjks ndcjksdnkjdsc nkjnsdc сыввввввввввввввввввв vdfdfvvdfdvf cds s csd sdccsdn jsdcn jksdc nsdnj cjksndc kjnsjk ncjs ndkjsdn cjksd n jksndc jksndckj nsdkj ndskjcn dskjn cdkjsn',
            tags: [
                {name:'default'},
                {name:'C#'},
                {name:'JS'},
            ],
            img: 'https://memepedia.ru/wp-content/uploads/2021/10/machomen-mem.jpg'
        },
        {
            id: 3,
            title: 'Работа пошла',
            date: '29.01.2021',
            description: 'lorem svcvsd s csd scdkcdskcdsnkjsn dcjks ndcjksdnkjdsc nkjnsdc сыввввввввввввввввввв vdfdfvvdfdvf cds s csd sdccsdn jsdcn jksdc nsdnj cjksndc kjnsjk ncjs ndkjsdn cjksd n jksndc jksndckj nsdkj ndskjcn dskjn cdkjsn',
            tags: [
                {name:'default'},
                {name:'C#'},
                {name:'JS'},
            ],
            img: 'https://memepedia.ru/wp-content/uploads/2021/10/machomen-mem.jpg'
        },
        {
            id: 4,
            title: 'Работа пошла',
            date: '29.01.2021',
            description: 'lorem svcvsd s csd scdkcdskcdsnkjsn dcjks ndcjksdnkjdsc nkjnsdc сыввввввввввввввввввв vdfdfvvdfdvf cds s csd sdccsdn jsdcn jksdc nsdnj cjksndc kjnsjk ncjs ndkjsdn cjksd n jksndc jksndckj nsdkj ndskjcn dskjn cdkjsn',
            tags: [
                {name:'default'},
                {name:'C#'},
                {name:'JS'},
            ],
            img: 'https://memepedia.ru/wp-content/uploads/2021/10/machomen-mem.jpg'
        },
        {
            id: 5,
            title: 'Работа пошла',
            date: '29.01.2021',
            description: 'lorem svcvsd s csd scdkcdskcdsnkjsn dcjks ndcjksdnkjdsc nkjnsdc сыввввввввввввввввввв vdfdfvvdfdvf cds s',
            tags: [
                {name:'default'},
                {name:'C#'},
                {name:'JS'},
            ],
            img: 'https://memepedia.ru/wp-content/uploads/2021/10/machomen-mem.jpg'
        },
    ],

    isLazyLoading: false,
})
export const actions = {
    getMore({ commit, getters }, options) {

        if (options.counter === options.length) {
            return []
        }
        return new Promise((resolve, reject) => {

            let newNews = []
                //console.log(options);
            for (let i = options.length; i < options.counter; i++) {
                // console.log(i);
                newNews.push({
                    id: i,
                    title: 'Работа пошла',
                    date: '29.01.2021',
                    description: 'lorem svcvsd s csd scdkcdskcdsnkjsn dcjks ndcjksdnkjdsc nkjnsdc сыввввввввввввввввввв vdfdfvvdfdvf cds s csd sdccsdn jsdcn jksdc nsdnj cjksndc kjnsjk ncjs ndkjsdn cjksd n jksndc jksndckj nsdkj ndskjcn dskjn cdkjsn',
                    tags: [
                        'default',
                        'second',
                        'javaScript'
                    ],
                    image: 'https://rubtsovskmv.ru/wp-content/uploads/2021/12/предприниматели.jpeg'
                })

            }

            let payload = [...getters.getNews, ...newNews]
            commit('setNews', payload)
            resolve("Ок");

        })
    },
}
export const mutations = {
    setNews(state, newNews) {
        state.news = newNews
    },
    setLazyLoading(state, value) {
        state.isLazyLoading = value
    }
}

export const getters = {
    getNews: s => s.news,
    getLazyLoading: s => s.isLazyLoading,
    getNewsItem: s => (id) => s.news.find(n => n.id == id)
}