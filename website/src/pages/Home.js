import "./Home.css";
import NavBar from "../components/NavBar";
import CategoryCard from "../components/CategoryCard";
import TabBar from "../components/TabBar";
import { ref, onValue} from "firebase/database";
import { db, auth } from "../firebase";
import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import { Link, useNavigate } from "react-router-dom";
import MediumTypesList from "../components/MediumTypesList";

function Home() {
  const [posts, setPosts] = useContext(Context);

  console.log("THESE ARE THE POSTS", posts)

  const navigate = useNavigate();

  useEffect(() => {
    //const tagsRef = ref(db, `tags/`);
    const postsRef = ref(db, `posts/`);

    // const tagsOffFunction = onValue(tagsRef, (snapshot) => {
    //   const currentTags = snapshot.val();
    //   setTags(currentTags);
    // })

    const postsOffFunction = onValue(postsRef, (snapshot) => {
      let currentPosts = snapshot.val();
      currentPosts = Object.values(currentPosts);
      setPosts(currentPosts);
    })

    function cleanup() {
      //tagsOffFunction();
      postsOffFunction();
    }
    return cleanup;
  }, [])
  
  // function renderCards() {
  //   let renderedCatCards = tags.map((tag, i) => {
  //     let filteredPosts = posts.filter((post) => {
  //       return post.tags.includes(tag);
  //     });

  //     let currentCardSrc;
  //     if (filteredPosts.length) {
  //       currentCardSrc = filteredPosts[filteredPosts.length - 1]["key-img-src"];
  //     } else {
  //       currentCardSrc = "../img/example-art.jpg"
  //     }     
  //     return <CategoryCard key={i} imgSrc={currentCardSrc} title={tag} numPieces={filteredPosts.length} />
  //   })

  //   return (renderedCatCards)
  // }

  function renderMyGallery() {
    let myPosts = posts.filter((post) => {
      return post.uid === auth.currentUser.uid;
    });

    let newestFirst = myPosts.reverse();

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
      <NavBar />
      <div className="home-content">
        <div className="my-gallery-header">MY GALLERY</div>
        <div className="my-gallery-home-container">
        {renderMyGallery()}
        </div>
        <div className="home-gallery-nav">
          <div className="home-upload-btn" onClick={() => navigate("/upload")}>Upload Art</div>
          <div className="home-to-gallery-btn" onClick={() => navigate("/profile")}>View your entire gallery</div>
        </div>
        <div className="discover-header">DISCOVER</div>
        {/* <CategoryCard imgSrc="../img/following.png" title="Following" numPieces={2} />
        {renderCards()} */}
        <div className="home-mediums-header">ALL MEDIUM TYPES</div>
        <MediumTypesList />
      </div>
      <TabBar />
    </div>
  )
}

export default Home;