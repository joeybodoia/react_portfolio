import React from "react"
import { Route, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Project from "./project"
import Skills from "./Skills"
import Navbar from "./navbar"
import SSModal from "./SuperheroModal"
import SuperheroModal from './SuperheroModal';
import AnimeModal from './AnimeModal'
import CodexModal from './CodexModal'
import Connect4Modal from './Connect4Modal'
import ResumeModal from './resume'
import SnakeModal from "./SnakeModal";

function App() {

  const modalRef = React.useRef()

  const modalARef = React.useRef()

  const modalCRef = React.useRef()

  const modalC4Ref = React.useRef()

  const modalRRef = React.useRef()

  const modalSRef = React.useRef()

  const openModal = () => {
    modalRef.current.openModal()
  }

  const openModalA = () => {
    modalARef.current.openModalA()
  }

  const openModalC = () => {
    modalCRef.current.openModalC()
  }

  const openModalC4 = () => {
    modalC4Ref.current.openModalC4()
  }

  const openModalR = () => {
    modalRRef.current.openModalR()
  }
  
  const openModalS = () => {
    modalSRef.current.openModalS()
  }


  return (
    <div className="App">
      <header class="header">
        <div className = "socialMedia">
          <a href="https://github.com/joeybodoia" target="_blank" class="fab fa-github-square"></a>
          <a href="https://www.linkedin.com/in/joseph-bodoia/" target="_blank" class="fab fa-linkedin-square"></a>
          {/* <a href="#" class="fa fa-file-text" onClick={openModalR}></a> */}
          
          <a href="https://docs.google.com/document/d/e/2PACX-1vQOgBR3-ZnM9AWNY5Lq0XVWedr_6CVaRmZSVHiN1730gizFXrWV0N7pqVsNR22GiQ/pub" target="_blank" class="fa fa-file-text"></a>
          <a href="mailto:jbodoia21@cmc.edu?Subject=Hello%20There!" target="_blank" class="fa fa-envelope-square"></a>
        </div>
      </header>
      <div className="aboutMe">
        <div className="picture">
          <img src="https://i.imgur.com/R76JzbG.jpg?1" className="profilePic"></img>
        </div>
        <div className="Name">
          <h1>Joey Bodoia</h1>
        </div>
        <div className = "description">
          <p>
            Welcome to my portfolio page! I am currently a senior at Claremont McKenna College majoring in Data Science. In addition to studying at Claremont McKenna College, I completed a 6 month Software Engineering Immersive Bootcamp with General Assembly, as well as a software engineering internship with Redko, an app-development startup in California.
          </p>
        </div>
        <div className="Skills">
          <h1>Skills</h1>
          <Skills/>
        </div>
      </div>
      <SuperheroModal ref={modalRef} />
      <AnimeModal ref={modalARef}/>
      <CodexModal ref={modalCRef}/>
      <Connect4Modal ref={modalC4Ref}/>
      <ResumeModal ref={modalRRef}/>
      <SnakeModal ref={modalSRef}/>
      <div className="projectTitle">
       <h2>Projects</h2>
      </div>
      <div className="container">
        <div className="project">
          <Project
            name={"Superhero Showdown"}
            git={"https://github.com/joeybodoia/generalAssemblyProjects"}
            live={"https://ga-project1.vercel.app/"}
            img={"https://i.imgur.com/Or6MzZK.png"}
            open={openModal}
          />
        </div>
        <div className="project">
          <Project
            name={"Snake Game Remastered"}
            gitFront={"https://github.com/joeybodoia/game_frontend"}
            gitBack={"https://github.com/joeybodoia/snake_backend"}
            live={"https://gallant-colden-513da5.netlify.app/"}
            img={"https://i.imgur.com/PenpT8R.png"}
            open={openModalS}
          />
        </div>
        <div className="project">
          <Project
            name={"AniméRex"}
            git={"https://github.com/joeybodoia/testProject"}
            live={"https://jbproject2.herokuapp.com/animeRec"}
            img={"https://i.imgur.com/1wY7gZ9.png"}
            open={openModalA}
          />
        </div>
        <div className="project">
          <Project
            name={"Codex"}
            gitFront={"https://github.com/joeybodoia/project3Frontend"}
            gitBack={"https://github.com/joeybodoia/project3Backend"}
            live={"https://reverent-kalam-023988.netlify.app/"}
            img={"https://i.imgur.com/EcRSwWm.png"}
            open={openModalC}
          />
        </div>
        <div className="project">
          <Project
            name={"Connect4AI"}
            live={"https://www.glowscript.org/#/user/jbodoia21/folder/MyPrograms/program/Connect4Project"}
            img={"https://i.imgur.com/1020U8p.png"}
            open={openModalC4}
          />
        </div>
    </div>
    </div>
  );
}

export default App;
