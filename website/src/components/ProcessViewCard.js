import "./ProcessViewCard.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faX } from '@fortawesome/free-solid-svg-icons'

function ProcessViewCard({ imgSrc, title, desc }) {
    return (
        <div className="process-view-card-container">
            <img className="process-img" src={imgSrc} />
            <div className="process-metadata">
                <div className="title-txt">{title}</div>
                <div>{desc}</div>
            </div>
        </div>
    );
}

export default ProcessViewCard;