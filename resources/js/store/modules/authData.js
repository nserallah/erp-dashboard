import firebase from "firebase/app";
import instance from "@/util/axios.js";
import "firebase/auth";
import {routes} from "../../util/axios";

function getCurrentTime() {

}

export default {
    state: {
        loggedInUser: localStorage.getItem("userInfo") != null ? JSON.parse(localStorage.getItem("userInfo")) : null,
        loading: false,
        error: null
    },
    getters: {
        loggedInUser: state => state.loggedInUser,
        loading: state => state.loading,
        error: state => state.error
    },
    mutations: {
        setUser(state, data) {
            state.loggedInUser = data;
            state.loading = false;
            state.error = null;
        },
        setLogout(state) {
            state.loggedInUser = null;
            state.loading = false;
            state.error = null;
            // this.$router.go("/");
        },
        setLoading(state, data) {
            state.loading = data;
            state.error = null;
        },
        setError(state, data) {
            state.error = data;
            state.loggedInUser = null;
            state.loading = false;
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {
        login({commit}, data) {
            commit("clearError");
            commit("setLoading", true);
            console.log(routes.login());
            instance.post(routes.login(), data)
                .then(({data}) => {
                    let currentTime = Math.floor((Date.now() != undefined ? Date.now() : new Date().getTime()) / 60000);
                    // console.log(data.expires_in)
                    data.expires_in = data.expires_in + currentTime;
                    // console.log(data.expires_in)
                    localStorage.setItem("userInfo", JSON.stringify(data));
                    commit("setUser", {uid: data.access_token});
                })
        },
        signUserUp({commit}, data) {
            commit("setLoading", true);
            commit("clearError");
            firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then(user => {
                    commit("setLoading", false);

                    const newUser = {
                        uid: user.user.uid
                    };
                    console.log(newUser);
                    localStorage.setItem("userInfo", JSON.stringify(newUser));
                    commit("setUser", newUser);
                })
                .catch(error => {
                    commit("setLoading", false);
                    commit("setError", error);
                    localStorage.removeItem("userInfo");
                    console.log(error);
                });
        },
        signOut({commit}) {
            instance.get(routes.logout())
                .then((response) => {
                    localStorage.removeItem("userInfo");
                    commit("setLogout");
                })

        }
    }
};
