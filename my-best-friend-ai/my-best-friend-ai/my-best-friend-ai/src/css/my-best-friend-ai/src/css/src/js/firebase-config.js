import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendEmailVerification
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { 
    getFirestore, collection, addDoc, onSnapshot, query, 
    orderBy, serverTimestamp, setDoc, doc, getDoc, setLogLevel, where 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

setLogLevel('debug');

export const firebaseConfig = {
    apiKey: "AIzaSyAK9GdB9DL1lvqSAefY6_Bvj0Hg97LeS88",
    authDomain: "ai-friend-and-personal-chatbot.firebaseapp.com",
    projectId: "ai-friend-and-personal-chatbot",
    storageBucket: "ai-friend-and-personal-chatbot.firebasestorage.app",
    messagingSenderId: "719218110615",
    appId: "1:719218110615:web:d563eed6b25e2aced4b9d2",
    measurementId: "G-C0KRF0RYGH"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const appId = firebaseConfig.projectId;
export const usersCollectionRef = collection(db, 'artifacts', appId, 'public', 'data', 'users');
export const roomsCollectionRef = collection(db, 'artifacts', appId, 'public', 'data', 'rooms');
export const oneOnOneChatsCollectionRef = collection(db, 'artifacts', appId, 'public', 'data', 'oneOnOneChats');
