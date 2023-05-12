import "./ArtView.css";
import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import ProcessViewCard from "../components/ProcessViewCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Context } from "../App";
import { useContext, useEffect, useState } from "react";
import { ref, onValue} from "firebase/database";
import { db } from "../firebase";
import AboutUser from "../components/AboutUser";

function ArtView() {
    const navigate = useNavigate();
    const location = useLocation();
    const [posts, setPosts] = useContext(Context);

    let { id } = useParams();

    var currentPost = posts.find(post => {
      return post.id === id
    });
    const [user, setUser] = useState({});

    function renderEditBtn() {

        // if (owned) {
        //     return (<Link to="/edit" className="edit-post-btn">Edit</Link>)
        // }
        // return
    }

    function renderProcesses() {
      if (currentPost.process !== undefined) {
        let processCards = (currentPost.process.map((edit, i) => {
          return <ProcessViewCard imgSrc={edit["img-src"]} title={edit.name} desc={edit.desc} index={i} />
        }))

        return (
          <div>
            <div className="process-txt">PROCESS</div>
            {processCards}
          </div>
        )
      }
    }

    useEffect(() => {
      const userRef = ref(db, `users/` + currentPost.uid);

      const offFunction = onValue(userRef, (snapshot) => {
        const currentUser = snapshot.val();
        setUser(currentUser);
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
            <div className="post-title">{currentPost.title}</div>
            <div className="creator">{user.name}</div>
            <img className="key-img" src={currentPost["key-img-src"]} />
            <div className="desc">{currentPost.desc}</div>
            {/* <span className="medium">{currentPost.medium}</span> */}
        </div>
        {renderProcesses()}
        <div className="about-artist-header">ABOUT THE ARTIST</div>
        <AboutUser user={user} />
      </div>
    </div>
  )
}

export default ArtView;