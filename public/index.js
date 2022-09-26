import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAjE0FBnUug2cuuNczA3bquVU29Og0F92A",
    authDomain: "zecaurubank.firebaseapp.com",
    projectId: "zecaurubank",
    storageBucket: "zecaurubank.appspot.com",
    messagingSenderId: "744611004831",
    appId: "1:744611004831:web:dadfa13411768e47fefdaa",
    measurementId: "G-3PRNGQLHMK",
  // ...
  // The value of `databaseURL` depends on the location of the database
     databaseURL: "https://zecaurubank-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
const usersRef = ref(db, '/Users');
onValue(usersRef, (snapshot) => {
  const data = snapshot.val();
    console.log(data)
});

var root = document.documentElement();
root.style.setProperty('--amount', 133)