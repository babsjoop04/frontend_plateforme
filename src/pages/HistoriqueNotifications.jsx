import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";

// import axios from "axios";

// import { useAuthProvider } from "../utils/AuthContext";
import axios from "axios";
import { Button, Dropdown } from "flowbite-react";
import { useAuthProvider } from "../utils/AuthContext";

const HistoriqueNotifications = ({ type_notification }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const { currentUser, changeCurrentUser } = useAuthProvider();

  useEffect(() => {
    // console.log(currentUser.token);

    axios
      .get("/api/notification", {
        params: {
          type_notification: type_notification,
        },
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${currentUser.token}`,
          // application/json;
        },
      })
      .then(function (response) {
        console.log(response);

        // setTimeout(() => {
        //   navigate("/");
        // }, 2500);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  const getNotifs = () => {
    // axios
    // .get(
    //   "/api/notification",
    //   {},
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${currentUser.token}`,
    //       // application/json;
    //     },
    //   }
    // )
    // .then(function (response) {
    //   console.log(response);
    //   // setTimeout(() => {
    //   //   navigate("/");
    //   // }, 2500);
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   // const responseErrors = error.response.data.errors;
    //   // setErrors(responseErrors);
    // });
  };
  //   useEffect(()=>{
  //     console.log(notifications);

  //   })

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Votre historique de notification
                </h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" />
                {/* Add view button */}
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  <svg
                    className="fill-current shrink-0 xs:hidden"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="max-xs:sr-only">Add View</span>
                </button>
              </div>
            </div>
            <Dropdown
            color="light"
             label="Choix le type de notification" dismissOnClick={false}>
              <Dropdown.Item >
                MAPI
              </Dropdown.Item>
              <Dropdown.Item>EEIM</Dropdown.Item>
              <Dropdown.Item>PQIF</Dropdown.Item>
            </Dropdown>

            {/* Cards */}
            {/* <div className="grid grid-cols-12 gap-6">
              <Button
                color="blue"
                size="sm"
                // disabled={isFirstStep}
                onClick={()=> getNotifs()}
              >
                {!traitement && <FilePen />}
hello
                <MoveLeft />
              </Button>
            </div> */}
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
};

export default HistoriqueNotifications;
