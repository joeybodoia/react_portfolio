import React, {forwardRef, useImperativeHandle} from "react"
import ReactDOM from "react-dom"


const SuperheroModal = forwardRef((props, ref) => {
    const [display,setDisplay] = React.useState(false);

    useImperativeHandle(ref, ()=>{
        return {
            openModal: ()=> open(),
            close: ()=>close()
        }
    })

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
        <div className={'modal-wrapper'}>
            <div onClick={close} className={"modal-backdrop"}></div>
            <div className={"modal-box"}>
                <h1>SuperHero Showdown</h1>
                <div className="Modal-container">
                    <div className="Modal-img">
                        <img src="https://i.imgur.com/Or6MzZK.png" ></img>
                        <div className= "buttonContainer">
                            <button><a href="https://github.com/joeybodoia/generalAssemblyProjects" target="_blank">Github</a></button>
                            <button><a href="https://ga-project1.vercel.app/" target="_blank">App</a></button>
                        </div>
                    </div>
                    <p>
                        For my first web development project, I created a simple clientside application using only HTML, CSS, and jQuery. This application lets a user choose two superheroes from a randomly generated list and makes the heroes battle against each other. I used a third-party API, superheroapi.com, to retrieve the superhero data, such as images and statistics. The power and accuracy statistics for a given superhero are used in the game logic to determine how good of a fighter the hero will be. Hope you enjoy!
                    </p>
                </div>
                <div className="closeButtonContainer">
                    <button onClick={close} className="closeButton">Close</button>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default SuperheroModal