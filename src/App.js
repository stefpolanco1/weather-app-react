import React from "react";
import Weather from "./Weather";
import Form from "./Form";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Form />
        <Weather />
        <footer>
          This project was coded by Stefanie Polanco and is {" "}
        <a href="https://github.com/stefpolanco1/weather-app-react"
        target="_blank">
          open-sourced on Github
        </a>
        </footer>
      </div>
    </div>
  );
}