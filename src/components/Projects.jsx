import "./Projects.css";

function Projects() {
    return (
        <>
            
    <section className="projects common-section" id="projects1">
      <div className="education-heading">
        <p>---- What I made <span>?</span> ---- </p>
      </div>

      <div className="projects-content">
        <div className="melo projects-common">
          <img src="images/skills-images/music.jpeg" alt="" />
          <div className="music-div">
            <h1>Melo (Music-Player)</h1>
            <p>A fully functional music player build in python.</p>
            <button>
              <a
                href="https://github.com/Bishal-prasad05/Melo"
                className="xyz"
                target="_blank" rel="noreferrer"
                >More details </a
              >
            </button>
          </div>
        </div>
        <div className="Todo projects-common">
          <img src="images/skills-images/todo.jpg" alt="" />
          <div className="music-div">
            <h1>To-Do App</h1>
            <p>A todo app using html css and js with history storage.</p>
            <button>
              <a
                href="https://github.com/Bishal-prasad05/Todo-App"
                className="xyz"
                target="_blank" rel="noreferrer"
                >More details</a
              >
            </button>
          </div>
        </div>
        <div className="filefinder projects-common">
          <img src="images/skills-images/file_finder.jpg" alt="" />
          <div className="music-div">
            <h1>File Finder</h1>
            <p>
              A python software used to find any file location in the computer.
            </p>
            <button>
              <a
                href="https://github.com/Bishal-prasad05/File-finder"
                target="_blank"
                className="xyz" rel="noreferrer"
                >More details</a
              >
            </button>
          </div>
        </div>
        <div className="youtubedownloader projects-common">
          <img src="images/skills-images/youtube.jpg" alt="" />
          <div className="music-div">
            <h1>Youtube-downloader</h1>
            <p>
              A python sotware can be used to download youtube videos in
              available resolutions.
            </p>
            <button>
              <a
                href="https://github.com/Bishal-prasad05/Youtube-video-downloader"
                target="_blank"
                className="xyz" rel="noreferrer"
                >More details</a
              >
            </button>
          </div>
        </div>
        <div className="weatherapp projects-common">
          <img src="images/skills-images/weather_app.jpg" alt="" />
          <div className="music-div">
            <h1>Weather App</h1>
            <p>A html css and js based weather forcasting app.</p>
            <button>
              <a
                href="https://github.com/Bishal-prasad05/weather-app"
                target="_blank"
                className="xyz" rel="noreferrer"
                >More details</a
              >
            </button>
          </div>
        </div>
        <div className="url projects-common">
          <img src="images/skills-images/url.jpg" alt="" />
          <div className="music-div">
            <h1>Url Shortner</h1>
            <p>A simple and easy to use url shortner with html,css and js.</p>
            <button>
              <a
                href="https://github.com/Bishal-prasad05/URL-Shortner"
                target="_blank"
                className="xyz" rel="noreferrer"
                >More details</a
              >
            </button>
          </div>
        </div>
      </div>

      <div className="SeeallButton">
        <button>
          <a
            href="https://github.com/Bishal-prasad05?tab=repositories"
            target="_blank" rel="noreferrer"
            >See All </a>
        </button>
      </div>
       </section>
        
        
        </>
    );
}

export default Projects;