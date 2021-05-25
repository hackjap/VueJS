import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './mudules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

Vue.use(Vuex);



export const store = new Vuex.Store({
  
    modules:{
        todoApp
    }
    // // getters : getters,
    // getters,
    // mutations
    
});