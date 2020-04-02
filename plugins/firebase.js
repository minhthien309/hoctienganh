import firebase from 'firebase/app';
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyApPtHuh5ZWmVxT-iH_rIrlrN5E87y3l5U",
    authDomain: "hoc-tieng-anh-7379c.firebaseapp.com",
    databaseURL: "https://hoc-tieng-anh-7379c.firebaseio.com",
    projectId: "hoc-tieng-anh-7379c",
    storageBucket: "hoc-tieng-anh-7379c.appspot.com",
    messagingSenderId: "947262085652",
    appId: "1:947262085652:web:a0f69f5d28dc49e687e501"
};

let app = null
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
    firebase.firestore();
}
const fireDb = firebase.firestore();

export {fireDb};