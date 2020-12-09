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
      {/* <ul class="main-nav">
          <li><a href="#" class="fa fa-github-square"></a></li>
          <li><a href="#" class="fa fa-linkedin-square"></a></li>
          <li><a href="#" class="fa fa-file-text"></a></li>
          <li><a href="#" class="fa fa-envelope-square"></a></li>
      </ul> */}
      <div className = "socialMedia">
        <a href="#" class="fa fa-github-square"></a>
        <a href="#" class="fa fa-linkedin-square"></a>
        <a href="#" class="fa fa-file-text"></a>
        <a href="#" class="fa fa-envelope-square"></a>
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
            Welcome to my portfolio page! I am a junior at Claremont McKenna College, majoring in Data Science with a sequence in Computer Science. In addition to pursuing Data Science and Computer Science at CMC, I am currently in the final month of a 6 month software engineering immersive program at General Assembly. Through this cohort, I have gained experience with full-stack development, utilizing tools such as HTML, CSS, JavaScript, jQuery, Express, MongoDB, Mongoose, React.js, Node.js, Ruby, and Ruby on Rails. I have hosted a few of my full-stack web applications, as well as one video game project, in the project section below. I am looking to expand on my experience as a full-stack developer through an internship in summer 2021.
          </p>
        </div>
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
