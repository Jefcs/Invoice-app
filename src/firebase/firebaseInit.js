import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAk-BdVTBKcKlFcn7SI09NEZkitFcZzRu0',
  authDomain: 'invoice-app-16e0d.firebaseapp.com',
  projectId: 'invoice-app-16e0d',
  storageBucket: 'invoice-app-16e0d.appspot.com',
  messagingSenderId: '191287425577',
  appId: '1:191287425577:web:dc28eeac85841aa146fa38',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
