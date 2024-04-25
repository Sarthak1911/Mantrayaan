import React, {useState} from "react";
import Process from "./components/Process";
import Lists from "./components/Lists";
// import verse from "./verse.json";
import sample from "./sample.json";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {    

    const [showProcess, setShowProcess] = useState(false);
    const [selectedShloka, setSelectedShloka] = useState(null);
    const [showHero, setShowHero] = useState(true);
    const [showTryNowButton, setShowTryNowButton] = useState(true);

    const handleShlokaClick = (shloka) => {
        setSelectedShloka(shloka);
        setShowProcess(true);
    };

    const handleCloseProcess = () => {
        setShowProcess(false);
    };

    const handleTryNowClick = () => {
        setShowHero(false);
        setShowTryNowButton(false);
    };
    const handleExitClick = () => {
        setShowHero(true);
        setShowTryNowButton(true);
    };

    return (
        <>
            {/* <h2>Mantrayaan</h2> */}
            {/* <Lists verse={verse}></Lists>
            <Process></Process> */}
            {/* <Hero></Hero> */}
             <Header 
                onTryNowClick={handleTryNowClick} 
                onExitClick={handleExitClick} 
                showTryNowButton={showTryNowButton} 
            />
            {showHero && <Hero/>}
            {!showProcess && !showHero && <Lists verse={sample} onShlokaClick={handleShlokaClick} />}
            {showProcess && <Process shloka={selectedShloka} onCloseProcess={handleCloseProcess} />}
        </>
    );
};

export default App;