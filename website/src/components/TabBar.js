import "./TabBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function TabBar() {
    return (
        <div className='tab-bar'>

                <div className='home-button'>
                     <FontAwesomeIcon icon={faHouse} size='xl' />
                </div>
                <div className='post-button'>
                    <FontAwesomeIcon icon={faPlusCircle} size='xl' />
                </div>
                <div className='profile-button'>
                    <FontAwesomeIcon icon={faUser} size='xl' />
                </div>
            </div>
    );
}

export default TabBar;