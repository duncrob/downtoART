import "./ArtView.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import ProcessViewCard from "../components/ProcessViewCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate, useLocation } from "react-router-dom";

function ArtView() {
    const navigate = useNavigate();
    const location = useLocation();

    function renderEditBtn() {
        const { owned } = location.state;

        if (owned) {
            return (<Link to="/edit" className="edit-post-btn">Edit</Link>)
        }
        return
    }

  return (
    <div className='artview-container'>
      <NavBar />
      <div className="artview-content">
        <div className="artview-nav">
            <FontAwesomeIcon icon={faChevronLeft} size='xl' onClick={() => {navigate(-1)}} />
            {renderEditBtn()}
        </div>
        <div className="main-post">
            <img className="key-img" src="../img/main-post-tree.png" />
            <div className="post-metadata">
                <span className="post-title">Sunset Tree</span>
                <br />
                <span className="medium">Photograph</span>
                <br /><br />
                <span className="creator">Steven Lam</span>
                <br /><br />
                <span className="desc">The sun shines directly through the tree during our roadtrip down to California creating a rather aesthetic sunset scene.</span>
                <div className="interaction-icons">
                    <FontAwesomeIcon icon={faHeart} className="interaction-icon" size='2xl' />
                    <FontAwesomeIcon icon={faBookmark} className="interaction-icon" size='2xl' />
                    <FontAwesomeIcon icon={faComment} className="interaction-icon" size='2xl' />
                </div>
            </div>
        </div>
        <ProcessViewCard imgSrc="../img/og-image.png" title="Original Image" desc="This is my original image." />
        <ProcessViewCard imgSrc="../img/color-adjustment.png" title="Color Adjustment" desc="This is the photo after I adjusted the colors." />
        <ProcessViewCard imgSrc="../img/exposure-adjustment.png" title="Exposure Adjustment" desc="This is my photo after I adjusted the exposure." />
      </div>
      <TabBar />
    </div>
  )
}

export default ArtView;