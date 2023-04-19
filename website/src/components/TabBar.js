import "./TabBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

function TabBar() {
    return (
        <div className='tab-bar'>
            <Link to="/">
                <div className='home-button'>
                    <FontAwesomeIcon icon={faHouse} size='xl' />
                </div>
            </Link>
            <Link to="/upload">
            <div className='post-button'>
                <FontAwesomeIcon icon={faPlusCircle} size='xl' />
            </div>
            </Link>
            <Link to="/profile">
            <div className='profile-button'>
                <FontAwesomeIcon icon={faUser} size='xl' />
            </div>
            </Link>
        </div>
    );
}

export default TabBar;