import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAWKvLkuwvSUdJjiSe2eKzlrj7Ko4hIDTw",
    authDomain: "web-chat-react-c78bb.firebaseapp.com",
    projectId: "web-chat-react-c78bb",
    storageBucket: "web-chat-react-c78bb.appspot.com",
    messagingSenderId: "621989699956",
    appId: "1:621989699956:web:4b07680e39448fa87a0c21",
    measurementId: "G-PK0L918SW1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;