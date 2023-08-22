import "./About2.css";

function About2() {
    return (
        <>
            <div className="about-container">

                <div className="about-heading">
                    <h2>About Me</h2>
                    <h5>I am Dynamic Creative Designer <span>Programmer and Developer</span></h5>
                </div>

                <div className="about-content">

                    <div className="about-img1">
                        <img src={"./images/profile.png"} alt="Bishal" />
                    </div>
                    <div className="about-para">
                        <p>
                            I am a student of Computer Science and Engineering at B.P. Poddar Institute of Management & Technology. I am a passionate programmer, an App developer & web developer. I am also interested in AI. I am a quick learner and I am always ready to learn new things. I am a team player and I can also work individually. I am a hardworking person and I am always ready to work hard to achieve my goals.
                        </p>
                        <a href={"./resume/Bishal_Prasad_resume-1.pdf"} download="Bishal Prasad's Resume"> <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download CV</button></a>
                    </div>
                
                </div>

            </div>
        </>
    )
}


export default About2;