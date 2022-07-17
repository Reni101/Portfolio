import React from 'react';
import './App.css';
import Main from "./components/main/Main";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import RemoteJob from "./components/RemoteJob/RemoteJob";
import Contacts from "./components/Contacts/Contacts";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteJob/>
            <Contacts/>
        </div>
    );
}

export default App;
