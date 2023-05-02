import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import ProcessEditCard from "../components/ProcessEditCard";
import "./Upload.css";

import Switch from '@mui/material/Switch';

import React, { useState } from 'react';

import { db, auth, storage } from "../firebase";
import { push, ref, set } from "firebase/database";
import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage"
import { useNavigate } from "react-router-dom";

function Upload() {
  const [previewSrc, setPreviewSrc] = useState("../img/Upload-IMG.png");
  const [browseText, setBrowseText] = useState("Browse Files");
  const [uploadStage, setUploadStage] = useState(1);
  const [currentFile, setCurrentFile] = useState({});

  const [processCardInfo, setProcessCardInfo] = useState([])

  const [title, setTitle] = useState("");
  const [medium, setMedium] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState("");

  const navigate = useNavigate();

  function addProcess() {
    processCardInfo.push(
      {
        id: Math.floor(Math.random() * 99999999999),
        name: "",
        desc: "",
        "img-src": "../img/Upload-IMG.png"
      }
    );

    setProcessCardInfo([...processCardInfo]);
  }

  function removeProcess(id) {
    setProcessCardInfo(processCardInfo.filter((process) => {
      return process.id !== id;
    }))
  }

  function renderProcessCards() {
    let renderedCards = processCardInfo.map((process) => {
      return <ProcessEditCard process={process} processCardInfo={processCardInfo} setProcessCardInfo={setProcessCardInfo} key={process.id} id={process.id} removeProcess={removeProcess} />
    });

    return (renderedCards)
  }

  function showPreview(event) {
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      setCurrentFile(event.target.files[0]);
      setPreviewSrc(src);
      setBrowseText("Choose New Image");
      var preview = document.querySelector(".preview-img");
      preview.style.display = "block";
    }
  }

  function post(e) {
    e.preventDefault();

    let imageDBName = Date.now() + "-" + currentFile.name;
      
    let currentStorageRef = storageRef(storage, 'images/' + imageDBName);
    uploadBytes(currentStorageRef, currentFile)
    .then((snapshot) => getDownloadURL(snapshot.ref))
    .then((url) => {
      let tagsArray = tags.split(" ");

      const dbRef = ref(db, 'posts/')

      let key = push(dbRef).key

      set(ref(db, 'posts/' + key), {
        id: key,
        desc: desc,
        "key-img-src": url,
        medium: medium,
        process: processCardInfo,
        tags: tagsArray,
        timestamp: Date.now(),
        title: title,
        uid: auth.currentUser.uid
      });
    })
    .then(() => {navigate("/home")})
  }

  function renderPageContent() {
    let pageContent;
    if (uploadStage === 1) {
      pageContent = (
        <div className="upload-container">
          <div className="preview-img-window">
            <img className="preview-img" src={previewSrc} />
          </div>
          <label className="browse-label" htmlFor="file-img">{browseText}</label>
          <input type="file" id="file-img" accept="image/*" onChange={showPreview} />
          <p className="next-btn" onClick={() => {setUploadStage(2)}}>Next</p>
        </div>
      )
    } else {
      pageContent = (
        <div className="upload-container">
          <img className="preview-img" src={previewSrc} />
          <form className="upload-form" onSubmit={(e) => {post(e);}}>
            <label className="post-label">Artwork Name</label><br/>
            <input type="text" className="metadata-input" required value={title} onChange={(event) => {setTitle(event.target.value)}} /><br/>
            <label className="post-label" >Medium</label><br/>
            <input type="text" className="metadata-input" required value={medium} onChange={(event) => {setMedium(event.target.value)}} /><br/>
            <label className="post-label">Description <span className="optional-txt">(optional)</span></label><br/>
            <input type="text" className="metadata-input" value={desc} onChange={(event) => {setDesc(event.target.value)}} /><br/>
            <label className="post-label">Tags <span className="optional-txt">(optional)</span></label><br/>
            <input type="text" className="metadata-input tags-input" value={tags} onChange={(event) => {setTags(event.target.value)}} /><br/>
            <div className="title-and-switch">
                <p className="post-label">Show Process</p>
                <Switch onChange={() => {
                  document.querySelector(".process-container").classList.toggle("hidden");
                }} />
            </div>
            <div className="process-container hidden">
              <p className="desc-txt-p1">Showing your work process can greatly help other artists understand how your artwork is created and refined.</p>
              <p className="desc-txt">You can post a work-in-progress and update your artwork as you continue your progress. The cover photo will automatically update to your latest upload for this post.</p>
              {renderProcessCards()}
              <div className="add-process-btn" onClick={addProcess}>Add Process</div>
            </div>
            <div className="control-btns">
              <div className="upload-back-btn" onClick={() => {setUploadStage(1)}}>Back</div>
              <input className="post-btn" type="submit" value="Post" />
            </div>
          </form>
        </div>
      )
    }

    return (
      <div>
        <NavBar />
        {pageContent}
        <TabBar />
      </div>
    )
  }

  return (renderPageContent())
}

export default Upload;