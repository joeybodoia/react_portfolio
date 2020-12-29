import React, {forwardRef, useImperativeHandle} from "react"
import ReactDOM from "react-dom"


const Connect4Modal = forwardRef((props, ref) => {
    const [display,setDisplay] = React.useState(false);

    useImperativeHandle(ref, ()=>{
        return {
            openModalC4: ()=> openC4(),
            closeC4: ()=>closeC4()
        }
    })

    const openC4 = () => {
        setDisplay(true)
    }

    const closeC4 = () => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
        <div className={'modal-wrapper'}>
            <div onClick={closeC4} className={"modal-backdrop"}></div>
            <div className={"modal-box"}>
                <h1>Connect4AI</h1>
                <h2>Mobile Friendly? Yes</h2>
                <div className="Modal-container">
                    <div className="Modal-img">
                        <img src="https://i.imgur.com/1020U8p.png" ></img>
                        <div className= "buttonContainer">
                            <button><a href="https://www.glowscript.org/#/user/jbodoia21/folder/MyPrograms/program/Connect4Project" target="_blank">App</a></button>
                        </div>
                    </div>
                    <p>
                        This is a small video game project I did for one of my computer science courses at Claremont Mckenna. I used VPython on the GlowScript IDE to create a 3D animated connect 4 game, where a user plays a game against AI. The game logic was created using a myriad of functions written in python, which allow the user to choose which move to make, and instruct the 'computer' how to respond to a user's move. Check out the game, as well as the code, by clicking pn the 'App' button!
                    </p>
                </div>
                <div className="closeButtonContainer">
                    <button onClick={closeC4} className="closeButton">Close</button>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default Connect4Modal