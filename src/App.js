import React from "react"
import logo from './logo.svg';
import './App.css';
import Project from "./project"
import Navbar from "./navbar"
import SSModal from "./SuperheroModal"
import SuperheroModal from './SuperheroModal';

function App() {

  const modalRef = React.useRef()

  const openModal = () => {
    modalRef.current.openModal()
  }
  
  return (
    <div className="App">
      <header>
       <Navbar/>
      </header>
      <div className="aboutMe">
       <h1 className="portfolio"> My Portfolio </h1>
      </div>
      <button onClick={openModal}>Open Modal</button>
      <SuperheroModal ref={modalRef}>
        <button onClick={()=>modalRef.current.close()}>Close</button>
      </SuperheroModal>
      <div className="projectTitle">
       <h2>Projects:</h2>
      </div>
      <div className="container">
        <div className="project">
          <Project
            name={"Superhero Showdown"}
            git={"https://github.com/joeybodoia/generalAssemblyProjects"}
            live={"https://ga-project1.vercel.app/"}
            img={"https://i.imgur.com/Or6MzZK.png"}
          />
        </div>
        <div className="project">
          <Project
            name={"AnimeRex"}
            git={"https://github.com/joeybodoia/testProject"}
            live={"https://jbproject2.herokuapp.com/animeRec"}
            img={"https://i.imgur.com/1wY7gZ9.png"}
          />
        </div>
        <div className="project">
          <Project
            name={"Codex"}
            gitFront={"https://github.com/joeybodoia/project3Frontend"}
            gitBack={"https://github.com/joeybodoia/project3Backend"}
            live={"https://reverent-kalam-023988.netlify.app/"}
            img={"https://i.imgur.com/EcRSwWm.png"}
          />
        </div>
        <div className="project">
          <Project
            name={"Connect4AI"}
            live={"https://www.glowscript.org/#/user/jbodoia21/folder/MyPrograms/program/Connect4Project"}
            img={"https://i.imgur.com/1020U8p.png"}
          />
        </div>
    </div>
    </div>
  );
}

export default App;
