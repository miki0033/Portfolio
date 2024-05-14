import { useEffect, useState } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import ILink from "../interfaces/ILink";

function Sidebar(props: { linkList: ILink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sidebarElement = document.getElementById("sidebar");
    const closeSidebar = (e: MouseEvent) => {
      const target = e.target as Element;
      // Controlla se il click è all'interno della sidebar o su un link al suo interno
      if (isOpen && sidebarElement && !sidebarElement.contains(target)) {
        setIsOpen(false);
      }
    };
    document?.addEventListener("mousedown", closeSidebar);
    return () => {
      document?.removeEventListener("mousedown", closeSidebar);
    };
  }, [isOpen]);

  return (
    <>
      <div className="px-3 py-3 text-start">
        <button className=" focus:outline-none" onClick={toggleSidebar}>
          <Bars4Icon className="w-6 h-6 mx-2 text-white"></Bars4Icon>
        </button>
      </div>

      <div
        id="sidebar"
        className={`fixed top-0 left-0 h-4/5 w-64  transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } rounded-lg  `}
      >
        <div className="bg-white opacity-95 m-4 rounded-lg w-[90%] h-full">
          <div className="flex justify-end pt-4 pr-4">
            <button onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-gray-500"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-6">
            {props.linkList.map((li: ILink, idx: number) => {
              return (
                <a key={idx} href={li.href} onClick={toggleSidebar}>
                  <li className="px-4 py-2 hover:bg-gray-700 text-black cursor-pointer">
                    {li.text}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
