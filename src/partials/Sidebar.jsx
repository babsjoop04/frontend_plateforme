import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import Logo from "@/images/logo.jpeg";

import SidebarLinkGroup from "./SidebarLinkGroup";
import SidebarLinks from "./SidebarLinks";

import {
  ArrowLeftFromLine,
  ArrowRightFromLine,
  PillBottle,
  UserCog,
} from "lucide-react";

function Sidebar({ sidebarOpen, setSidebarOpen, variant = "default" }) {
  const location = useLocation();
  const { pathname } = location;

  // const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");

  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (sidebarOpen && !sidebar.current.contains(target)) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div className="min-w-fit">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:!flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        } ${
          variant === "v2"
            ? "border-r border-gray-200 dark:border-gray-700/60"
            : "rounded-r-2xl shadow-sm"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}

          <span className="block">
            <NavLink end to="/" className="block">
              <div className=" flex flex-col ">
                <img
                  src={Logo}
                  className="w-32   object-cover   rounded-full shadow"
                />
                <h6
                  className={`font-semibold my-4   text-gray-800 dark:text-gray-100 ${
                    sidebarExpanded ? "" : "hidden"
                  }`}
                >
                  Sama pharmacovigile
                </h6>
              </div>
            </NavLink>
          </span>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            <ul className="mt-3">
              {/* Dashboard */}

              {/* {[
                //admin
                {
                  activecondition:
                     pathname.includes("utilisateurs"),
                  key: new Date().getTime(),
                  titre: "Utilisateurs",

                  liste_sous_section: [
                    {
                      id: new Date().getTime(),
                      to: "/utilisateurs/demandes",
                      titre: "Demandes d'inscription",
                      isActive:
                        pathname === "/utilisateurs/demandes",
                    },
                    {
                      id: new Date().getTime(),
                      to: "/utilisateurs/gestion",
                      titre: "Gestion des utilisateurs",
                      isActive:
                        pathname === "/utilisateurs/gestion",
                    },
                  ],
                },

                {
                  activecondition:
                    pathname.includes("/produits"),
                  key: new Date().getTime(),
                  titre: "Produit de sante",
                  liste_sous_section: [
                    {
                      id: new Date().getTime(),
                      to: "/produits/ajout",
                      titre: "Ajouter un produit",
                      isActive:
                        pathname === "/produits/ajout",
                    },
                    {
                      id: new Date().getTime(),
                      to: "/produits/gestion",
                      titre: "Gestion des produits",
                      isActive:
                        pathname === "/produits/gestion",
                    },
                  ],
                },
                {
                  activecondition:
                     pathname.includes("/notification"),
                  key: new Date().getTime(),
                  titre: "Notifications",

                  liste_sous_section: [
                    {
                      id: new Date().getTime(),
                      to: "/notification/pqif",
                      titre: "Suspition de defaut de qualité (PQIF)",
                      isActive:
                        pathname === "/notification/pqif",
                    },
                    {
                      id: new Date().getTime(),
                      to: "/notification/mapi",
                      titre: "Manifestation post vaccinale indesrirable (MAPI)",
                      isActive:
                        pathname === "/notification/mapi",
                    },
                    {
                      id: new Date().getTime(),
                      to: "/notification/eeim",
                      titre:
                        "Effet/événement indesrirables des médicaments (EEIM)",
                      isActive:
                        pathname === "/notification/eeim" ,
                    },
                  ],
                },
              ].map((element, index) => {
                return (
                  <SidebarLinkGroup
                    activecondition={element.activecondition}
                    key={element.key + index}
                    pathname={pathname}
                    setSidebarExpanded={setSidebarExpanded}
                    titre={element.titre}
                    liste_sous_section={element.liste_sous_section}
                  />
                );
              })} */}

              <SidebarLinks pathname={pathname} setSidebarExpanded={setSidebarExpanded} />

              {/* Messages */}
              <li
              key={new Date().getTime()}
                className={`pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${
                  pathname.includes("/sinformer") &&
                  "from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]"
                }`}
              >
                <NavLink
                  end
                  to="/sinformer"
                  className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                    pathname.includes("sinformer")
                      ? ""
                      : "hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="grow flex items-center ">
                      <span
                        className={` ${
                          pathname.includes("/sinformer")
                            ? "text-violet-500"
                            : "text-gray-400 dark:text-gray-500"
                        }`}
                      >
                        <PillBottle size={21} />
                      </span>
                      <span
                        className="text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                      >
                        S'informer
                      </span>
                    </div>

                    {/* <div className="flex flex-shrink-0 ml-2">
                      <span className="inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-violet-400 px-2 rounded">
                        4
                      </span>
                    </div> */}
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 mt-4">
            <button
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <span className="text-violet-500">
                {sidebarExpanded ? (
                  <ArrowLeftFromLine />
                ) : (
                  <ArrowRightFromLine />
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
