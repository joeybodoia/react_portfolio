import React, {forwardRef, useImperativeHandle} from "react"
import ReactDOM from "react-dom"


const SnakeModal = forwardRef((props, ref) => {
    const [display,setDisplay] = React.useState(false);

    useImperativeHandle(ref, ()=>{
        return {
            openModalS: ()=> openS(),
            closeS: ()=>closeS()
        }
    })

    const openS = () => {
        setDisplay(true)
    }

    const closeS = () => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
        <div className={'modal-wrapper'}>
            <div onClick={closeS} className={"modal-backdrop"}></div>
            <div className={"modal-box"}>
                <h1>Snake Game Remastered</h1>
                <h2>Mobile Friendly? No</h2>
                <div className="Modal-container">
                    <div className="Modal-img-codex">
                        <img src="https://i.imgur.com/PenpT8R.png" ></img>
                        <div className= "buttonContainer">
                            <button><a href="https://github.com/joeybodoia/game_frontend" target="_blank">Github Frontend</a></button>
                            <button><a href="https://github.com/joeybodoia/snake_backend" target="_blank">Github Backend</a></button>
                            <button><a  id="CodexAppText" href="https://gallant-colden-513da5.netlify.app/" target="_blank">App</a></button>
                        </div>
                    </div>
                    <div>
                        <p>
                            For this project, I created a platform where users can create an account and play the Snake game. The game itself, as well as all front-end functionality, was created using React.js. The backend, which consists of a user model (used JWT for authorization) and profile model, was created using Ruby on Rails. Once logged in, users can create/edit a profile that is unique to them. This profile also tracks their highscore. There is also a leaderboard that shows the top five high scores of all the users. PostgreSQL was used for the database.
                        </p>
                        <p>
                            Tools/Technologies used: React.js, Ruby on Rails, PostgreSQL
                        </p>
                    </div>
                </div>
                <div className="closeButtonContainer">
                    <button onClick={closeS} className="closeButton">Close</button>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default SnakeModal