import React from "react";


const Skills = (props) => {

  return (
    <div className="skillsDiv" style={{display:"flex", "flex-wrap":"wrap", "justifyContent":"space-around"}}>
      <div className="skill">
        <i class="fab fa-js-square"></i>
        <h1 className="skillsText">JavaScript</h1>
      </div>
      <div className="skill" >
         <i class="fab fa-html5"></i>
        <h1 className="skillsText">HTML5</h1>
      </div>
      <div className="skill" >
        <i class="fab fa-css3-alt"></i>
        <h1 className="skillsText">CSS3</h1>
      </div>
      <div className="skill">
        <img style={{height:"6.7vw"}} src="https://img.icons8.com/ios-filled/50/000000/jquery.png"/>
        <h1 className="skillsText">jQuery</h1>
      </div>
      <div className="skill">
        <i class="fab fa-react"></i>
        <h1 className="skillsText">React.js</h1>
      </div>
      <div className="skill">
        <i class="fab fa-node-js"></i>
        <h1 className="skillsText">Node.js</h1>
      </div>
      <div className="skill">
        <img style={{height:"5vw"}} src="https://i.imgur.com/ALDUaJS.png"/>
        <h1 className="skillsText">Express.js</h1>
      </div>
      <div className="skill">
        <img style={{height:"7vw"}} src="https://img.icons8.com/color/48/000000/mongodb.png"/>
        <h1 className="skillsText">MongoDB</h1>
      </div>
      <div className="skill">
        <img style={{height:"7vw"}} src="https://img.icons8.com/color/48/000000/ruby-programming-language.png"/>
        <h1 className="skillsText">Ruby</h1>
      </div>
      <div className="skill" >
        <img style={{height:"7vw", width:"8vw"}} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F256x256%2F2015%2F08%2F30%2F93005_on_395x512.png&f=1&nofb=1"/>
        <h1 className="skillsText">Ruby on Rails</h1>
      </div>
      <div className="skill">
        <img style={{height:"7vw"}} src="https://img.icons8.com/ios-filled/50/000000/postgreesql.png"/>
        <h1 className="skillsText">PostgreSQL</h1>
      </div>
      <div className="skill">
       <i class="fas fa-database"></i>
        <h1 className="skillsText">SQL</h1>
      </div>
      <div className="skill">
      <i class="fab fa-python"></i>
        <h1 className="skillsText">Python</h1>
      </div>
      <div className="skill" >
      <img style={{height:"7vw"}} src="https://i.imgur.com/QDXRb8k.png"/>
        <h1 className="skillsText">R</h1>
      </div>
      
     

    </div>
  );
};

export default Skills;