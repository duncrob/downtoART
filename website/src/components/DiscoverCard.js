import "./DiscoverCard.css";
import { Link } from 'react-router-dom';

function DiscoverCard({ title, imgSrc}) {
    // let linkPath = "/gallery/" + title;
    // return (
    //     <Link to={linkPath}>
    //         <div className='card-container'>
    //             <img className="category-img" src={imgSrc} />
    //             <div className="category-text">
    //                 <div className="category-name">{title}</div>
    //             </div>
    //         </div>
    //     </Link>
    // );
    return (    
        <div className="discover-content">
            {/* <div className="discover-img" imgSrc="../img/image-2.jpg"> </div> */}
            <div className="discover-art-title">The Droplets of Color</div>
            <div className="discover-creator">Vivian Hung</div>
            <div className="discover-desc"> </div>
        </div>
    );
}

export default DiscoverCard;