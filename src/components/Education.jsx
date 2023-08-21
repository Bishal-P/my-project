import "./Education.css";

function Education() {
    return (
        <div className="education">
            <div className="education-title">
                <h1>Education</h1>
                <h4>The best way to be success is to start early</h4>
            </div>
            <div className="cards">
                <div className="first common-cards">
                    <img src={"./images/btech.jpg"} alt="Btech" />
                    <h3>2018 - 2021</h3>
                    <h4>High School</h4>
                    <h5>SMAN 1 Cikarang Utara</h5>
                    <p>Science</p>
                </div>
                <div className="second common-cards">
                     <img src={"./images/dav.jpg"} alt="" />
                    <h3>2018 - 2021</h3>
                    <h4>High School</h4>
                    <h5>SMAN 1 Cikarang Utara</h5>
                    <p>Science</p>
                </div>
                <div className="third common-cards">
                     <img src={"./images/jawaharlal.jpg"} alt="" />
                    <h3>2018 - 2021</h3>
                    <h4>High School</h4>
                    <h5>SMAN 1 Cikarang Utara</h5>
                    <p>Science</p>
                </div>
            </div>
        </div>
    );
}

export default Education;