import React from "react";
import "./Process.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Process({shloka, onCloseProcess}) {

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'mr-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const textToSpeech = () =>{
        const SpokenText = new SpeechSynthesisUtterance(transcript);
        SpokenText.lang = 'hi-IN';
        SpokenText.rate = 0.7;
        window.speechSynthesis.speak(SpokenText);
    }
    if (!browserSupportsSpeechRecognition) {
        return null;
    }
    // function reset(elementId){
        
    // }

  return (
    <>
            <div className="container">
                
                <p>{shloka.text}</p>

                <div className="main-content" id = "clear" >
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={startListening}>Start</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop</button>
                    <button onClick={textToSpeech}>Your Speech</button>
                    {/* <button onClick={reset('clear')}>Clear Text</button> */}
                    <button onClick={onCloseProcess}>Back</button>

                </div>

            </div>

        </>
  )
}
