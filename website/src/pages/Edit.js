import NavBar from "../components/NavBar";
import TabBar from "../components/TabBar";
import ProcessEditCard from "../components/ProcessEditCard";
import "./Upload.css";
import "./Edit.css";

import Switch from '@mui/material/Switch';

import React, { useState } from 'react';
import { Link } from "react-router-dom";



function Edit() {
  const processCardHardInfo = [
    {
      id: 1,
      title: "Original Image",
      desc: "This is my original image.",
      imgSrc: "../img/og-image.png"
    },
    {
      id: 2,
      title: "Color Adjustment",
      desc: "This is the photo after I adjusted the colors.",
      imgSrc: "../img/color-adjustment.png"
    },
    {
        id: 3,
        title: "Exposure Adjustment",
        desc: "This is my photo after I adjusted the exposure.",
        imgSrc: "../img/exposure-adjustment.png"
    }
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

//   function showPreview(event) {
//     if(event.target.files.length > 0){
//       var src = URL.createObjectURL(event.target.files[0]);
//       setPreviewSrc(src);
//       setBrowseText("Choose New Image");
//       var preview = document.querySelector(".preview-img");
//       preview.style.display = "block";
//     }

  return (
    <div>
        <NavBar />
        <div className="upload-container">
          <img className="preview-img" src="../img/main-post-tree.png" />
          <form className="upload-form">
            <label className="post-label">Artwork Name</label><br/>
            <input type="text" className="metadata-input" defaultValue="Sunset Tree" /><br/>
            <label className="post-label">Medium</label><br/>
            <input type="text" className="metadata-input" defaultValue="Photograph" /><br/>
            <label className="post-label">Description <span className="optional-txt">(optional)</span></label><br/>
            <textarea type="text" className="metadata-input" defaultValue="The sun shines directly through the tree during our roadtrip down to California creating a rather aesthetic sunset scene." /><br/>
            <label className="post-label">Tags <span className="optional-txt">(optional)</span></label><br/>
            <input type="text" className="metadata-input tags-input" /><br/>
            <p className="desc-txt tags-desc">Adding tags allows your artwork to be categorized in our system and be visible in our highlights.</p>
            <div className="title-and-switch">
                <p className="post-label">Show Process</p>
                <Switch defaultChecked onChange={() => {
                  document.querySelector(".process-container").classList.toggle("hidden");
                }} />
            </div>
            <div className="process-container">
              <p className="desc-txt-p1">Showing your work process can greatly help other artists understand how your artwork is created and refined.</p>
              <p className="desc-txt">You can post a work-in-progress and update your artwork as you continue your progress. The cover photo will automatically update to your latest upload for this post.</p>
              {renderProcessCards()}
              <div className="add-process-btn" onClick={addProcess}>Add Process</div>
            </div>
            <div className="control-btns">
                <Link to="/profile" className="cancel-btn">Cancel</Link>
                <Link to="/profile" className="update-btn">Update</Link>
            </div>
          </form>
        </div>
        <TabBar />
      </div>
  )
}

export default Edit;