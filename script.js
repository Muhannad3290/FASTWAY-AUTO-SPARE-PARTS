import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, addDoc, setDoc, updateDoc, deleteDoc, onSnapshot, collection, query, where, getDocs, serverTimestamp, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// --- Core Firebase Initialization ---
setLogLevel('Debug');
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');

if (Object.keys(firebaseConfig).length === 0) {
    console.error("Firebase config is missing. Data persistence will not work.");
    window.db = null;
    window.auth = null;
} else {
    const app = initializeApp(firebaseConfig);
    window.db = getFirestore(app);
    window.auth = getAuth(app);
    
    // Expose required functions globally for use in the main script block
    window.firebase = {
        getFirestore, doc, addDoc, updateDoc, deleteDoc, onSnapshot, collection, query, getDocs, getDoc, serverTimestamp 
    };

    // --- Authentication Setup ---
    onAuthStateChanged(window.auth, (user) => {
        if (user) {
            window.userId = user.uid;
            document.getElementById('user-id-display').textContent = `User ID: ${user.uid}`;
            console.log("Firebase Auth State Changed: Logged in. UID:", user.uid);
            // Once authenticated, load the initial data
            window.loadPartsData();
        } else {
            console.log("Firebase Auth State Changed: Logged out or still authenticating.");
        }
    });

    const authenticate = async () => {
        try {
            const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
            if (initialAuthToken) {
                await signInWithCustomToken(window.auth, initialAuthToken);
                console.log("Signed in with custom token.");
            } else {
                await signInAnonymously(window.auth);
                console.log("Signed in anonymously.");
            }
        } catch (error) {
            console.error("Authentication Error:", error);
        }
    };
    authenticate();
}

window.APP_ID = appId;
