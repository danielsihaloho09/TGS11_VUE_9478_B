
import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({ databaseURL: 'https://vueandfirebase-a36d3.firebaseio.com/'})
    .database()

export const dessertsRef = db.ref('desserts');
export const drinksRef = db.ref('drinks');