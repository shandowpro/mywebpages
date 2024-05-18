// Second component [Hero] :

import "./hero.css";

// using lottie files library :
import Lottie from "lottie-react";
// @ts-ignore
import devAnimation from "../../animation/dev.json";

import {useRef} from 'react' ; 



const Hero = () => {
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
          {" "}
          Im Shadi Sayed , a Fullstack web developer and React web developer
          frontend{" "}
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
