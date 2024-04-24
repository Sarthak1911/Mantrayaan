import React, {useState} from "react";
import Process from "./components/Process";
import Lists from "./components/Lists";
import verse from "./verse.json"

const App = () => {    

    const [showProcess, setShowProcess] = useState(false);
    const [selectedShloka, setSelectedShloka] = useState(null);

    const handleShlokaClick = (shloka) => {
        setSelectedShloka(shloka);
        setShowProcess(true);
    };

    const handleCloseProcess = () => {
        setShowProcess(false);
    };

    return (
        <>
            <h2>Mantrayaan</h2>
            {/* <Lists verse={verse}></Lists>
            <Process></Process> */}

            {!showProcess && <Lists verse={verse} onShlokaClick={handleShlokaClick} />}
            {showProcess && <Process shloka={selectedShloka} onCloseProcess={handleCloseProcess} />}
        </>
    );
};

export default App;