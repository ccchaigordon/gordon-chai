import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const navRef = useRef<HTMLElement | null>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  function adjustMenuVisibility() {
    if (window.innerWidth >= 640) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    adjustMenuVisibility();
    window.addEventListener("resize", adjustMenuVisibility);
    return () => window.removeEventListener("resize", adjustMenuVisibility);
  }, []);

  useEffect(() => {
    if (!isMenuOpen || window.innerWidth >= 640) return;

    function handleDocumentClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isMenuOpen]);

  function scrollToFeatured(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById("featured-projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth < 640) {
      setIsMenuOpen(false);
    }
  }

  return (
    <nav
      ref={navRef}
      className="
        z-100 absolute sm:fixed bg-base-200 sm:m-0
        flex items-start sm:items-center w-min sm:w-full
        min-h-[60px] h-full sm:h-auto sm:justify-center
        rounded-r-2xl sm:rounded-none
        bg-[linear-gradient(315deg,#130f40_0%,#000000_74%)]
        opacity-90
      "
    >
      {/* Hamburger Button */}
      <button
        id="menuBtn"
        className="absolute sm:hidden mx-8 mt-8 mb-2 outline-none cursor-pointer"
        aria-label="Open Menu"
        aria-expanded={isMenuOpen}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* NavBar */}
      <div
        id="menu"
        className={`
          m-6 -mx-20 sm:m-0 sm:mx-auto w-auto sm:w-[90%]
          flex flex-col sm:flex-row sm:justify-between sm:items-center
          overflow-hidden transition-all duration-300 ease-in-out
          ${isMenuOpen ? "max-h-96 mx-6 opacity-100" : "max-h-0 p-0 opacity-0"}
        `}
      >
        <a
          href="/"
          className="flex flex-row items-center mx-2 mt-14 mb-4 sm:my-0 outline-none"
        >
          <img
            src="/assets/logo_white.svg"
            className="h-6 sm:h-8 w-auto mr-4"
          />
          <p className="text-sm sm:hidden">Gordon Chai</p>
        </a>
        <hr className="sm:hidden ml-2 mt-2 mb-4" />

        {/* Nav links */}
        <ul className="menu p-0 gap-2 sm:gap-0 sm:menu-horizontal rounded-box">
          <li>
            <a
              href="#"
              className="hover:bg-base-700 outline-0"
              onClick={scrollToFeatured}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-folder"
              >
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
              </svg>
              Projects
            </a>
          </li>
          <li>
            <a className="hover:bg-base-700 outline-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-file-user"
              >
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <path d="M15 18a3 3 0 1 0-6 0"></path>
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path>
                <circle cx="12" cy="13" r="2"></circle>
              </svg>
              Resume
              <span className="badge badge-xs badge-primary">PDF</span>
            </a>
          </li>
          <li>
            <a className="hover:bg-base-700 outline-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
