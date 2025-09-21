import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative flex flex-col items-center gap-3 border-t-2 border-neutral-200 bg-white py-2 text-center text-xs md:block md:text-base">
      <p>&copy; Copyrights reserved {new Date().getFullYear()}</p>
      <div className="flex gap-2 text-2xl md:absolute md:top-1/2 md:right-4 md:-translate-y-1/2 md:gap-4">
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
