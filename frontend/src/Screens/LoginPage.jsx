import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import styled from "styled-components";

const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  transition: all 0.6s ease-in-out;
  left: 0;
  height:100%;
  opacity: 1;
  width: 50%;
  z-index: 2;
  ${props =>
    props.signingIn !== true
      ? `transform: translateY(-100%); opacity: 0;`: null}
`;

const SignInContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  z-index: 2;
  ${props => (props.signingIn !== true ? `transform: translateY(100%); opacity:0` : null)}
`;


const Login = () => {

    const provider = new GoogleAuthProvider();

    const navigate = useNavigate();

    // firebase configrations
    const firebaseConfig = {
        apiKey: "AIzaSyBVAzFb9LSZDk4Ex59Myx0_CCnUhWdFCkA",
        authDomain: "room-connect-88b78.firebaseapp.com",
        projectId: "room-connect-88b78",
        storageBucket: "room-connect-88b78.appspot.com",
        messagingSenderId: "256986412795",
        appId: "1:256986412795:web:9bc8705d26b1a21cb8a25e",
        measurementId: "G-1DE065R7GV"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();

    const handleLogin = () => {

        var email = document.getElementById("emailid").value
        var password = document.getElementById("password").value

        // Login Function
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast("Logged In Successfully");
                navigate("Home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);

            });
    }


    const handleSignup = () => {

        var email = document.getElementById("emailid").value
        var password = document.getElementById("password").value

        // Signup function
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast("Signed Up Successfully");
                navigate("Home")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorMessage);
                alert(error)
            });
    }

    // Sign in with google function
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                navigate("Home")
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    const handleToggleForms = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
    };

    return (
        // below div is the outer most container which have whole page inside
        <div style={{
            maxWidth: "100%", height: "100vh", display: "flex", flexBasis: "100%", background: "white", flexDirection: "column", background: "rgb(15,46,173)",
            background: "linear-gradient(90deg, rgba(15,46,173,0.8646052170868348) 0%, rgba(0,140,255,0.8982186624649859) 66%)"
        }}>

            <div style={{ width: "100%", height: "60px", boxShadow: "10px 0px 8px rgba(0,0,0,0.2)", display: "flex", alignItems: "center", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)" }}>
                <p style={{ paddingLeft: "30px", paddingTop: "15px", fontFamily: "monospace", fontSize: "20px", fontWeight: "bold", color: "white" }}>Room Connect</p>
            </div>

            <div style={{
                height: "100vh", width: "100%", margin: "auto auto", display: "flex", justifyContent: "center", alignContent: "center", flexDirection: "row"
            }}>

                <div style={{
                    height: "65vh",
                    width: "50vw",
                    display: 'flex',
                    flexDirection: "column",
                    padding: "20px",
                    margin: "auto auto",
                    justifyContent: "center",
                    alignContent: "center",
                    background: "transparent"
                }}>
                    <p style={{ fontFamily: "monospace", fontSize: "30px", fontWeight: "bold", color: "white" }}>Discover Your Ideal Haven: Where Hostel Life Meets Comfort, Community, and Convenience.</p>
                </div>

                <div style={{
                        overflow:"hidden", 
                        height:"70vh", 
                        width: "30vw",
                        borderRadius: "20px",
                        margin: "auto auto",
                        background: "white",
                        position:'relative',
                        boxShadow: "10px 10px 8px rgba(0,0,0,0.2)",
                        }}>
                    {/* below is the login form and sign up form area */}
                    {/* <Container> */}
                    <SignUpContainer signingIn={!isLoginFormVisible}>
                    <div style={{
                        height: "70vh",
                        width: "30vw",
                        border: "1px solid lightgray",
                        borderRadius: "20px",
                        boxShadow: "10px 10px 8px rgba(0,0,0,0.2)",
                        display: 'flex',
                        flexDirection: "column",
                        padding: "30px",
                        margin: "auto auto",
                        background: "white",
                        position:"absolute",
                        transition: "all 0.6s ease-in-out",
                    }}
                        id="login"
                        className="form-wrapper sign-in"
                    >
                        <h1>Login</h1>

                        <p>Hi, Welcome back</p>

                        <button style={{ width: "100%", alignSelf: "center" }} class="btn btn-outline-success" type="button" onClick={handleLoginWithGoogle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg>  Login with Google</button>

                        <p style={{ fontFamily: "monospace", color: "gray", fontSize: 15, alignSelf: "center", marginTop: "20px" }}>--------- or Login with Email ---------</p>

                        <form action="" style={{ width: "100%" }}>
                            <text style={{ fontFamily: "monospace", fontSize: "20px" }}>Email</text> <br />

                            <input type="email" id="emailid" style={{ border: "1px solid lightgray", width: "100%", height: 40, borderRadius: "5px" }} placeholder="Email" required />
                            <br /> <br />

                            <text style={{ fontFamily: "monospace", fontSize: "20px" }}>Password</text> <br />

                            <input type="password" id="password" style={{ border: "1px solid lightgray", width: "100%", height: 40, borderRadius: "5px" }} placeholder="Password" required />
                            <br /> <br />

                            <button style={{ width: "100%", alignSelf: "center" }} type="button" id="Login" class="btn btn-outline-primary" onClick={handleLogin}>Login</button>

                            <p style={{ marginTop: "20px" }}>Don't have an account? <span style={{ color: "rgb(49,108,244)", cursor: "pointer" }} id="signInBtn-Link" onClick={handleToggleForms}>Create an account</span></p>
                        </form>
                    </div>
                    </SignUpContainer>

                    <SignInContainer signingIn={isLoginFormVisible}>
                    <div style={{
                        height: "70vh",
                        width: "30vw",
                        border: "1px solid lightgray",
                        borderRadius: "20px",
                        boxShadow: "10px 10px 8px rgba(0,0,0,0.2)",
                        display: 'flex',
                        flexDirection: "column",
                        padding: "30px",
                        margin: "auto auto",
                        background: "white"
                    }}
                        id="signup"
                        className="form-wrapper sign-up"
                    >
                        <h1>Sign Up</h1>

                        <p>Hi, Welcome back</p>

                        <button style={{ width: "100%", alignSelf: "center" }} class="btn btn-outline-success" type="button" onClick={handleLoginWithGoogle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg>  Login with Google</button>

                        <p style={{ fontFamily: "monospace", color: "gray", fontSize: 15, alignSelf: "center", marginTop: "20px" }}>--------- or SignUp with Email ---------</p>

                        <form action="" style={{ width: "100%" }}>
                            <text style={{ fontFamily: "monospace", fontSize: "20px" }}>Email</text> <br />

                            <input type="email" id="emailid" style={{ border: "1px solid lightgray", width: "100%", height: 40, borderRadius: "5px" }} placeholder="Email" required />
                            <br /> <br />

                            <text style={{ fontFamily: "monospace", fontSize: "20px" }}>Password</text> <br />

                            <input type="password" id="password" style={{ border: "1px solid lightgray", width: "100%", height: 40, borderRadius: "5px" }} placeholder="Password" required />
                            <br /> <br />

                            <button style={{ width: "100%", alignSelf: "center" }} type="button" id="Login" class="btn btn-outline-primary" onClick={handleSignup}>Signup</button>

                            <p style={{ marginTop: "20px" }} id="signUpBtn-Link">Already have an account? <span style={{ color: "rgb(49,108,244)", cursor: "pointer" }} onClick={handleToggleForms}>Login</span></p>
                        </form>
                    </div>
                    </SignInContainer>
                    {/* </Container> */}
                </div>
            </div>

        </div>
    )
};

export default Login;