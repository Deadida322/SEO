import { getItem, setItem } from '@/helpers/persistanceStorage'
import Cookies from 'js-cookie'
import vue from 'vue'
export const state = () => ({
    currentUser: {},
    errors: null,
    accessToken: null,
    refreshToken: null,
    base: 'http://127.0.0.1:8000/media/'
})

export const actions = {
    login({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/auth/authorize/', data, { withCredentials: true }).then(res => {
                let data = res.data
                let user = data.user
                Cookies.set('user', JSON.stringify(user), { expires: 7 })
                commit('setAccessToken', data.access)
                commit('setUser', user)
                resolve(user)
            }).catch((err) => {
                reject('Проверьте данные')
            })
        })
    },
    confirm({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/auth/confirm_email/', data).then(res => {
                resolve(res)
            }).catch((err) => {
                reject('Проверьте данные')
            })
        })
    },
    signUp({ commit }, data) {
        return new Promise((resolve, reject) => {
            this.$axios.post('/api/auth/register/',
                data, { withCredentials: true }).then(res => {
                resolve('resolve')
            }).catch((err) => {
                reject('Такой аккаунт уже есть')
            })
        })
    },
    tokenPair({ commit }, refresh) {
        return new Promise((resolve, reject) => {
            this.$axios.post('api/auth/token_pair/', null, { withCredentials: true }).then(res => {
                commit('setAccessToken', res.data.access)
                let user = this.$cookiz.get('user')
                commit('setUser', user)
                resolve(res.data.user)
            }).catch((err) => {
                console.log(err)
                    // setItem('user', null)
                reject('Время сессии истекло')
            })
        })

    },
    logOut({ commit, state }, refresh) {
        return new Promise((resolve, reject) => {
            this.$axios.delete('api/auth/logout/', {
                withCredentials: true,
                headers: {
                    'Authorization': `Bearer ${state.accessToken}`
                }
            }).then(res => {
                commit('setAccessToken', null)
                commit('setUser', null)
                this.$cookiz.remove('user')
                this.$router.push('/')
                resolve('shik')
                return
            }).catch((err) => {
                this.$router.push('/')
                reject('Ошибка выхода')
            })
        })

    }
}

export const mutations = {
    setAccessToken(state, token) {
        state.accessToken = token
    },
    setRefreshToken(state, token) {
        state.refreshToken = token
    },
    setUser(state, user) {
        vue.set(state, ['currentUser'], {...user })
    }
}

export const getters = {
    getAccessToken: s => s.accessToken,
    getRefreshToken: s => s.refreshToken,
    getUser: s => s.currentUser,
    getBase: s => s.base
}