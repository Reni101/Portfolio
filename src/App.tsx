import React, {useEffect, useState} from 'react';
import './App.css';
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./components/projects/Projects";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
