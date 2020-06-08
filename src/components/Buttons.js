import React from "react";
import "./Buttons.css";

export default class Buttons extends React.Component{
    render(){
        return(
            <button>{this.props.name}</button>
        )
    }
}