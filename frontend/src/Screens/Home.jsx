import React, {useState, useEffect} from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyBVAzFb9LSZDk4Ex59Myx0_CCnUhWdFCkA",
        authDomain: "room-connect-88b78.firebaseapp.com",
        projectId: "room-connect-88b78",
        storageBucket: "room-connect-88b78.appspot.com",
        messagingSenderId: "256986412795",
        appId: "1:256986412795:web:9bc8705d26b1a21cb8a25e",
        measurementId: "G-1DE065R7GV"
        };

    const [userEmail, setUserEmail] = useState(null);
    const navigate = useNavigate();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    useEffect(() => {
        // Listen for changes in authentication state
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in.
                setUserEmail(user.email);
            } else {
                // No user is signed in.
                setUserEmail(null);
            }
        });
        // Cleanup function
        return () => unsubscribe();
    }, [auth]);
    
    const handleLogout = () => {

        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            console.log(errorMessage);
            alert(error)
        });
    }




    return(
        <>
        Welcome to the home screen
        {userEmail && <div>{userEmail}</div>}
        <button className="btn btn-outline-primary" onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Home;