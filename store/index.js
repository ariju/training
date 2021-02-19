import firebase from '~/plugins/firebase'

export const state = () => ({
  userUid: '',
  userName: '',
})

export const mutations = {
  setUserUid(state,userUid) {
    state.userUid = userUid
  },
  setUserName(state,userName) {
    state.userName = userName
  }
}

export const actions = {
  login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      const user = result.user;
      console.log('success : ' + user.uid + ' : ' + user.displayName)
      commit('setUserUid', user.uid)
      commit('setUserName', user.displayName)
    }).catch(function(error) {
      let errorCode = error.code;
      console.log('error : ' + errorCode)
    });
  }
}

export const getters = {
  getUserUid(state) {
    return state.userUid
  },
  getUserName(state) {
    return state.userName
  }
}