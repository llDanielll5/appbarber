import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCpGvIDDrAvs6A0cF3aZ8oNf7qC6fIGqj0",
  authDomain: "barberapp-6c110.firebaseapp.com",
  projectId: "barberapp-6c110",
  storageBucket: "barberapp-6c110.appspot.com",
  messagingSenderId: "417586177578",
  appId: "1:417586177578:web:990d53ba152f6a8d6c8553",
  measurementId: "G-QH0QTR1JKT",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
