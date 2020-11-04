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
                <h1>Codex Modal</h1>
                <button onClick={closeC}>Close</button>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default CodexModal