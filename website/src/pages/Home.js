import "./Home.css";
import NavBar from "../components/NavBar";
import CategoryCard from "../components/CategoryCard";
import TabBar from "../components/TabBar";
import { ref, onValue} from "firebase/database";
import { db } from "../firebase";
import { useState, useEffect, useContext } from "react";
import { Context } from "../App";

function Home() {
  const [tags, setTags] = useState([]);
  const [posts, setPosts] = useContext(Context);

  console.log("THESE ARE THE POSTS", posts)

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

      let currentTags = [];

      currentPosts.forEach(post => {
        post.tags.forEach(tag => {
          if (!currentTags.includes(tag)) {
            currentTags.push(tag);
          }
        });
      });

      setTags(currentTags);
    })

    function cleanup() {
      //tagsOffFunction();
      postsOffFunction();
    }
    return cleanup;
  }, [])
  
  function renderCards() {
    let renderedCatCards = tags.map((tag, i) => {
      let filteredPosts = posts.filter((post) => {
        return post.tags.includes(tag);
      });

      let currentCardSrc;
      if (filteredPosts.length) {
        currentCardSrc = filteredPosts[filteredPosts.length - 1]["key-img-src"];
      } else {
        currentCardSrc = "../img/example-art.jpg"
      }     
      return <CategoryCard key={i} imgSrc={currentCardSrc} title={tag} numPieces={filteredPosts.length} />
    })

    return (renderedCatCards)
  }

  return (
    <div className='home-container'>
      <NavBar />
      <div className="home-content">
        <div className="home-header">Your Collection</div>
        <CategoryCard imgSrc="../img/following.png" title="Following" numPieces={2} />
        {renderCards()}
      </div>
      <TabBar />
    </div>
  )
}

export default Home;