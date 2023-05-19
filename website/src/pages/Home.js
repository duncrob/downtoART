import "./Home.css";
import NavBar from "../components/NavBar";
import DiscoverCard from "../components/DiscoverCard";
import TabBar from "../components/TabBar";
import { ref, onValue} from "firebase/database";
import { db, auth } from "../firebase";
import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import { Link, useNavigate } from "react-router-dom";
import MediumTypesList from "../components/MediumTypesList";

function Home() {
  const [posts, setPosts] = useContext(Context);
  const [users, setUsers] = useState([]);

  console.log("THESE ARE THE POSTS", posts)

  const navigate = useNavigate();

  useEffect(() => {
    const postsRef = ref(db, `posts/`);

    const postsOffFunction = onValue(postsRef, (snapshot) => {
      let currentPosts = snapshot.val();
      currentPosts = Object.values(currentPosts);
      setPosts(currentPosts);
    })

    function cleanup() {
      postsOffFunction();
    }
    return cleanup;
  }, [])
  
  function renderDiscoverCards() {
    let postsCopy = [...posts];
    let newestFirst = postsCopy.reverse();

    if (newestFirst.length > 3) {
      newestFirst = newestFirst.slice(0, 3);
    }

    return newestFirst.map((post) => {
      return <DiscoverCard post={post} />
    })
  }

  function renderMyGallery() {
    let postsCopy = [...posts];
    let myPosts = postsCopy.filter((post) => {
      return post.uid === auth.currentUser.uid;
    });

    let newestFirst = [...myPosts].reverse();

    if (newestFirst.length > 4) {
      newestFirst = newestFirst.slice(0, 4);
    }

    return newestFirst.map((post) => {
      return (
        <Link to={"/artview/" + post.id} className="my-art-link">
          <img className="art-link-inner-img" src={post["key-img-src"]} />
        </Link>
      )
    })
  }

  return (
    <div className='home-container'>
      <NavBar currentPage={"home"} />
      <div className="home-content">
        <div className="home-header">HOME</div>
        <div className="my-gallery-header">My Gallery</div>
        <div className="my-gallery-home-container">
          {renderMyGallery()}
        </div>
        <div className="home-gallery-nav">
          <div className="home-upload-btn" onClick={() => navigate("/upload")}>Upload Art</div>
          <div className="home-to-gallery-btn" onClick={() => navigate("/profile")}>View your entire gallery</div>
        </div>
        <div className="discover-header">Inspiration</div>
        {renderDiscoverCards()}
        <div className="home-mediums-header">All Medium Types</div>
        <MediumTypesList />
      </div>
    </div>
  )
}

export default Home;