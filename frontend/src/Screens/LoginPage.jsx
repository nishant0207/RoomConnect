import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
const Login = () => {
    return (
        // below div is the outer most container which have whole page inside
        <div style={{ maxWidth: "100%", height: "100vh", display: "flex", flexBasis: "100%", justifyContent: "center", background: "rgba(110, 114, 223, 0.7)" }}>
            {/* below div is the 3d rectangle visible */}
            <div style={{ height: "90vh", width: "90%", alignSelf: "center", background: "white", backdropFilter: "blur(2px)", borderRadius: "20px", display: 'flex', flexDirection: "row" }}>
                <div style={{ flex: "50%", position: "relative", overflow:"hidden"}}>
                    <img style={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "20px", overflow:"hidden", border:"1px solid lightgray" }} src="https://images.unsplash.com/photo-1520277739336-7bf67edfa768?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "#fff", textAlign: "center" }}>
                        <h1 style={{fontSize:"40px", fontWeight:"bolder"}}>Room Connect</h1>
                        <p style={{fontSize:"18px", fontWeight:"bold"}}>Discover Your Ideal Haven: Where Hostel Life Meets Comfort, Community, and Convenience.</p>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flex: "50%",
                    justifyContent: "center",
                    alignContent: "center",
                    padding: "20px",
                    flexDirection:"column"
                }}>
                    <h1>Login</h1>
                    <p>Enter your registered email</p>
                    <form action="">
                        <text style={{fontFamily:"monospace", fontSize:"20px"}}>Email</text> <br />
                        <input type="email" id="emailid" style={{border:"1px solid lightgray", width:"70%", borderRadius:"5px"}} placeholder="Email" required/>
                        <br /> <br />
                        <text style={{fontFamily:"monospace", fontSize:"20px"}}>Password</text> <br />
                        <input type="password" id="password" style={{border:"1px solid lightgray", width:"70%", borderRadius:"5px"}} placeholder="Password" required />
                        <br /> <br />
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;
