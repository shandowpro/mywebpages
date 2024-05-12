// Third component [Main] :

// import { useState } from "react";
import "./main.css";

import { useState } from "react";

// Define array of All projects , to use it with mapping inside th displayed cards :
const projects = [
  {
    id: "1",
    projectTitle: "React & Bootstrap Project",
    projectSubTitle: "Project created by using React framework ",
    imgPath: "/1.jpg",
    category: ["React", "Bootstrap"],
    link: "",
  },
  {
    id: "2",
    projectTitle: "React & Bootstrap Project",
    projectSubTitle: "Project created by using React framework ",
    imgPath: "/1.jpg",
    category: ["React", "Bootstrap"],
    link: "",
  },
  {
    id: "3",
    projectTitle: "React & Bootstrap Project",
    projectSubTitle: "Project created by using React framework ",
    imgPath: "/1.jpg",
    category: ["React", "Bootstrap"],
    link: "",
  },
  {
    id: "4",
    projectTitle: "React & MUI Project",
    projectSubTitle: "Project created by using React framework ",
    imgPath: "/1.jpg",
    category: ["React", "MUI"],
    link: "",
  },
  {
    id: "5",
    projectTitle: "HTML & CSS Project",
    projectSubTitle: "Project created by using HTML CSS ",
    imgPath: "/1.jpg",
    category: ["HTML & CSS"],
    link: "",
  },
  {
    id: "6",
    projectTitle: "HTML & CSS Project",
    projectSubTitle: "Project created by using HTML CSS ",
    imgPath: "/1.jpg",
    category: ["HTML & CSS"],
    link: "",
  },
  {
    id: "7",
    projectTitle: "HTML & CSS Project",
    projectSubTitle: "Project created by using HTML CSS ",
    imgPath: "/1.jpg",
    category: ["HTML & CSS"],
    link: "",
  },
  {
    id: "8",
    projectTitle: "JavaScript Project",
    projectSubTitle: "Project created by using JavaScript ",
    imgPath: "/1.jpg",
    category: ["JavaScript"],
    link: "",
  },
  {
    id: "9",
    projectTitle: "JavaScript Project",
    projectSubTitle: "Project created by using JavaScript ",
    imgPath: "/1.jpg",
    category: ["JavaScript"],
    link: "",
  },
  {
    id: "10",
    projectTitle: "JavaScript Project",
    projectSubTitle: "Project created by using JavaScript ",
    imgPath: "/1.jpg",
    category: ["JavaScript"],
    link: "",
  },
  {
    id: "11",
    projectTitle: "NextJS Project",
    projectSubTitle: "Project created by using NextJS framework ",
    imgPath: "/1.jpg",
    category: ["NextJS"],
    link: "",
  },
  {
    id: "12",
    projectTitle: "NextJS Project",
    projectSubTitle: "Project created by using NextJS framework ",
    imgPath: "/1.jpg",
    category: ["NextJS"],
    link: "",
  },
  {
    id: "13",
    projectTitle: "NextJS Project",
    projectSubTitle: "Project created by using NextJS framework ",
    imgPath: "/1.jpg",
    category: ["NextJS"],
    link: "",
  },
];

const Main = () => {
  // Define a [useState] as a toggling value of class name of each  button usign it as return of backup function :
  const [currentActive, setCurrentActive] = useState("all");

 
  // Define a [useState] of the value of full array , to be used as switching array of clicked category :
  const [arr, setArr] = useState(projects);

 
  // Creating Re-usable function[using integrated filter methods] to be called  inside all buttons [onclick] , with using parmanter of [category button value ]    :
  const handleClick  = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = projects.filter((item) => {
      const newsubArr = item.category.filter((subItem) => {
        return subItem === buttonCategory;
      });
        return newsubArr[0] === buttonCategory ;
    });
    setArr(newArr);
  }


  // Creating Re-usable function  [using integrated filter & find method] to be called  inside all buttons [onclick] , with using parmanter of [category button value ]  :
  const handleClickFind  = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = projects.filter((item) => {
      const newsubArr = item.category.find((subItem) => {
        return subItem === buttonCategory;
      });
        return newsubArr === buttonCategory ;
    });
    setArr(newArr);
  }
  

  return (
    <main className="flex">
      <section className="  flex left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(projects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick('HTML & CSS');
          }}
          className={currentActive === "HTML & CSS" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick('JavaScript') ; 
          }}
          className={currentActive === "JavaScript" ? "active" : null}
        >
          JavaScript
        </button>

        <button
          onClick={() => {
            handleClick('React') ;             
          }}
          className={currentActive === "React" ? "active" : null}
        >
          React
        </button>

        <button
          onClick={() => {
            handleClickFind("NextJS") ; 
          }}
          className={currentActive === "NextJS" ? "active" : null}
        >
          NextJS
        </button>
      </section>

      <section className="  flex right-section">
        {arr.map((item) => {
          return (
            <article key={item.id} className="card">
              <img width={230} src={item.imgPath} alt="project Image" />

              <div style={{ width: "230px" }} className=" box">
                <h1 className="title"> {item.projectTitle} </h1>
                <p className="sub-title">{item.projectSubTitle}</p>

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
