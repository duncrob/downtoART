import "./Home.css";
import NavBar from "../components/NavBar";
import CategoryCard from "../components/CategoryCard";

function Home() {
  return (
    <div className='home-container'>
      <NavBar />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </div>
  )
}

export default Home;