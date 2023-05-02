import "./CategoryCard.css";
import { Link } from 'react-router-dom';

function CategoryCard({ title, numPieces, imgSrc}) {
    let linkPath = "/gallery/" + title;
    return (
        <Link to={linkPath}>
            <div className='card-container'>
                <img className="category-img" src={imgSrc} />
                <div className="category-text">
                    <div className="category-name">{title}</div>
                    <div className="upload-number">{numPieces} {numPieces == 1 ? "Piece" : "Pieces"}</div>
                </div>
            </div>
        </Link>
    );
}

export default CategoryCard;