import "./Gallery.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { useNavigate, Link } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className='gallery-container'>
      <NavBar />
      <div className="gallery-content">
        <div className="gallery-nav">
          <div className="back-btn">
            <FontAwesomeIcon onClick={() => {navigate(-1)}} icon={faChevronLeft} size='xl' />
          </div>
        <div className="gallery-header">#Sunset</div>
      </div>
      <div className="gallery-post">
        <Link to="/artview" state={{ owned: false }} className="gallery-img">
          <img className="internal-img" src="../img/main-post-tree.png" alt="gallery"/>
        </ Link>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
        <img className="gallery-img" src="../img/image-4.jpg" alt="gallery"/>
      </div>
      </div>
      <TabBar />
    </div>
  )
}

export default Gallery;