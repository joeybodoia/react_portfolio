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
        {frontend ? <h3><a href={props.gitFront} target="_blank" className="shrink">github frontend</a></h3>: (git ? <h3><a href={props.git} target="_blank" className="shrink">github</a></h3>: null) }
        {backend ? <h3><a href={props.gitBack} target="_blank" className="shrink">github backend</a></h3>: null }
        <div>
            <h3><a href={props.live} target="_blank" className="shrink">App</a></h3>
        </div>
      </div>
      
    </div>
  );
};

export default Project;