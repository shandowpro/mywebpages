import Link from "next/link";
import styles from "@/styles/Home.module.css";

function Portfolio() {
  return (
    <>
      <header
        style={{
          color: "blue",
          fontSize: "50px",
          border: "solid red 3px",
          marginBottom: "10px",
        }}
      >
        Welcome to portfolio page
      </header>{" "}
      <br></br>
      <h1 style={{ color: "green" }}> Links of project's inner pages : </h1>
      <ul style={{ border: "solid red 3px", margin: "10px", padding: "5px" }}>
        <li>
          {" "}
          <Link href="/"> Go to Home page </Link>
        </li>
        <li>
          {" "}
          <Link href="/contact">
            {" "}
            Go to Contact page 'This page Router made by Folder Method'{" "}
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
