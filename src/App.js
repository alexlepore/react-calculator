import React from "react";
import Display from "./components/Display";
import ButtonsDisplay from "./components/ButtonsDisplay";
import "./App.css";

export default class App extends React.Component{
  render(){
    return(
      <div className="component-app">
        <Display />
        <ButtonsDisplay />
      </div>
    )
  }
}
