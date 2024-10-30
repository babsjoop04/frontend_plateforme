import { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import { Button, Card, Dropdown } from "flowbite-react";

import imgDefaut from "@/images/defaut.png";
import { Search } from "lucide-react";

const Sinformer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
                  S'informer
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

            {/* Cards */}
            <div className="grid gap-6 text-gray-800 dark:text-gray-100">
              <section className="grid grid-cols-3 gap-6  w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                {/* <p className="text-xl md:text-2xl mb-6 text-gray-800 dark:text-gray-100 font-bold">
                  Formulaire de recherche
                </p> */}
                <div className="">
                  <label
                    htmlFor="nom_produit_sante"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nom du produit de sante
                  </label>
                  <input
                    type="text"
                    id="nom_produit_sante"
                    name="nom_produit_sante"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    // onChange={(e) => change(e)}
                    // defaultValue={userData.prenom}
                  />
                  {/* {errors.prenom !== "" && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.prenom}
              </Alert>
            </div>
          )} */}
                </div>
                <div className="  mt-8 ">
              <Button
                color="blue"
                size="sm"
                // disabled={isFirstStep}
                // onClick={handlePrev}
              >

                <Search className="mr-2" />
                Rechercher
              </Button>

              
            </div>
              </section>

              <section className=" w-full px-10 py-10 mx-auto rounded-xl bg-white dark:bg-gray-800 ">
                <Card className="max-w-sm">
                  <div className="flex justify-end px-4 pt-4">
                    {/* <Dropdown inline label="">
                      <Dropdown.Item>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Edit
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Export Data
                        </a>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </Dropdown.Item>
                    </Dropdown> */}
                  </div>
                  <div className="flex flex-col items-center pb-10">
                    <img
                      alt="Bonnie image"
                      // height="96"
                      src={imgDefaut}
                      width="96"
                      className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      Bonnie Green
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Visual Designer
                    </span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                      >
                        Add friend
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      >
                        Message
                      </a>
                    </div>
                  </div>
                </Card>
              </section>
            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
};

export default Sinformer;
