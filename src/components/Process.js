import React from "react";
import "./Process.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Process({shloka, onCloseProcess}) {

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'hi-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const textToSpeech = () =>{
        const SpokenText = new SpeechSynthesisUtterance(transcript);
        SpokenText.lang = 'hi-IN';
        SpokenText.rate = 0.7;
        window.speechSynthesis.speak(SpokenText);
    }

    const tts2 = () =>{
        const CorrectText = new SpeechSynthesisUtterance(shloka.text);
        CorrectText.lang = 'hi-IN';
        CorrectText.rate = 0.7;
        window.speechSynthesis.speak(CorrectText);
        
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

                    <button className="button is-primary btn-lg bg-dark" onClick={startListening}>Start</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={SpeechRecognition.stopListening}>Stop</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={textToSpeech}>Your Speech</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={tts2}>Correct Speech</button>
                    <button className="button is-primary btn-lg bg-dark" onClick={onCloseProcess}>Back</button>
                    {/* <button onClick={reset('clear')}>Clear Text</button> */}

                </div>

            </div>

        </>
  )
}
