import "./CategoryCard.css";

function CategoryCard() {
    return (
        <div className='card-container'>
            <img className="category-img" src="../img/category.png"/>
            <div className="category-text">
                <div className="category-name">Following</div>
                <div className="red-dot"></div>
                <div className="upload-number">1 New Update</div>
            </div>
        </div>
    );
}

export default CategoryCard;