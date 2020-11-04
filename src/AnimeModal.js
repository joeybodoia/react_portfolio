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
                <h1>Anime Modal</h1>
                <button onClick={closeA}>Close</button>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default AnimeModal