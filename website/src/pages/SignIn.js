import React, { useState } from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { GoogleAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth'
import { ref, set } from 'firebase/database';
import { db } from '../firebase';
import { auth } from '../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import "./SignIn.css";

export default function SignIn(props) {
    const [signedIn, setSignedIn] = useState(false);
    const navigate = useNavigate();
  
    const configObj = {
    signInOptions: [
      { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
      { provider: GoogleAuthProvider.PROVIDER_ID }
    ],
    signInFlow: 'popup',
    credentialHelper: 'none',
    signInSuccessUrl: '/home',
    callbacks: {
        signInSuccessWithAuthResult: function(authResult) {
            set(ref(db, 'users/' + authResult.user.uid), {
                name: authResult.user.displayName
            })
            .then(() => {
                setSignedIn(true);
            })
            .catch((err) => {
                console.error(err);
                setSignedIn(false);
            });
            return false;
        }
    }
  }

  if (signedIn) {
    return <Navigate to="/home" />
  }

  return (
    <div className="">
      <div className="signin-container">
        <img className="welcome-img" src="./img/welcome-to-heart.png" />
        <StyledFirebaseAuth uiConfig={configObj} firebaseAuth={auth} />
        <div className="about-link" onClick={() => {navigate("/about")}}>About HEART</div>
      </div>
    </div>
  )
}