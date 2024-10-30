import { ChevronDown, ChevronUp, Pill, Send, UserCog } from "lucide-react";
import { useEffect, useState } from "react";
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

  // useEffect(()=>{
  //   console.log(icon);

  // })

  return (
    <li
      key={id}
      className={`pl-4 pr-3 py-2 my-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
        activecondition &&
        "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
      }`}
    >
      <span
        // href="#0"
        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
          activecondition ? "" : "hover:text-gray-900 dark:hover:text-white"
        }`}
        onClick={(e) => handleClick(e)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-violet-500 ">
              {/* {activecondition ? "text-violet-500" : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"} */}
              {titre === "Utilisateurs" && <UserCog size={21} />}
              {titre === "Notifications" && <Send size={21} />}
              {titre === "Produit de sante" && <Pill size={21} />}
            </span>
            <span className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {titre}
            </span>
          </div>
          {/* Icon */}
          <div className="flex shrink-0 ml-2 ">
            {open ? <ChevronUp /> : <ChevronDown />}
          </div>
        </div>
      </span>
      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
        <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
          {[...liste_sous_section].map(({ id, to, isActive, titre }, index) => {
            return (
              <li className="mb-1 last:mb-0" key={id - index}>
                <NavLink
                  end
                  to={to}
                  className={
                    "block transition duration-150  " +
                    //truncate
                    (isActive
                      ? "text-violet-500"
                      : "text-gray-500/90 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200")
                  }
                >
                  <span className={`text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200 ${
                          isActive
                            ? "text-violet-500"
                            : "text-gray-400 dark:text-gray-500"
                        }`}>
                  {/* className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200" */}
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
