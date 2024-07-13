// Fifth component [Footer] :

import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#hero"> About </a>
        </li>

        <li>
          <a href="#projects"> Projects </a>
        </li>

        <li>
          <a href="#refs"> Refs Courses </a>
        </li>

        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul>

      <p> &copy; Shadi Sayed. all rights reserved </p>
    </footer>
  );
};

export default Footer;
