import "./Profile.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className='profile-container'>
      <NavBar />
      <div className="profile-content">
        <div className="profile-header">STEVEN LAM</div>
        <div className="profile-bio">Just here to express myself through my art, and sometimes my Minecraft worlds.</div>
        <hr />
        <div className="profile-gallery">
          <Link to="/artview" state={{ owned: true }} className="image">
            <img className="profile-inner-img" src="../img/image-1.jpg" alt="Sunset Tree" />
          </Link>
          <img className="image" src="../img/image-2.jpg" alt="Minecraft" />
          <img className="image" src="../img/image-5.jpg" alt="Space" />
          <img className="image" src="../img/collage1.jpg" alt="Collage cat" />
          <img className="image" src="../img/abstractColorPencil.jpeg" alt="abstractColorPencil" />
          <img className="image" src="../img/watercolor1.jpeg" alt="Watercolor and oil" />
          <img className="image" src="../img/image-3.jpg" alt="Student Art" />
          <img className="image" src="../img/watercolor2.jpg" alt="Watercolor lemons" />
          <img className="image" src="../img/collage2.png" alt="Collage dog" />
          
          
        </div>
      </div>
      <TabBar />
    </div>
  )
}

export default Profile;