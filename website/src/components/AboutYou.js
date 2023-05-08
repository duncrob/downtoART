import "./AboutYou.css";

function AboutYou() {
    return (
        <div className='about-you'>
            <div className='edit-button'>
                Edit Profile
            </div>
            <div className='profile'>
                <img className="process-img" src="../img/BestPFP.JPG" alt="profile photo" />
                <div className='text'>
                    <div className='name'>
                        Best Watanapalin
                    </div>
                    <div className='bio'>
                        UW'23 here to leave my mark in the art community at UW! enjoy the show
                    </div> 
                </div>
            </div>       
        </div>
    );
}

export default AboutYou;
