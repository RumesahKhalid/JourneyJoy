
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAdtUCBHrnflbwBuS7TAf-cO4u2p9HWITw",
  authDomain: "travel-415112.firebaseapp.com",
  projectId: "travel-415112",
  storageBucket: "travel-415112.appspot.com",
  messagingSenderId: "595914026930",
  appId: "1:595914026930:web:7f09722f5fa8e5650e3eab",
  measurementId: "G-E3QR0B1X7Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{app, auth};