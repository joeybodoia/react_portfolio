import React, {forwardRef, useImperativeHandle} from "react"
import ReactDOM from "react-dom"


const CodexModal = forwardRef((props, ref) => {
    const [display,setDisplay] = React.useState(false);

    useImperativeHandle(ref, ()=>{
        return {
            openModalC: ()=> openC(),
            closeC: ()=>closeC()
        }
    })

    const openC = () => {
        setDisplay(true)
    }

    const closeC = () => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
        <div className={'modal-wrapper'}>
            <div onClick={closeC} className={"modal-backdrop"}></div>
            <div className={"modal-box"}>
                <h1>Codex</h1>
                <div className="Modal-container">
                    <div className="Modal-img-codex">
                        <img src="https://i.imgur.com/EcRSwWm.png" ></img>
                        <div className= "buttonContainer">
                            <button><a href="https://github.com/joeybodoia/testProject" target="_blank">Github Frontend</a></button>
                            <button><a href="https://github.com/joeybodoia/testProject" target="_blank">Github Backend</a></button>
                            <button><a  id="CodexAppText" href="https://jbproject2.herokuapp.com/animeRec" target="_blank">App</a></button>
                        </div>
                    </div>
                    <p>
                        Codex is a full-stack MERN web application that provides resources for users interested in software development. Resources are divided into 5 categories: Tech gear, Code Games, Videos, Cheatsheets, and Interview Prep. The goal of this application was to develop a one stop shop platform for aspiring software engineers to access useful resources for learning to code. I created the backend API using Node.js, Express, and Mongoose, and hosted the API on MongoDB. Postman was used to populate the API with data. I used React.js for all frontend functionality.
                    </p>
                </div>
                <div className="closeButtonContainer">
                    <button onClick={closeC} className="closeButton">Close</button>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default CodexModal