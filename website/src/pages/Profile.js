import "./Profile.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import React, { useState } from 'react';

function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    { src: '../img/image-1.jpg', alt: 'Image 1', desc: 'Sunset Tree' },
    { src: '../img/image-2.jpg', alt: 'Image 2', desc: 'Minecraft City' },
    { src: '../img/image-3.jpg', alt: 'Image 3', desc: 'Random Art' },
    { src: '../img/image-4.jpg', alt: 'Image 4', desc: 'Seattle Digital Art' },
    { src: '../img/image-5.jpg', alt: 'Image 5', desc: 'Planets in Space' },
  ];

  const handleImageClick = (event, image) => {
    event.stopPropagation();
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='home-container'>
      <NavBar />
      <TabBar />
      <div className="profile">
        <div className="header">
          <h1>STEVEN LAM</h1>
        </div>
        <div className="bio">
          <p>Just here to express myself through my art, and sometimes my Minecraft worlds.</p>
        </div>
        <hr />
        <div className="gallery">
          {images.map((image, index) => (
            <div className="gallery-item" key={index} onClick={(event) => handleImageClick(event, image)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
          {selectedImage && (
            <div className="modal" onClick={handleCloseModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={selectedImage.src} alt={selectedImage.alt} />
                <p>{selectedImage.desc}</p>
              </div>
            </div>
          )}
          {/* <img className="image" src="../img/image-1.jpg" alt="Photo 1" />
          <img className="image" src="../img/image-2.jpg" alt="Photo 2" />
          <img className="image" src="../img/image-3.jpg" alt="Photo 3" />
          <img className="image" src="../img/image-4.jpg" alt="Photo 4" />
          <img className="image" src="../img/image-5.jpg" alt="Photo 5" /> */}
        </div>
      </div>
    </div>
  )
}

export default Profile;