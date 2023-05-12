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
            <img className="discover-img" src="../img/image-2.jpg"/>
            <div className="discover-art-title">The Droplets of Color</div>
            <div className="discover-creator">Vivian Hung</div>
            <div className="discover-desc">Over the course of quarantine, I have been experimenting with many colors and abstract shapes with my new kit. I spent the last 3 days creating this piece.</div>
            <div className="discover-to-artview-btn">View All Watercolor</div>
        </div>
    );
}

export default DiscoverCard;