import React,  from 'react';
import './App.css';
import Main from "./components/main/Main";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Projects from "./components/Projects/Projects";

function App() {

    // let [isLoading, setIsLoading] = useState<boolean>(false)
    //
    //
    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(true)
    //     }, 1000)
    // }, [])
    // //костыль
    //
    // if (!isLoading) {
    //     return <div>LOADING</div>
    // }


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
