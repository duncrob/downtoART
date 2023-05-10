import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate();

    return (
        <div className='navbar-container'>
            <div className="title-text">
                <img className="logo" src="../img/HEART.png" alt="Heart Logo with box" onClick={() => navigate("/home")}/>
            </div>
            {/* <div className='nav-buttons'>
                <div className='search-btn'>
                    <FontAwesomeIcon icon={faSearch} size='xl' />
                    <input type="text" placeholder="" className="search-bar"/>
                </div>
            </div> */}
        </div>
    );
}


export default NavBar;