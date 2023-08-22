import "./Education.css";

function Education() {
    return (
        <div className="education">
            <div className="education-title">
                <h1>Education</h1>
                <h4>👉The way to get started is to quit talking and begin doing 👈</h4>
            </div>
            <div className="cards-of-education">
                <div className="first common-cards">
                    <img src={"./images/btech.jpg"} alt="Btech" />
                
                    <h3>B.Tech in CSE</h3>
                    <h4>B.P. Poddar Institute of Management & Technology | MAKAUT</h4>
                    <h5>2021-2025 | Pursuing....</h5>
                </div>
                <div className="second common-cards">
                     <img src={"./images/dav.jpg"} alt="" />
                    <h3>AISSCE Science</h3>
                    <h4>RLJDMC Dav Public School | CBSE</h4>
                    <h5>2019-2021 | Completed</h5>
                
                </div>
                <div className="third common-cards">
                     <img src={"./images/jawaharlal.jpg"} alt="" />
                    <h3>AISSE</h3>
                    <h4>Jawaharlal Nehru Memorial Senior Secondary High School | CBSE</h4>
                    <h5>2021-2025 | Completed</h5>
                
                </div>
            </div>
        </div>
    );
}

export default Education;