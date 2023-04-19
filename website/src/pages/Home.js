import "./Home.css";
import NavBar from "../components/NavBar";
import CategoryCard from "../components/CategoryCard";
import TabBar from "../components/TabBar";

function Home() {
  return (
    <div className='home-container'>
      <NavBar />
      <div className="home-content">
        <div className="home-header">Your Collection</div>
        <CategoryCard imgSrc="../img/following.png" title="Following" numPieces={2} />
        <CategoryCard imgSrc="../img/categorySunset.png" title="#Sunset" numPieces={12} />
        <CategoryCard imgSrc="../img/categoryAbstract.png" title="#Abstract" numPieces={4} />
      </div>
      <TabBar />
    </div>
  )
}

export default Home;