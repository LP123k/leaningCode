import { createStore } from 'vuex'
// VueX 数据管理框架
// VueX 创建了一个全局唯一的仓库, 用来存放全局的数据
export default createStore({
  // 数据放在 state 里面
  state: {
    name: 'state中 的 dell'
  },
  // mutation 里面只允许写同步代码, 不允许写异步代码
  mutations: {
    // 第四步, 对应的 mutation 被执行
    change(state,str) {
      // 第五部, 在 mutation 里面修改数据
      state.name = str
    },
    changeName(state, str) {
      state.name = str
    }
  },
  // actions 里面可以放异步代码
  actions: {
    // 第二步, store 感知到你触发了一个叫做 change 的action, 执行 change 方法
    change(store, str) {
      console.log(str);
      setTimeout(() => {
        store.commit('change', str)
      },2000)
    },
    getData(store, str) {
      console.log(str);
      setTimeout(() => {
        store.commit('changeName', str)
      }, 2000)
    }

  },
  modules: {
    
  }
})
