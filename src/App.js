import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { useState } from "react";

const App = () => {
    

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'hi-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    // const [timeStamp, setTimeStamp] = useState(Date.now());

    const textToSpeech = () =>{
        const SpokenText = new SpeechSynthesisUtterance(transcript);
        SpokenText.lang = 'hi-IN';
        SpokenText.rate = 0.7;
        window.speechSynthesis.speak(SpokenText);
    }
    if (!browserSupportsSpeechRecognition) {
        return null;
    }


    function reset(elementId){
        
    } 
        


    return (
        <>
            <div className="container">
                <h2>Mantrayaan</h2>
                <br/>
                <p>धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय</p>

                <div className="main-content" id = "clear" >
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={startListening}>Start</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop</button>
                    <button onClick={textToSpeech}>Your Speech</button>
                    <button onClick={reset('clear')}>Clear Text</button>

                </div>

            </div>

        </>
    );
};

export default App;