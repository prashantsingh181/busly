import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t-2 border-neutral-200 bg-white py-2 text-center text-xs md:text-base">
      <p>&copy; Copyrights reserved {new Date().getFullYear()}</p>
      <div className="absolute top-1/2 right-4 flex -translate-y-1/2 gap-2 text-2xl md:gap-4">
        <a
          href="https://www.linkedin.com/in/prashantsingh181/"
          className="hover:text-theme-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/prashantsingh181/busly"
          target="_blank"
          className="hover:text-theme-600"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
