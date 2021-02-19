import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyCpYL-M5PChOxt2UQG4p8hRj7f3cxqZYeo",
      authDomain: "training-b5a9b.firebaseapp.com",
      databaseURL: "https://training.firebaseio.com",
      projectId: "training-b5a9b",
      storageBucket: "training-b5a9b.appspot.com",
      messagingSenderId: "122874744969",
      appId: "1:122874744969:web:3eff831aedcd1474dbb658",
      measurementId: "G-6BPWNTJ6HZ"
    }
  )
}

export default firebase