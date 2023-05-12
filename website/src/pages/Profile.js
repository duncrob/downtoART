import "./Profile.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { Context } from "../App";
import { useContext } from "react";
import AboutUser from "../components/AboutUser";

function Profile() {
  let navigate = useNavigate();
  const [posts, setPosts] = useContext(Context);

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
      <NavBar />
      <div className="profile-content">
        <div className="profile-header">MY GALLERY</div>
        <div className="profile-gallery">
          {renderArt()}
        </div>
        <div className="profile-upload-btn" onClick={() => navigate("/upload")}>Upload Art</div>
        <AboutUser currentUser={auth.currentUser} />
      </div>
      <TabBar />
    </div>
  )
}

export default Profile;