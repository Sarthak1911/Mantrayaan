import React from 'react';
import mantraImage from "../assets/Mantra.png";
import mantraImage2 from "../assets/mantra_second.png"
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero is-medium is-primary">
        <div className="mc">
              <div className="content-first">
                  <h1>Unlock the Power <br /> of Sanskrit Pronunciation</h1>
                  <p>At Mantrayaan, we bring the ancient language of Sanskrit to life with cutting-edge speech recognition technology. Whether you're a beginner or an advanced learner, our platform provides an immersive experience to refine your pronunciation and deepen your understanding of this timeless language. Join us on a journey of discovery and mastery with Mantrayaan.</p>
                  {/* <a href="/">Read More</a> */}
              </div>
              <div className="content-first">
                  {/* <img src="Mantra.png" alt="Mantra" srcset="" /> */}
                  <img src={mantraImage} alt="img" />
              </div>
        </div>

        <div className="mc">
              <div className="content-second">
                  <img src={mantraImage2} alt="img" />
              </div>
              <div className="content-second">
                  <h1>Elevate Your<br />Sanskrit Learning Experience</h1>
                  <p>At Mantrayaan, we revolutionize Sanskrit learning by integrating state-of-the-art features into our platform. With speech input, receive real-time pronunciation feedback, engage in interactive lessons, and track your progress effortlessly. Embark on a transformative journey with Mantrayaan and experience Sanskrit like never before.</p>
              </div>
        </div>
    </section>
  );
}

export default Hero;
