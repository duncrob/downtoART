import "./Profile.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from '../firebase';
import { Context } from "../App";
import { useContext } from "react";
import AboutUser from "../components/AboutUser";
import { onValue, ref } from "firebase/database";

function Profile() {
  let navigate = useNavigate();
  const [posts, setPosts] = useContext(Context);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userRef = ref(db, `users/` + auth.currentUser.uid);

    const offFunction = onValue(userRef, (snapshot) => {
      const currentUser = snapshot.val();
      setUser(currentUser);
    })

    function cleanup() {
      offFunction();
    }
    return cleanup;
  }, []);

  function renderArt() {
    let ownedPosts = posts.filter((post) => {
      return post.uid === auth.currentUser.uid
    });

    return ownedPosts.map((post) => {
      return (
        <Link to={"/artview/" + post.id} state={{ owned: true }} className="image">
          <img className="profile-inner-img" src={post["key-img-src"]} alt={post.title} />
        </Link>
      )
    })
  }

  return (
    <div className='profile-container'>
      <NavBar currentPage={"profile"} />
      <div className="profile-content">
        <div className="profile-header">MY GALLERY</div>
        <div className="profile-gallery">
          {renderArt()}
        </div>
        <div className="profile-upload-btn" onClick={() => navigate("/upload")}>Upload Art</div>
        <AboutUser user={user} />
      </div>
    </div>
  )
}

export default Profile;