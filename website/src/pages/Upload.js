import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import ProcessEditCard from "../components/ProcessEditCard";
import "./Upload.css";

import Switch from '@mui/material/Switch';

import React, { useState } from 'react';



function Upload() {
  const [previewSrc, setPreviewSrc] = useState("../img/Upload-IMG.png");
  const [browseText, setBrowseText] = useState("Browse Files");
  const [uploadStage, setUploadStage] = useState(1);

  const processCardHardInfo = [
    {
      id: 1,
      title: "",
      desc: "",
      imgSrc: "../img/example-art.jpg"
    },
    {
      id: 2,
      title: "",
      desc: "",
      imgSrc: "../img/example-art.jpg"
    },
  ]

  const [processCardInfo, setProcessCardInfo] = useState(processCardHardInfo)

  function addProcess() {
    processCardInfo.push(
      {
        id: Math.floor(Math.random() * 99999999999),
        title: "",
        desc: "",
        imgSrc: "../img/example-art.jpg"
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
      return <ProcessEditCard key={process.id} id={process.id} title={process.title} desc={process.desc} imgSrc={process.imgSrc} removeProcess={removeProcess} />
    });

    return (renderedCards)
  }

  function showPreview(event) {
    if(event.target.files.length > 0){
      var src = URL.createObjectURL(event.target.files[0]);
      setPreviewSrc(src);
      setBrowseText("Choose New Image");
      var preview = document.querySelector(".preview-img");
      preview.style.display = "block";
    }
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
          <form className="upload-form">
            <label className="post-label">Artwork Name</label><br/>
            <input type="text" className="metadata-input" /><br/>
            <label className="post-label">Medium</label><br/>
            <input type="text" className="metadata-input" /><br/>
            <label className="post-label">Description <span className="optional-txt">(optional)</span></label><br/>
            <input type="text" className="metadata-input" /><br/>
            <label className="post-label">Tags <span className="optional-txt">(optional)</span></label><br/>
            <input type="text" className="metadata-input tags-input" /><br/>
            <p className="desc-txt tags-desc">Adding tags allows your artwork to be categorized in our system and be visible in our highlights.</p>
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
              <div className="back-btn" onClick={() => {setUploadStage(1)}}>Back</div>
              <div className="post-btn">Post</div>
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