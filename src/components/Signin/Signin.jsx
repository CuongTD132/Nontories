import React, { useState } from "react";
import "../Signin/signin.css"
import { BrowserRouter as Router, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithFacebook, signInWithGoogle } from "../../shared/firebase/firebase";

const Signin = () => {
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault();
        logInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                if(userCredential.verified) {
                    navigate(`/personal/${userCredential.user.uid}`)
                } else {
                    navigate('/payments')
                }
            })
    }

    return (
        <form className="signin">
            <h1>Đăng nhập</h1>
            <div className="signin_account">
                <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Nhập tên tài khoản" />
            </div>
            <div className="signin_password">
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="••••••••" />
            </div>
            <div className="signin_noaccount">
                <div>Bạn chưa có tài khoản,
                    <Link to="/signUp" className="signin_noaccount_link"> đăng ký ngay</Link>
                </div>
            </div>
            <div className="signin_button">
                <button onClick={handleSignIn}>Đăng nhập</button>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
                <button onClick={signInWithFacebook}>Sign in with Facebook</button>
            </div>
        </form>
    )
}

export default Signin