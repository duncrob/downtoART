import "./CategoryCard.css";

function CategoryCard({ title, numPieces, imgSrc}) {
    return (
        <div className='card-container'>
            <img className="category-img" src={imgSrc} />
            <div className="category-text">
                <div className="category-name">{title}</div>
                <div className="upload-number">{numPieces} Pieces</div>
            </div>
        </div>
    );
}

export default CategoryCard;