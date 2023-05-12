import "./AboutUser.css";

function AboutUser({ currentUser }) {
    return (
        <div>
            <div className="about-content-container">
                <div className="about-pic-container">
                    <img className="about-profile-pic" src="/img/julien1.jpg" />
                </div>
                <div className="name-desc-container">
                    <div className="about-name">{currentUser.displayName}</div>
                    <div className="about-desc">UW’23 Here to leave my mark in the art community at UW :) enjoy!</div>
                </div>
            </div>
        </div>
    )
}

export default AboutUser;