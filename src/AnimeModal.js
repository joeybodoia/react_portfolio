import React, {forwardRef, useImperativeHandle} from "react"
import ReactDOM from "react-dom"


const AnimeModal = forwardRef((props, ref) => {
    const [display,setDisplay] = React.useState(false);

    useImperativeHandle(ref, ()=>{
        return {
            openModalA: ()=> openA(),
            closeA: ()=>closeA()
        }
    })

    const openA = () => {
        setDisplay(true)
    }

    const closeA = () => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
        <div className={'modal-wrapper'}>
            <div onClick={closeA} className={"modal-backdrop"}></div>
            <div className={"modal-box"}>
                <h1>AniméRex</h1>
                <div className="Modal-container">
                    <p>
                        For this project, I used Node.js, Express, Mongoose, MongoDB, and React.js to build a full-stack web application that hosts animé recommendations. Once logged in, a user can post new recommendations, edit or delete previous recommendations, view all of all their previous recommendations, as well as like other user's recommendations. I utitlized express-react-views to render React components on the server, and MongoDB to host the user data and the data for animé posts. Styling was done using CSS.
                    </p>
                    <div className="Modal-img">
                        <img src="https://i.imgur.com/1wY7gZ9.png" style={{'width':'23vw'}}></img>
                        <div className= "buttonContainer">
                            <button><a href="https://github.com/joeybodoia/testProject" target="_blank">Github</a></button>
                            <button><a href="https://jbproject2.herokuapp.com/animeRec" target="_blank">App</a></button>
                        </div>
                    </div>
                </div>
                <div className="closeButtonContainer">
                    <button onClick={closeA} className="closeButton">Close</button>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default AnimeModal