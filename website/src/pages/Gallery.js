import "./Gallery.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  return (
    <div className='gallery-container'>
      <NavBar />
      <div className="gallery-content">
        <div className="gallery-nav">
          <div className="back-btn">
            <FontAwesomeIcon icon={faChevronLeft} size='xl' />
          </div>
        <div className="gallery-header">#Sunset</div>
      </div>
      <div className="gallery-post">
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
        <img className="gallery-img" src="../img/category.png" alt="gallery image"/>
      </div>
      </div>
      <TabBar />
    </div>
  )
}

export default Gallery;