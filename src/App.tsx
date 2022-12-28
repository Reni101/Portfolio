import React from 'react';
import './App.css';
import Main from "./components/main/Main";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {
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
