import React from "react";
import "./title.css";

export default function Title(props){
    return (
        <div className="title--wrapper">
            <div className="title--container">
                <div className="title--content">
                   <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    );
}