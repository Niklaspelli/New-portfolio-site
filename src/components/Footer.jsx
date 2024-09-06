import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="fontawesome">
        <a
          href="https://se.linkedin.com/in/niklas-pelli-b09779284"
          target="_blank rel=noreferrer"
        >
          <FaLinkedinIn className="fa-brands" />
        </a>
        <a href="https://github.com/Niklaspelli" target="_blank rel=noreferrer">
          <FaGithub className="fa-brands" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
