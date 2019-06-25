import Vue from 'vue'
import Vuex from 'vuex'
import {
  setCookie,
  getCookie,
  delCookie,
  getLocal,
  setLocal,
  removeLocal
} from '@/utils/storages'
import { makeToken } from '@/utils'

Vue.use(Vuex)
const TokenKey = "demo-token"
const CollapseKey = "demo-collapse"

export default new Vuex.Store({
  state: {
    token: getCookie(TokenKey),
    collapse: +getLocal(CollapseKey),
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setCookie(TokenKey, token)
      state.token = token
    },
    SET_COLLAPSE: (state, collpase) => {
      setLocal(CollapseKey, collpase)
      state.collapse = collpase
    }
  },
  actions: {
    Login () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let token = makeToken()
          this.commit("SET_TOKEN", token)
          resolve()
        }, 1000)
      })
    },
    Logout () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          delCookie(TokenKey)
          removeLocal(CollapseKey)
          resolve()
        }, 1000)
      })
    }
  }
})
