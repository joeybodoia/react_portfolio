import React, {forwardRef, useImperativeHandle} from "react"
import ReactDOM from "react-dom"

// const SuperheroModal = (props) => {
//     const [display,setDisplay] = React.useState(true);

//     const open = () => {
//         setDisplay(true)
//     }

//     const close = () => {
//         setDisplay(false)
//     }

//     if (display) {
//         return ReactDOM.createPortal(
//         <div className={'modal-wrapper'}>
//             <div onClick={close} className={"modal-backdrop"}></div>
//             <div className={"modal-box"}>
//                 <h1>Modal</h1>
//             </div>
//         </div>, document.getElementById("modal-root")
//     )
//     } else {
//         return null
//     }
// }

// export default SuperheroModal


const SuperheroModal = forwardRef((props, ref) => {
    const [display,setDisplay] = React.useState(true);

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
                <h1>Modal</h1>
                <button onClick={close}>Close</button>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default SuperheroModal