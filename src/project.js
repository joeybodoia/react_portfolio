import React from "react";


const Project = (props) => {
    const backend = props.gitBack
    const frontend = props.gitFront
    const git = props.git

    // const onClick = () => {

    // }

  return (
    <div className="projectDiv">
    <h1>{props.name}</h1>
      <img className = "img shrink" src={props.img} alt={props.alt} onClick={props.open}/>
      <div className='Container '>
        {frontend ? <a href={props.gitFront} target="_blank" className="shrink">Github Frontend</a>: (git ? <a href={props.git} target="_blank" className="shrink">Github</a>: null) }
        {backend ? <a href={props.gitBack} target="_blank" className="shrink">Github Backend</a>: null }
        <a href={props.live} target="_blank" className="shrink">App</a>
      </div>
      
    </div>
  );
};

export default Project;