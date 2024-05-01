// Second component [Hero] :

import "./hero.css";

const Hero = () => {
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

      <div className="right-section animation"></div>
    </section>
  );
};

export default Hero;
