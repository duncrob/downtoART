import "./ProcessEditCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

function ProcessEditCard({ id, title, desc, imgSrc, removeProcess }) {
    return (
        <div className="process-card-container">
            <div className="line-and-inputs">
                <div className="line"></div>
                <div className="process-txt-inputs">
                    <input className="title-input" type="text" placeholder="Add Title" defaultValue={title}></input>
                    <textarea className="description-input" placeholder="Add Description" defaultValue={desc}></textarea>
                </div>
            </div>
            <img className="disp-img" src={imgSrc} />
            <FontAwesomeIcon icon={faX} size='xl' onClick={() => {removeProcess(id)}} />
        </div>
    );
}

export default ProcessEditCard;