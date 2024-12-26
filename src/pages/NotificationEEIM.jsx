import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import FormInfoPatient from "../components/FormInfoPatient";
import { Step, Stepper, Typography } from "@material-tailwind/react";
import { Button, Modal } from "flowbite-react";
import {
  CircleAlert,
  Info,
  MoveLeft,
  MoveRight,
  PillBottle,
  Telescope,
} from "lucide-react";
import axios from "axios";

import FormIncident from "../components/FormIncident";
import FormChoixPS from "../components/FormChoixPS";

import { useSelector, useDispatch } from "react-redux";
import { useAuthProvider } from "../utils/AuthContext";

const NotificationEEIM = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const [openModal, setOpenModal] = useState(true);
  const [errors, setErrors] = useState({});

 



  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const { currentUser, changeCurrentUser } = useAuthProvider();


  const [notificationData, setNotificationData] = useState({
    type_notification: "notification_eeim",
    numero_dossier_patient: "",
    prenom_initiale: "",
    nom_initiale: "",
    adresse_patient: "",
    tel_patient: "",
    date_naissance_patient: "",
    sexe: "",
    antecedentsMedicaux_facteursRisques_facteursAssocies: "",
    patiente_enceinte: false,
    age_gestationnel: null,
    readministration: null,
    reapparition_apres_readministration: null,
    traitement_correcteur: null,
    text_traitement_correcteur: null,
    suivi_patient: "",
    evolution_situation_patient: "",
    description_evenement: "",
    date_apparition_evenement: "",
    date_disparition_evenement: "",
    motif_prise_produits_sante: "",
    infos_produits_santes: [],
  });

  // useEffect(() => {
  //   console.log(notificationData);
  // });

  // useEffect(() => {
  //   // console.log(notificationData.infos_produits_santes);
  //   let arr= notificationData.infos_produits_santes.filter((produit)=>{

  //     return produit.type_produit==="medicament"

  //   })

  //   console.log(arr);
    


  // });

  const change = (e) => {
    // console.log(e.target.name,e.target.value);

    setNotificationData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const notifier = () => {
    // console.log('hello');

    axios
      .post("/api/notification", notificationData, {
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${currentUser.token}`,
          // application/json;
        },
      })
      .then(function (response) {
        // setTraitement((value) => !value);

        if (response.statusText === "OK") {

          setErrors({})
          // console.log(response.statusText==="OK");
          setOpenModal(true);

          setNotificationData({
            type_notification: "notification_eeim",
            numero_dossier_patient: "",
            prenom_initiale: "",
            nom_initiale: "",
            adresse_patient: "",
            tel_patient: "",
            date_naissance_patient: "",
            sexe: "",
            antecedentsMedicaux_facteursRisques_facteursAssocies: "",
            patiente_enceinte: false,
            age_gestationnel: null,
            readministration: null,
            reapparition_apres_readministration: null,
            traitement_correcteur: null,
            text_traitement_correcteur: null,
            suivi_patient: "",
            evolution_situation_patient: "",
            description_evenement: "",
            date_apparition_evenement: "",
            date_disparition_evenement: "",
            motif_prise_produits_sante: "",
            infos_produits_santes: [],
          });

        }
        setActiveStep(0);

        // setTimeout(() => {
        //   navigate("/");
        // }, 2500);
      })
      .catch(function (error) {
        
        const responseErrors = error.response.data.errors;
        setErrors(responseErrors)


      });
  };

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
                  Notification eeim
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
              <section className="   w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                <div className="w-3/5 mx-auto mb-20  ">
                  <Stepper
                    activeStep={activeStep}
                    isLastStep={(value) => setIsLastStep(value)}
                    isFirstStep={(value) => setIsFirstStep(value)}
                  >
                    <Step className="">
                      <Telescope />

                      <div className="absolute -bottom-9 w-max text-center  ">
                        {/* <Badge placement="top-end"> */}
                        <Typography
                          variant="h6"
                          color={activeStep === 0 ? "light-blue" : "blue-gray"}
                        >
                          Info patient
                        </Typography>
                        {/* </Badge> */}
                      </div>
                    </Step>
                    <Step className="">
                      <PillBottle />
                      <div className="absolute -bottom-9 w-max text-center">
                        <Typography
                          variant="h6"
                          color={activeStep === 1 ? "light-blue" : "blue-gray"}
                        >
                          Produit(s) de santé
                        </Typography>
                      </div>
                    </Step>
                    <Step className="">
                      <CircleAlert />
                      <div className="absolute -bottom-9 w-max text-center">
                        <Typography
                          variant="h6"
                          color={activeStep === 2 ? "light-blue" : "blue-gray"}
                        >
                          Incident
                        </Typography>
                      </div>
                    </Step>
                  </Stepper>
                </div>

                {activeStep === 0 && (
                  <FormInfoPatient
                    notificationData={notificationData}
                    errors={errors}
                    change={change}
                  />
                )}

                {activeStep === 1 && (
                  <FormChoixPS
                    change={change}
                    notificationData={notificationData}
                    errors={errors}
                    setNotificationData={setNotificationData}
                  />
                )}

                

                {activeStep === 2 && (
                  <FormIncident
                    notificationData={notificationData}
                    errors={errors}
                    change={change}
                  />
                )}

                {/*  */}

                <div className="my-10 w-3/5 mx-auto  flex justify-between">
                  <Button
                    color="blue"
                    size="sm"
                    disabled={isFirstStep}
                    onClick={handlePrev}
                  >
                    {/* {!traitement && <FilePen />} */}

                    <MoveLeft />
                  </Button>

                  {isLastStep ? (
                    <Button
                      color="blue"
                      size="sm"
                      // isProcessing={traitement}
                      onClick={() => notifier()}
                    >
                      {/* {!traitement && <FilePen />} */}

                      <span className="ml-1">Notiier</span>
                    </Button>
                  ) : (
                    <Button
                      color="blue"
                      size="sm"
                      // isProcessing={traitement}
                      onClick={handleNext}
                    >
                      <MoveRight />
                    </Button>
                  )}
                </div>

                <Modal
                  show={openModal}
                  size="md"
                  onClose={() => setOpenModal(false)}
                  popup
                >
                  <Modal.Header />
                  <Modal.Body>
                    <div className="text-center">
                      <Info className="mx-auto mb-4 h-14 w-14 " />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Notification faite avec success
                      </h3>
                      {/* <div className="flex justify-center gap-4">
                        <Button
                          color="failure"
                          onClick={() => setOpenModal(false)}
                        >
                          {"Yes, I'm sure"}
                        </Button>
                        <Button
                          color="gray"
                          onClick={() => setOpenModal(false)}
                        >
                          No, cancel
                        </Button>
                      </div> */}
                    </div>
                  </Modal.Body>
                </Modal>
              </section>

             
            </div>
          </div>
        </main>

       
      </div>
    </div>
  );
};

export default NotificationEEIM;
