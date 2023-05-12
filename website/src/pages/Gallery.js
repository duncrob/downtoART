import "./Gallery.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../App";
import { useContext } from "react";

import { useNavigate, Link, useParams } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();
  const [posts, setPosts] = useContext(Context);

  let { medium } = useParams();

  console.log(medium);

  function renderPosts() {
    let relevantPosts = posts.filter((post) => {
      return post.medium === medium;
    });
    
    let renderedPosts = relevantPosts.map((post) => {

      return (
        <Link to={"/artview/" + post.id} state={{ owned: false }} className="gallery-img" key={post.id}>
          <img className="internal-img" src={post["key-img-src"]} alt="gallery"/>
        </ Link>
      )
    });

    return renderedPosts
  }

  return (
    <div className='gallery-container'>
      <NavBar />
      <div className="gallery-content">
        <div className="gallery-nav">
          <div className="back-btn">
            <FontAwesomeIcon onClick={() => {navigate(-1)}} icon={faChevronLeft} size='xl' />
          </div>
        <div className="gallery-header">{medium.toUpperCase()}</div>
      </div>
      <hr className="gallery-line" />
      <div className="gallery-post">
        {renderPosts()}
      </div>
      </div>
    </div>
  )
}

export default Gallery;