// Third component [Main] :

import "./mainRefs.css";

import { useState } from "react";

// Import the Defined  static array of All projects from external file , to use it with mapping inside th displayed cards :
import { refs } from "./MyRefs";

// Import the {framer motion} library to be used inside this file      :
import { AnimatePresence, motion } from "framer-motion";

const MainRefs = () => {
  // Define a useState variable as a [ toggling value of {class name} ] of each  button using it as return of backup function :
  const [currentActive, setCurrentActive] = useState("all");

  // Define a useState variable to store the value of [Full projects array] , to be used as switching & re-Set array of clicked category , inside each button :
  const [arr, setArr] = useState(refs);

  // Creating Re-usable function [using integrated filter methods] to be called  inside all buttons [onclick] , with using parmanter of [category button value]    :
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = refs.filter((item) => {
      const newsubArr = item.category.filter((subItem) => {
        return subItem === buttonCategory;
      });
      return newsubArr[0] === buttonCategory;
    });
    setArr(newArr);
  };

  // Creating Re-usable function  [using integrated filter & find methods] to be called  inside all buttons [onclick] , with using parmanter of [category button value ]  :
  const handleClickFind = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = refs.filter((item) => {
      // @ts-ignore
      const newsubArr = item.category.find((subItem) => {
        return subItem === buttonCategory;
      });
      return newsubArr === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <>
      <h1 className="header"> My Technical Lessons Documentary </h1>
      <main className="flex">
        <section className="  flex left-section">
          <button
            onClick={() => {
              setCurrentActive("all");
              setArr(refs);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            All Refs Courses
          </button>

          <button
            onClick={() => {
              handleClick("CSS 2");
            }}
            className={currentActive === "CSS 2" ? "active" : null}
          >
            CSS 2
          </button>

          <button
            onClick={() => {
              handleClick("CSS 3");
            }}
            className={currentActive === "CSS 3" ? "active" : null}
          >
            CSS 3
          </button>

          <button
            onClick={() => {
              handleClick("JavaScript Basics");
            }}
            className={currentActive === "JavaScript Basics" ? "active" : null}
          >
            JavaScript Basics
          </button>

          <button
            onClick={() => {
              handleClick("JavaScript ES6+");
            }}
            className={currentActive === "JavaScript ES6+" ? "active" : null}
          >
            JavaScript ES6+
          </button>

          <button
            onClick={() => {
              handleClickFind("Typescript");
            }}
            className={currentActive === "Typescript" ? "active" : null}
          >
            Typescript
          </button>

          <button
            onClick={() => {
              handleClickFind("ReactJs");
            }}
            className={currentActive === "ReactJs" ? "active" : null}
          >
            ReactJs
          </button>

          <button
            onClick={() => {
              handleClickFind("MySQL");
            }}
            className={currentActive === "MySQL" ? "active" : null}
          >
            MySQL
          </button>
        </section>

        <section className="  flex right-section">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    damping: 8,
                    stiffness: 50,
                  }}
                  exit={{ transform: "scale(0)" }}
                  key={item.id}
                  className="card"
                >
                  <motion.img
                    width={230}
                    src={item.imgPath}
                    alt="project Image"
                  />

                  <div style={{ width: "230px" }} className=" box">
                    <h1 className="title"> {item.courseTitle} </h1>
                    <p className="sub-title">{item.courseSubTitle}</p>

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
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
};

export default MainRefs;
