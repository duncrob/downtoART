import "./ArtView.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import ProcessViewCard from "../components/ProcessViewCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { ref, onValue} from "firebase/database";
import { db } from "../firebase";

function ArtView() {
    const navigate = useNavigate();
    const location = useLocation();
    const [posts, setPosts] = useContext(Context);

    let { id } = useParams();

    var currentPost = posts.find(post => {
      return post.id === id
    });
    const [user, setUser] = useState("");

    function renderEditBtn() {
        const { owned } = location.state;

        if (owned) {
            return (<Link to="/edit" className="edit-post-btn">Edit</Link>)
        }
        return
    }

    function renderProcesses() {
      return (currentPost.process.map((edit) => {
        return <ProcessViewCard imgSrc={edit["img-src"]} title={edit.name} desc={edit.desc} />
      }))
    }

    useEffect(() => {
      const userRef = ref(db, `users/` + currentPost.uid);

      const offFunction = onValue(userRef, (snapshot) => {
        const currentUser = snapshot.val();
        setUser(currentUser.name);
      })

      function cleanup() {
        offFunction();
      }
      return cleanup;
    }, []);

  return (
    <div className='artview-container'>
      <NavBar />
      <div className="artview-content">
        <div className="artview-nav">
            <FontAwesomeIcon icon={faChevronLeft} size='xl' onClick={() => {navigate(-1)}} />
            {renderEditBtn()}
        </div>
        <div className="main-post">
            <img className="key-img" src={currentPost["key-img-src"]} />
            <div className="post-metadata">
                <span className="post-title">{currentPost.title}</span>
                <br />
                <span className="medium">{currentPost.medium}</span>
                <br /><br />
                <span className="creator">{user}</span>
                <br /><br />
                <span className="desc">{currentPost.desc}</span>
                <div className="interaction-icons">
                    <FontAwesomeIcon icon={faHeart} className="interaction-icon" size='2xl' />
                    <FontAwesomeIcon icon={faBookmark} className="interaction-icon" size='2xl' />
                    <FontAwesomeIcon icon={faComment} className="interaction-icon" size='2xl' />
                </div>
            </div>
        </div>
        {renderProcesses()}
      </div>
      <TabBar />
    </div>
  )
}

export default ArtView;