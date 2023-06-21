import React from "react";

const Modal = ({open}) => {
    if(!open) return null
    return (
        <div className="overlay">
            <div className="modelContainer">
                <h1>Coming Soon</h1>
            </div>
        </div>
    )
}

export default Modal;