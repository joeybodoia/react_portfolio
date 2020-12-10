import React, {forwardRef, useImperativeHandle} from "react"
import ReactDOM from "react-dom"


const ResumeModal = forwardRef((props, ref) => {
    const [display,setDisplay] = React.useState(false);

    useImperativeHandle(ref, ()=>{
        return {
            openModalR: ()=> openR(),
            closeR: ()=>closeR()
        }
    })

    const openR = () => {
        setDisplay(true)
    }

    const closeR = () => {
        setDisplay(false)
    }

    if (display) {
        return ReactDOM.createPortal(
        <div className={'modal-wrapper'}>
            <div onClick={closeR} className={"modal-backdrop"}></div>
            <div className={"modal-box-resume"}>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vQOgBR3-ZnM9AWNY5Lq0XVWedr_6CVaRmZSVHiN1730gizFXrWV0N7pqVsNR22GiQ/pub?embedded=true" style={{'width':'70%', 'height':'100%'}}></iframe>

                <div>
                    <button onClick={closeR} className="closeButton">Close</button>
                </div>
            </div>
        </div>, document.getElementById("modal-root")
    )
    } else {
        return null
    }
})

export default ResumeModal















// import React from "react"



// const Resume = (props) => {
//     return(
//         <div>
//             <iframe src="https://docs.google.com/document/d/e/2PACX-1vQOgBR3-ZnM9AWNY5Lq0XVWedr_6CVaRmZSVHiN1730gizFXrWV0N7pqVsNR22GiQ/pub?embedded=true"></iframe>
//         </div>
//     )
// }


// export default Resume