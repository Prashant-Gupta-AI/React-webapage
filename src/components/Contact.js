import React from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Contact = () =>{
    
    return(
        <div>
            <Modal/>
            <div
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}
            >
                <Link to='/alex' className="ui header">Alex</Link>
                <p>
                What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div
            className="ui raised very padded text container segment"
            style={{marginTop:'80px'}}
            >
                <Link to='/william' className="ui header">William</Link>
                <p>
                What is Lorem Ipsum?
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

export default Contact;