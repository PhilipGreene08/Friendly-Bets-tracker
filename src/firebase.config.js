// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD1H4Fbu_CYVd5xsMqE1Z78hyYFAPFW3Rc',
  authDomain: 'department-task-list.firebaseapp.com',
  projectId: 'department-task-list',
  storageBucket: 'department-task-list.appspot.com',
  messagingSenderId: '207972181631',
  appId: '1:207972181631:web:780c8fd8ab71d8aecec14a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
