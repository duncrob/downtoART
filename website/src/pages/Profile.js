import "./Profile.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { auth } from '../firebase';
import { Context } from "../App";
import { useContext } from "react";

function Profile() {
  console.log(auth.currentUser);
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
        <div className="profile-header">{auth.currentUser.displayName}</div>
        <div className="profile-bio">Just here to express myself through my art, and sometimes my Minecraft worlds.</div>
        <hr />
        <div className="profile-gallery">
          {renderArt()}
        </div>
      </div>
      <TabBar />
    </div>
  )
}

export default Profile;