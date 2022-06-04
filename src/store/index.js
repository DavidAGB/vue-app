import { createStore } from "vuex";
import axiosClient from "../axios";
export const store = createStore({
    state: {

        user: {

            data: {},
            token: sessionStorage.getItem('token'),
        },
        posts: {
            loading: false,
            data: {},
        }
    },
    actions: {
        register({ commit }, user) {
            return axiosClient.post('/register', user)

            .then(({ data }) => {
                commit("setUser", data);
                return data;
            })
        },

        login({ commit }, user) {
            return axiosClient.post('/login', user)

            .then(({ data }) => {
                commit("setUser", data);

                return data;
            })

        },

        logout({ commit }) {
            return axiosClient.get('/logout')
                .then((response) => {
                    commit("logout");
                    return response
                })
        },

        getPosts({ commit }) {
            commit("setPostsLoading", true)
            return axiosClient.get('/posts')
                .then((response) => {
                    commit("setPostsLoading", false);
                    commit("setPosts", response);

                    return response
                })
        }

    },
    mutations: {
        setPosts(state, postsData) {
            //debugger;
            state.posts.data = postsData.data;
        },
        setPostsLoading(state, loading) {
            state.posts.loading = loading;
        },
        setUser(state, userData) {
            //debugger;
            state.user.token = userData.token;
            state.user.data = userData.data;
            sessionStorage.setItem("token", userData.token);
            localStorage.setItem("data", JSON.stringify(userData.data));
        },
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("token");
            localStorage.removeItem("data");

        }
    },



});