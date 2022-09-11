import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Configuración de la base de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBO58eh0bNxy7Dw10mPf93I7NtaVtwh1eQ",
  authDomain: "react-ecommerce-3e981.firebaseapp.com",
  projectId: "react-ecommerce-3e981",
  storageBucket: "react-ecommerce-3e981.appspot.com",
  messagingSenderId: "798947229934",
  appId: "1:798947229934:web:397f44ed4f7c68971a73ff"
};

// Inicialización de la App en Firebase
const app = initializeApp(firebaseConfig);

// Seleccionamos la base de datos de Firestore
export const db = getFirestore(app);
