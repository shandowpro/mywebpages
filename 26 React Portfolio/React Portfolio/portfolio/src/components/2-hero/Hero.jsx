// Second component [Hero] :

import "./hero.css";

// A] using [lottie files library] for animation :
  // A] / 1- Import the main [lottie files library] to be able to used inside this file   :
  import Lottie from "lottie-react";
  
  
  // A] / 2- Import the certian downloaded [Animation file] form [lottie files library] to be able to used inside this file as an element :
  // @ts-ignore
  import devAnimation from "../../animation/dev.json";
  
  // A] / 3- Importing    :
  import {useRef} from 'react' ; 



const Hero = () => {
  // A] / 4- Define  an extreacted  variable from the [useRef()] to be used within the advanced property of the [Animation speed ] :
  const lottieRef = useRef() ;
  
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <img src="/me.jpg" className="avatar" alt="" />
          <span className="icon-verified"> </span>
        </div>

        <h1 className="title"> Fullstack & React Web developer </h1>
        <p className="sub-title">
          Im Shadi Sayed , a Fullstack web developer and React web developer
          frontend
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"> </div>
          <div className="icon icon-instagram"> </div>
          <div className="icon icon-github"> </div>
          <div className="icon icon-linkedin"> </div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          style={{ height: '100%' }}
          loop={true}
          onLoadedImages={ () =>  {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(3) ; 
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
