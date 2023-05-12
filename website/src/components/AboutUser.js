import "./AboutUser.css";

function AboutUser({ user }) {
    return (
        <div>
            <div className="about-content-container">
                <div className="about-pic-container">
                    <img className="about-profile-pic" src="https://firebasestorage.googleapis.com/v0/b/capstone-cb532.appspot.com/o/images%2Fgeneric-user.jpg?alt=media&token=d8c55b8e-4cc3-41cb-aa25-a32f645a0f67" />
                </div>
                <div className="name-desc-container">
                    <div className="about-name">{user.name}</div>
                    <div className="about-desc">UW’23 Here to leave my mark in the art community at UW :) enjoy!</div>
                </div>
            </div>
        </div>
    )
}

export default AboutUser;