import "./Home.css"

// import Typical from "react-typical";
import Typewriter from 'typewriter-effect';
function Home() {
  return (
      <div className="profile-home-container">
          <div className="profile">
              <div className="home_img mx-auto"></div>
             
                  {/* <img className="mx-auto rounded-full w-96 h-96 transition-all duration-800 cursor-pointer filter grayscale hover:grayscale-0" src="./images/profile.png" alt="" /> */}
            
              <p className="text-7xl text-center name">I'm Bishal</p>
         <p className="text-3xl">   <Typewriter
  options={{
    strings: ["I'm a Programmer", "I'm Into Web Development", "I'm Into App Development"],
    autoStart: true,
    loop: true,
                  }}
                  
/>
      </p>         
              
            
          </div>
   </div>
  );
}

export default Home;