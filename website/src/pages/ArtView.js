import "./ArtView.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

function ArtView() {
  return (
    <div className='artview-container'>
      <NavBar />
      <div className="artview-content">
        <div className="artview-nav">
            <FontAwesomeIcon icon={faChevronLeft} size='xl' />
            <div className="back-title">#Sunset</div>
        </div>
        <div className="main-post">
            <img className="key-img" src="../img/example-art.jpg" />
            <div className="post-metadata">
                <span className="post-title">Sunset Tree</span>
                <br />
                <span className="medium">Photograph</span>
                <br /><br />
                <span className="creator">Steven Lam</span>
                <br /><br />
                <span className="desc">The sun shines directly through the tree during our roadtrip down to California creating a rather aesthetic sunset scene.</span>
                <div className="interaction-icons">
                    <FontAwesomeIcon icon={faHeart} size='xl' />
                    <FontAwesomeIcon icon={faBookmark} size='xl' />
                    <FontAwesomeIcon icon={faComment} size='xl' />
                </div>
            </div>
        </div>
      </div>
      <TabBar />
    </div>
  )
}

export default ArtView;