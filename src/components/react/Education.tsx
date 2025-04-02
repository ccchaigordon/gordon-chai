import education from "../../data/education.json";
import Sky from "./Sky.tsx";

export default function Education() {
  const toggleEducationVisibility = () => {
    const education = document.querySelector(".education-content");
    if (education) {
      education.classList.toggle("translate-y-full");
      education.classList.toggle("opacity-0");
      education.classList.toggle("invisible");

      if (education.classList.contains("translate-y-full")) {
        document.documentElement.style.overflowY = "auto";
        document.body.style.overflowY = "auto";
      } else {
        document.documentElement.style.overflowY = "hidden";
        document.body.style.overflowY = "hidden";
      }
    }
  };

  return (
    <div className="education-content z-10 fixed flex flex-col bottom-0 left-0 h-[85vh] w-full transform transition-all duration-500 ease-in-out translate-y-full opacity-0 text-white rounded-t-[30px] invisible">
      <Sky />
      <button
        onClick={toggleEducationVisibility}
        className="fixed top-6 z-80 self-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-chevron-down-icon lucide-circle-chevron-down"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m16 10-4 4-4-4" />
        </svg>
      </button>
      <div className="relative w-full h-full rounded-t-[30px]">
        <div className="absolute -inset-2 rounded--t-[50px] bg-gradient-to-t from-blue-600 via-lime-600 to-indigo-600 opacity-50 blur-2xl"></div>
        <div className="relative px-10 sm:px-20 py-16 flex flex-col items-center lg:items-start w-full h-full bg-gradient-to-b from-[#0f172a] to-[#334155] rounded-t-[30px] text-slate-300">
          <h2 className="mt-4 sm:mt-0 text-center lg:text-left font-semibold text-lg text-blue-200">
            Educations
          </h2>
          <hr className="w-[2.5vw] h-[2px] mx-auto lg:mx-0 lg:text-center mt-3 mb-6 bg-gray-400" />

          <div className="relative md:w-auto h-auto text-sm sm:text-md text-center sm:text-left">
            {education.map((item, index) => (
              <div
                key={index}
                className="flex w-auto py-2 items-center relative my-6"
              >
                <div className="hidden sm:block w-20">
                  <div className="font-bold">{item.year}</div>
                  <div className="text-xs">{item.month}</div>
                </div>

                <div className="hidden sm:block border-r-2 border-blue-200 absolute h-full left-20 top-0 z-10"></div>

                <div className="sm:ml-10 w-full">
                  <div className="font-bold">{item.education}</div>
                  <div className="md:mb-4">{item.institute}</div>
                  <div className="m-0">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
