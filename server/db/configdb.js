const firebase = require("firebase");
require("firebase/firestore");




var firebaseConfig = {
 apiKey: "AIzaSyBhpBnSzHQEvEAyenEiUi3SddYzvem_tqg",
 authDomain: "eaglingvisionver1a.firebaseapp.com",
 databaseURL: "https://eaglingvisionver1a.firebaseio.com",
 projectId: "eaglingvisionver1a",
 storageBucket: "eaglingvisionver1a.appspot.com",
 messagingSenderId: "810192060027",
 appId: "1:810192060027:web:a13b10dab970b6d7c4acde"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

module.exports= db;