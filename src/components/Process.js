import React, { useState } from "react";
import "./Process.css";
import { calculateSimilarity } from "./Test/strCom.mjs";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Process({shloka, onCloseProcess}) {

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'hi-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const [accuracy, setAccuracy] = useState(null);

    const textToSpeech = () =>{
        const SpokenText = new SpeechSynthesisUtterance(transcript);
        SpokenText.lang = 'hi-IN';
        SpokenText.rate = 0.85;
        window.speechSynthesis.speak(SpokenText);
    }

    const tts2 = () =>{
        const CorrectText = new SpeechSynthesisUtterance(shloka.text);
        CorrectText.lang = 'hi-IN';
        CorrectText.rate = 0.85;
        window.speechSynthesis.speak(CorrectText);
        
    }

    if (!browserSupportsSpeechRecognition) {
        return null;
    }

    const calculateAccuracy = () => {
        const acc = calculateSimilarity(transcript, shloka.text) * 100;
        console.log("Accuracy:", acc.toFixed(2) + "%");
        setAccuracy(acc.toFixed(2));
        // const faccuracy = accuracy.toFixed(2) + "%";
    }
    

  return (
    <>
            <div className="container">
                
                <p>{shloka.text}</p>

                <div className="main-content" >
                    {transcript}
                    <br />
                    <br />
                    {accuracy &&("Your Accuracy is: " + accuracy + "%")}
                </div>

                <div className="btn-style">

                    <button className="button is-primary btn-lg bg-dark" onClick={startListening}>Start</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={SpeechRecognition.stopListening}>Stop</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={textToSpeech}>Your Speech</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={tts2}>Correct Speech</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={calculateAccuracy}>Accuracy</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={onCloseProcess}>Back</button>

                </div>
            </div>
        </>
  )
}
