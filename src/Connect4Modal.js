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
                <h1>Connect4 Modal</h1>
                <button onClick={closeC4}>Close</button>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default Connect4Modal