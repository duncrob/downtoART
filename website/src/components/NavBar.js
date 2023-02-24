import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <div className='navbar-container'>
            <div className="title-text">
                DOWN TO <span className='art-text'>ART</span>
            </div>
            <div className='nav-buttons'>
                <div className='home-btn'>
                    <FontAwesomeIcon icon={faHouse} size='xl' />
                </div>
                <div className='post-btn'>
                    <FontAwesomeIcon icon={faPlusCircle} size='xl' />
                </div>
                <div className='profile-btn'>
                    <FontAwesomeIcon icon={faUser} size='xl' />
                </div>
            </div>
        </div>
    );
}

export default NavBar;