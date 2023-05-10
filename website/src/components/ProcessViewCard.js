import "./ProcessViewCard.css"

function ProcessViewCard({ imgSrc, title, desc, index }) {
    return (
        <div className="process-view-card-container">
            <img className="process-img" src={imgSrc} />
            <div className="title-txt">{index+1 + ". " + title}</div>
            <div className="view-card-desc-txt">{desc}</div>
        </div>
    );
}

export default ProcessViewCard;