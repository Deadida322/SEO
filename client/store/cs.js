export const state = () => ({
    directions: []
})

export const actions = {
    setDirections({ commit }) {
        return new Promise((resolve, reject) => {
            this.$axios.get('api/v1/fist_directions/').then(res => {
                commit('setDirections', res.data.results)
                resolve(res.data.results)
            }).catch((err) => {
                reject('Ошибка получения направлений', err)
            })
        })
    }
}

export const mutations = {
    setDirections(state, directions) {
        state.directions = directions
    }
}

export const getters = {
    getDirections: s => s.directions
}