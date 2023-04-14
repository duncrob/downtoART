import "./CategoryCard.css";

function CategoryCard() {
    return (
        <div className='card-container'>
            <img className="category-img" src="../img/category.png"/>
            <div className="category-text">
                <div className="category-name">Following</div>
                <div className="upload-number">2 Pieces</div>
            </div>
        </div>
    );
}

export default CategoryCard;