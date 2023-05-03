import "./ProcessEditCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ProcessEditCard({ id, removeProcess, process, processCardInfo, setProcessCardInfo }) {
    const [title, setTitle] = useState(process.name);
    const [desc, setDesc] = useState(process.desc);
    const [imgSrc, setImgSrc] = useState(process["img-src"]);

    useEffect(() => {
        updateProcess()
    }, [title, desc, imgSrc]);

    function updateProcess() {
        let currentCard = processCardInfo.find((card) => {return card.id === id});
        currentCard.name = title;
        currentCard.desc = desc;
        currentCard["img-src"] = imgSrc;
        setProcessCardInfo([...processCardInfo]);
    }

    function showPreview(event) {
        if(event.target.files.length > 0){
            var src = URL.createObjectURL(event.target.files[0]);
            
            let imageDBName = Date.now() + "-" + event.target.files[0].name;
      
            let currentStorageRef = ref(storage, 'images/' + imageDBName);
            uploadBytes(currentStorageRef, event.target.files[0])
            .then((snapshot) => getDownloadURL(snapshot.ref))
            .then((url) => {
                setImgSrc(url);
            });
        }
    }

    return (
        <div className="process-card-container">
            <div className="line-and-inputs">
                <div className="line"></div>
                <div className="process-txt-inputs">
                    <input className="title-input" type="text" value={title} placeholder="Add Title" onChange={(event) => {setTitle(event.target.value)}}></input>
                    <textarea className="description-input" placeholder="Add Description" value={desc} onChange={(event) => {setDesc(event.target.value)}}></textarea>
                </div>
            </div>
            <div className="process-img-upload-btn" onClick={(event) => {document.getElementById("process-input-" + id).click()}}>
                <input className="process-img-input" id={"process-input-" + id} type="file" accept="image/*" onChange={showPreview} />
                <img src={imgSrc} className="disp-img" />
            </div>
            <FontAwesomeIcon icon={faX} size='xl' onClick={() => {removeProcess(id)}} />
        </div>
    );
}

export default ProcessEditCard;