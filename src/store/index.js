import { createStore } from "vuex";
import axiosClient from "../axios";
export const store = createStore({
    state: {
        auth: null,
        user:{
          data:{},
          token: sessionStorage.getItem('token'),
        },
    },
    actions: {
        register({commit}, user){
            return axiosClient.post('/register' ,user)
           
            .then(({data}) => {
                commit("setUser",data);
                return data;
            })
          
          
        },

        login({commit}, user){
            return axiosClient.post('/login' ,user)
           
            .then(({data}) => {
                commit("setUser",data);
                return data;
            })
          
        },

        logout(){
            return axiosClient.get('/logout')
            .then((response) => {
                commit("logout");
                return response
            })
            
        }

    },
    mutations: {
        setUser(state, userData) {
            state.user.token  = userData.token;
            state.user.token  = userData.user;
           // localStorage.setItem("token", JSON.stringify(userData.token));
            sessionStorage.setItem("token", userData.token);
        },

        logout: (state) => {
            state.user.token  = null;
            state.user.token  = {};
            sessionStorage.removeItem("token");
        }
    },


   
});