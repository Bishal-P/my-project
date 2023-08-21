import "./Home.css"

// import Typical from "react-typical";
import Typewriter from 'typewriter-effect';
function Home() {
  return (
      <div className="profile-home-container">
          <div className="profile">
              <div className="home_img mx-auto"></div>
            
              <p className="text-7xl text-center name">I'm
                  <span> Bishal</span></p>
         <p className="text-2xl text-center typing">   <Typewriter
  options={{
    strings: ["I'm a Programmer", "I'm Into Web Development", "I'm Into App Development"],
    autoStart: true,
    loop: true,
                  }}
                  
/>
      </p>         
        
              <div className="links text-center">
                  <i className="fa-brands fa-linkedin"></i>
                  <i className="fa-brands fa-github"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-solid fa-envelope"></i>
                  <i className="fa-brands fa-hackerrank"></i>
              </div>
            
          </div>
   </div>
  );
}

export default Home;