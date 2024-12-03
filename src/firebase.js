import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "firebase/auth"; // Use firebase/auth instead of firebase/analytics
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWTku53RJlvVPMq29tOoWKy_5zZkDQxXQ",
    authDomain: "netflix-clone-d926a.firebaseapp.com",
    projectId: "netflix-clone-d926a",
    storageBucket: "netflix-clone-d926a.appspot.com",
    messagingSenderId: "1086536777600",
    appId: "1:1086536777600:web:17425e6d9e6f79188e4b65",
    measurementId: "G-S45H59ZZKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
};

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
};

const logout = () => {
    signOut(auth);
};

export { auth, db, signup, login, logout };
