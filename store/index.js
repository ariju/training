import VueTextareaAutosize from 'vue-textarea-autosize';
import Vue from 'vue';

Vue.use(VueTextareaAutosize);


export const state = () => ({
  user: {
    login: false
  }
});

export const getters = {
  user: state => {
    return state.user;
  }
};

export const actions = {
  logout({ commit }) {
    this.$fireAuth
      .signOut()
      .then(() => {
        console.log("ログアウト");
        commit("logOut");
      })
      .catch(error => {
        console.log(error);
      });
    }
};

export const mutations = {
  logOut(state) {
    state.user = "";
  }
};

