// Third component [Main] :

import "./main.css";
// import { React } from 'react';

const Main = () => {
  return (
    <main className="flex">
      <section className="  flex left-section">
        <button >All Projects</button>

        <button className={true? "active" : null }  >HTML & CSS</button>

        <button>JavaScript</button>

        <button>React & MIU</button>

        <button>Node & Express</button>
      </section>  
      

      <section className="  flex right-section">
        
         {["aa", "bb", "cc"  , 1 , 3  ].map((item) => {
          return (
            <article key={item}  className="card">
              <img width={230} src="./1.jpg" alt="project Image" />

              <div style={{ width: "230px" }} className=" box">
                <h1 className="title"> Landing page 1 </h1>
                <p className="sub-title">
                  Project Card details Project Card details Project Card details
                  Project Card details
                </p>

                <div className="flex icons ">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    More
                    <span
                      style={{ alignSelf: "center" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
