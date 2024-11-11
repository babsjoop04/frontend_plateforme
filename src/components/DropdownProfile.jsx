import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Transition from "../utils/Transition";
import axios from "axios";

import { LogOut, TableOfContents } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";

import { Button, Spinner } from "flowbite-react";
import { deconnection } from "@/redux/stateSlice/user/userSlice";
import { useAuthProvider } from "../utils/AuthContext";

// import { Spinner } from "@material-tailwind/react";

function DropdownProfile({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [traitement, setTraitement] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // const nom = useSelector((state) => state.user.infos.nom);
  // const prenom = useSelector((state) => state.user.infos.prenom);
  // const role_utilisateur = useSelector(
  //   (state) => state.user.infos.role_utilisateur
  // );
  // const token = useSelector((state) => state.user.token);

  const { currentUser, changeCurrentUser } = useAuthProvider();

  // const dispatch = useDispatch();
 const navigate=useNavigate()


  const logout = () => {

    setTraitement((value) => !value);



    setTimeout(()=>{


      setTraitement((value) => !value);

      axios
    .post("/api/logout",{}, {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${currentUser.token}`
        // application/json multipart/form-data;
      },
    })
    .then(function (response) {

      if (response.statusText==="OK") {
        // console.log(currentUser.token);
        
        changeCurrentUser({
          token: null,
          role_utilisateur: null,
          prenom: null,
          nom: null,
        })

        // deconnexion()

      }

      // dispatch(
      //   deconnection()
      // );




      // console.log(response);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    })
    .catch(function (error) {
      console.log(error);
      // console.log(currentUser.token);


    })


    },1500)

    

    // console.log(token);

    // setDropdownOpen(!dropdownOpen)
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // // close if the esc key is pressed
  // useEffect(() => {
  //   const keyHandler = ({ keyCode }) => {
  //     if (!dropdownOpen || keyCode !== 27) return;
  //     setDropdownOpen(false);
  //   };
  //   document.addEventListener('keydown', keyHandler);
  //   return () => document.removeEventListener('keydown', keyHandler);
  // });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        {/* <div className="flex items-center truncate"> */}

        <TableOfContents />

        {/* </div> */}
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${
          align === "right" ? "right-0" : "left-0"
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200 dark:border-gray-700/60">
            <div className="font-medium text-gray-800 dark:text-gray-100">
              {currentUser.prenom} {currentUser.nom}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 italic">
              {currentUser.role_utilisateur}
            </div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 flex items-center py-1 px-3"
                // to="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              {traitement ? (
                <span
                  className="font-medium text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 flex items-center py-1 px-3"
                >
                  <Spinner
                    color="info"
                    className="mr-2"
                    aria-label="Info spinner example"
                  />
                  Deconnection
                </span>
              ) : (
                <span
                  className="font-medium text-sm text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 flex items-center py-1 px-3"
                  onClick={() => logout()}
                >
                  <LogOut className="mr-2" />
                  Se deconnecter
                </span>
              )}
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownProfile;
