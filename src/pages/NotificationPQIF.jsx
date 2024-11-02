import { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import { Step, Stepper, Typography } from "@material-tailwind/react";
import { Button } from "flowbite-react";

const NotificationPQIF = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

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
                  Notification suspition de defaut de qualité
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
              <section className=" flex flex-col  gap-6  w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                <div className="w-3/5 mx-auto mb-20  ">
                  <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                  >
                    <Step className="">
                      {/* <UserRoundCog /> */}

                      <div className="absolute -bottom-9 w-max text-center  ">
                        {/* <Badge placement="top-end"> */}
                        <Typography
                          variant="h6"
                          color={activeStep === 0 ? "light-blue" : "white"}
                        >
                          Constatateur
                        </Typography>
                        {/* </Badge> */}
                      </div>
                    </Step>
                    <Step className="">
                      {/* <User /> */}
                      <div className="absolute -bottom-9 w-max text-center">
                        <Typography
                          variant="h6"
                          color={activeStep === 1 ? "light-blue" : "white"}
                        >
                          Incident
                        </Typography>
                      </div>
                    </Step>
                    <Step className="">
                      {/* <AtSign /> */}
                      <div className="absolute -bottom-9 w-max text-center">
                        <Typography
                          variant="h6"
                          color={activeStep === 2 ? "light-blue" : "white"}
                        >
                          Produit de santé
                        </Typography>
                      </div>
                    </Step>
                    <Step>
                      {/* <BriefcaseBusiness /> */}
                      <div className="absolute -bottom-9 w-max text-center">
                        <Typography
                          variant="h6"
                          color={activeStep === 3 ? "light-blue" : "white"}
                        >
                          Incident
                        </Typography>
                      </div>
                    </Step>
                  </Stepper>
                </div>

                <div className="my-10 w-4/5 mx-auto  flex justify-between">
                  <Button
                    color="blue"
                    size="sm"
                    disabled={isFirstStep}
                    onClick={handlePrev}
                  >
                    {/* {!traitement && <FilePen />} */}

                    {/* <MoveLeft /> */}
                  </Button>

                  {isLastStep ? (
                    <Button
                      color="blue"
                      size="sm"
                      // isProcessing={traitement}
                      onClick={(e) => submit(e)}
                    >
                      {/* {!traitement && <FilePen />} */}

                      <span className="ml-1">Creer</span>
                    </Button>
                  ) : (
                    <Button
                      color="blue"
                      size="sm"
                      // isProcessing={traitement}
                      onClick={handleNext}
                    >
                      {/* <MoveRight /> */}
                    </Button>
                  )}
                </div>
              </section>

              <section className=" w-full px-10 py-10 mx-auto rounded-xl bg-white dark:bg-gray-800 "></section>
            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
};

export default NotificationPQIF;
