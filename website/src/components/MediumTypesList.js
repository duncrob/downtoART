import "./MediumTypesList.css";
import { Context } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const mediumTypes = [
    "Watercolor",
    "Photography",
    "Acrylic",
    "Sketches",
    "Oil Painting",
    "Digital Art",
    "Fabric",
    "Clay",
    "Pottery",
    "Painting",
    "Sculpture"
]

function MediumTypesList() {
    const [posts, setPosts] = useContext(Context);
    const navigate = useNavigate();

    let renderedList = mediumTypes.map((medium, i) => {
        let buttonClasses = "medium-btn";

        if (i !== mediumTypes.length - 1) {
            buttonClasses = buttonClasses.concat(" bottom-gray-border");
        }

        let count = 0;
        posts.forEach(post => {
            if (post.medium === medium) {
                count++;
            }            
        });

        return (
            <div className={buttonClasses} onClick={() => navigate("/gallery/" + medium)}>
                <div className="medium-btn-txt">{medium}</div>
                <div className="medium-btn-count">{count + " >"}</div>
            </div>
        )
    })
    return (
        <div className="mediums-container">
            {renderedList}
        </div>
    );
}

export default MediumTypesList;