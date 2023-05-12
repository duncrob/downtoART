import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

function NavBar({ currentPage }) {
    const navigate = useNavigate();

    let homeClasses = "home-btn";
    let galleryClasses = "my-gallery-btn";
    if (currentPage === "home") {
        homeClasses = homeClasses.concat(" nav-btn-orange");
    } else if (currentPage === "profile") {
        galleryClasses = galleryClasses.concat(" nav-btn-orange");
    }

    return (
        <div className='navbar-container'>
            <div className="title-text">
                <img className="logo" src="../img/HEART.png" alt="Heart Logo with box" onClick={() => navigate("/home")}/>
            </div>
            <div className="navbar-btn">
                <div className={homeClasses} onClick={() => navigate("/home")}>HOME</div>
                <div className={galleryClasses} onClick={() => navigate("/profile")}>MY GALLERY</div>
            </div>
        </div>
    );
}


export default NavBar;