import { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarLinkGroup = ({
    id,
  activecondition,
  pathname,
  setSidebarExpanded,
  titre,
  liste_sous_section,
}) => {
  const [open, setOpen] = useState(activecondition);

  const handleClick = (e) => {
    
    e.preventDefault();
    setOpen((open) => !open);
    setSidebarExpanded(true);
  };

  return (
    
    <li key={id} className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${activecondition && 'from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}>
      <span
        // href="#0"
        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
          activecondition
            ? ""
            : "hover:text-gray-900 dark:hover:text-white"
        }`}
        onClick={(e)=>handleClick(e)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              className={`shrink-0 fill-current ${
                activecondition
                  ? "text-violet-500"
                  : "text-gray-400 dark:text-gray-500"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Z" />
              <path d="M6.068 7.482A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
            </svg>
            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {titre}
            </span>
          </div>
          {/* Icon */}
          <div className="flex shrink-0 ml-2">
            <svg
              className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${
                open && "rotate-180"
              }`}
              viewBox="0 0 12 12"
            >
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </div>
        </div>
      </span>
      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
          {[...liste_sous_section].map(({id,to,isActive,titre},index) => {
            return (
              <li className="mb-1 last:mb-0" key={id-index}>
                <NavLink
                  end
                  to={to}
                  className={
                    "block transition duration-150 truncate " +
                    (isActive
                      ? "text-violet-500"
                      : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                  }
                >
                  <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {titre}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default SidebarLinkGroup;
