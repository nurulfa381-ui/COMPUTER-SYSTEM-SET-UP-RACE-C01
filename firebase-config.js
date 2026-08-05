import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import {
  getAuth,
  signInAnonymously
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  push,
  get,
  onValue,
  off,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-database.js";


const firebaseConfig = {
  apiKey:
    "AIzaSyCVQ3P4O1mlPl9GCznwTpX29lENmSx0uLk",

  authDomain:
    "computer-system-set-up-race.firebaseapp.com",

  databaseURL:
    "https://computer-system-set-up-race-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId:
    "computer-system-set-up-race",

  storageBucket:
    "computer-system-set-up-race.firebasestorage.app",

  messagingSenderId:
    "855710524264",

  appId:
    "1:855710524264:web:f0fe2dc32cf7cc1c8cacdd"
};


const app =
  initializeApp(
    firebaseConfig
  );


const auth =
  getAuth(app);


const database =
  getDatabase(app);


/* =========================================================
   LOGIN FIREBASE TANPA AKAUN
========================================================= */

async function ensureFirebaseLogin() {
  if (
    auth.currentUser
  ) {
    return auth.currentUser;
  }

  const result =
    await signInAnonymously(
      auth
    );

  return result.user;
}


/* =========================================================
   EXPORT
========================================================= */

export {
  app,
  auth,
  database,

  ref,
  set,
  update,
  remove,
  push,
  get,
  onValue,
  off,
  serverTimestamp,

  ensureFirebaseLogin
};
