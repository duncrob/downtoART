import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div className='navbar-container'>
            <div className="title-text">
                <img className="logo" src="../img/HEART.png" alt="Heart Logo with box"/>
            </div>
            <div className='nav-buttons'>
                <div className='search-btn'>
                    <FontAwesomeIcon icon={faSearch} size='xl' />
                    <input type="text" placeholder="" className="search-bar"/>
                </div>
            </div>
        </div>
    );
}


export default NavBar;