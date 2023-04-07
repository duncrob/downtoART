import "./Home.css";
import NavBar from "../components/NavBar";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div className='home-container'>
      <NavBar />
      <div className="home-content">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

    </div>
  )
}

export default Home;