// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-blog-f0d37.firebaseapp.com',
  projectId: 'mern-blog-f0d37',
  storageBucket: 'mern-blog-f0d37.appspot.com',
  messagingSenderId: '285247292914',
  appId: '1:285247292914:web:76d0c62834365a3ef3976b',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
