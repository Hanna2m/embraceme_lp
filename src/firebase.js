import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBMLu6gXDJI_OrnSkd2MqHHwLPFc0tAG58",
  authDomain: "embraceme-fc7be.firebaseapp.com",
  projectId: "embraceme-fc7be",
  storageBucket: "embraceme-fc7be.appspot.com",
  messagingSenderId: "671309856661",
  appId: "1:671309856661:web:25e1cbf65bd00abb6c009c",
  measurementId: "G-REG263FR22"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
