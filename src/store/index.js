import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: false,
    todos:[
      {id: 1, text:'first of all you need to improve all your skills which you need.', done:true},
      {id: 1, text:'after thatyou need to send your resume to big companies.', done:false},
      {id: 1, text:'then you should wait for several days for call from them.', done:false}
    ]
  },
  methods:{
    signin:function name() {
      this.state.loginState = true;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
