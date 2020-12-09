import React from "react"
import logo from './logo.svg';
import './App.css';
import Project from "./project"
import Navbar from "./navbar"
import SSModal from "./SuperheroModal"
import SuperheroModal from './SuperheroModal';
import AnimeModal from './AnimeModal'
import CodexModal from './CodexModal'
import Connect4Modal from './Connect4Modal'

function App() {

  const modalRef = React.useRef()

  const modalARef = React.useRef()

  const modalCRef = React.useRef()

  const modalC4Ref = React.useRef()

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
  
  return (
    <div className="App">
      <header class="header">
      <ul class="main-nav">
          <li><a href="#">Github</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Resumé</a></li>
          <li><a href="#">Email</a></li>
      </ul>
       
      </header>
      <div className="aboutMe">
       <h1 className="portfolio"> My Portfolio </h1>
       <h3>About me:</h3>
       <p>
         I am a junior at Claremont McKenna College, majoring in Data Science with a sequence in Computer Science. As a freshman, I played on the CMS basketball team. In addition to pursuing Data Science and Computer Science at CMC, I am currently in the final month of a 6 month software engineering immersive program at General Assembly. Through this cohort, I have gained experience with full-stack development, utilizing tolls such as HTML, CSS, JavaScript, jQuery, Express, MongoDB, Mongoose, React.js, and Node.js.
       </p>
      </div>
      <SuperheroModal ref={modalRef} />
      <AnimeModal ref={modalARef}/>
      <CodexModal ref={modalCRef}/>
      <Connect4Modal ref={modalC4Ref}/>
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
            open={openModal}
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
