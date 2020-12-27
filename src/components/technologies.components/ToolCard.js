import React, {useEffect} from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function Tool(props) {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <div className="toolCard" data-aos="fade-left">
            <img className="toolImage" src={props.toolImage} alt=""/>
            <span className="toolName">{props.toolName}</span>
        </div>
    )
}

export default Tool;
