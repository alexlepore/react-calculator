import React from "react";
import Buttons from "./Buttons"
import "./ButtonsDisplay.css";

export default class ButtonsDisplay extends React.Component{
    render(){
        return(
            <div className="component-buttons-display">
                <div>
                    <Buttons name="AC"></Buttons>
                    <Buttons name="+/-"></Buttons>
                    <Buttons name="%"></Buttons>
                    <Buttons name="&divide;"></Buttons>
                </div>
                <div>
                    <Buttons name="7"></Buttons>
                    <Buttons name="8"></Buttons>
                    <Buttons name="9"></Buttons>
                    <Buttons name="*"></Buttons>
                </div>
                <div>
                    <Buttons name="4"></Buttons>
                    <Buttons name="5"></Buttons>
                    <Buttons name="6"></Buttons>
                    <Buttons name="-"></Buttons>
                </div>
                <div>
                    <Buttons name="1"></Buttons>
                    <Buttons name="2"></Buttons>
                    <Buttons name="3"></Buttons>
                    <Buttons name="+"></Buttons>
                </div>
                <div>
                    <Buttons name="0"></Buttons>
                    <Buttons name="."></Buttons>
                    <Buttons name="="></Buttons>                
                </div>
                
            </div>
        )
    }
}