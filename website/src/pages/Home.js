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
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
      <TabBar />
    </div>
  )
}

export default Home;