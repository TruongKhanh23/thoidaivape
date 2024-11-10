import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const { createStore } = Vuex

export interface State {
  count: number
}

const vuexPersist = new VuexPersist({
  key: 'thoidaivape',
  storage: localStorage,
})

// Khởi tạo store
const store = createStore<State>({
  state: {
    count: 0,
  },
  mutations: {
    increment(state: State) {
      state.count++
    },
    decrement(state: State) {
      state.count--
    },
  },
  actions: {
    increment(context: { commit: Function }) {
      context.commit('increment')
    },
    decrement(context: { commit: Function }) {
      context.commit('decrement')
    },
  },
  getters: {
    count: (state: State) => state.count,
  },
  plugins: [vuexPersist.plugin],
})

export default store
