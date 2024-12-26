import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";

import imgMAPI from "@/images/mapi.png";
import imgEEIM from "@/images/eeim.png";
import imgPQIF from "@/images/pqif.png";

// import axios from "axios";

// import { useAuthProvider } from "../utils/AuthContext";
import axios from "axios";
import { Card, Button, Dropdown, List, Modal, Spinner } from "flowbite-react";
//
import { useAuthProvider } from "../utils/AuthContext";
import { CircleAlert, Plus } from "lucide-react";
// import {  } from "@material-tailwind/react";
import {
  Card as CardM,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button as ButtonM,
  Tooltip,
  IconButton,
  Carousel,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
// import { Carousel } from "@material-tailwind/react";

const HistoriqueNotifications = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModalTraitement, setOpenModalTraitement] = useState(false);
  const [openModalMessage, setOpenModalMessage] = useState(false);
  const [traitement, setTraitement] = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [selectNotif, setSelectNotif] = useState({ produits: [] });

  const { currentUser, changeCurrentUser } = useAuthProvider();

  useEffect(() => {
    // console.log(currentUser.token);
    getNotifs();
  }, []);

  const getNotifs = () => {
    axios
      .get("/api/notification", {
        // params: {
        //   type_notification: type_notification,
        // },
        headers: {
          "Content-Type": "application/json",

          Authorization: `Bearer ${currentUser.token}`,
          // application/json;
        },
      })
      .then(function (response) {
        // console.log(response);
        setNotifications(response.data);

        // setTimeout(() => {
        //   navigate("/");
        // }, 2500);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const selectionNotif = (id) => {
    const notif = [...notifications].find((notif) => {
      return notif.id === id;
    });

    setSelectNotif(notif);
    setOpenModal(true);
    // console.log(notif);

    // console.log([...notif.produits][0]);
  };

  const annulerSelectionNotif = () => {
    setOpenModal(false);
    setSelectNotif({ produits: [] });
  };

  const creerTraitement = (id, necessite_imputabilite) => {
    setOpenModalTraitement(false);
    setTraitement(true);
    axios
      .post(
        "/api/traitement",
        {
          notification_id: id,
          statut_traitement: "debut",
          necessite_imputabilite: necessite_imputabilite,
          // ?0:1
        },
        {
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${currentUser.token}`,
            // application/json;
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        annulerSelectionNotif();
        setOpenModalMessage(true);
        getNotifs();

        setTimeout(() => {
          setTraitement(false);
        }, 1500);
        // setNotifications(response.data);

        // setTimeout(() => {
        //   navigate("/");
        // }, 2500);
      })
      .catch(function (error) {
        console.log(error);
      });
    // annulerSelectionNotif();
    // console.log(id);
  };

  // useEffect(() => {
  //   console.log(selectNotif);
  // });

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
                  Historique de notification
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

            <section className="grid grid-cols-3 gap-6 w-full px-10 py-10 mx-auto rounded-xl bg-white dark:bg-gray-800 ">
              {[...notifications].length !== 0 ? (
                [...notifications].map(
                  ({ id, type_notification, created_at, conditionnement }) => {
                    const time = new Date(created_at).toLocaleString("fr-FR");

                    let img = null;
                    switch (type_notification) {
                      case "notification_mapi":
                        img = imgMAPI;
                        break;
                      case "notification_eeim":
                        img = imgEEIM;
                        break;
                      case "notification_pqif":
                        img = imgPQIF;
                        break;
                    }
                    return (
                      <Card
                        key={id}
                        className="max-w-sm  "
                        renderImage={() => (
                          <img
                            // width={150}
                            // height={15}
                            // className="h-3/5"
                            src={img}
                            alt="image 1"
                          />
                        )}
                      >
                        <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                          {type_notification === "notification_mapi" &&
                            "Manifestation post vaccinale indésirable"}
                          {type_notification === "notification_eeim" &&
                            "Effet/evenement indesirable de medicament"}
                          {type_notification === "notification_pqfi" &&
                            "Suspicion de defaut de qualité"}
                        </h5>

                        <span className=" text-xl font-medium  text-gray-700 dark:text-gray-400">
                          <List>
                            <List.Item>Fait le {time}</List.Item>
                          </List>
                        </span>
                        <div className="mt-4  ">
                          <Button
                            color="blue"
                            // onClick={() => setOpenModal(true)}
                            onClick={() => selectionNotif(id)}
                          >
                            Voir plus
                            <Plus className="ml-2" />
                          </Button>
                        </div>
                      </Card>
                    );
                  }
                )
              ) : (
                <p className="col-span-3 text-xl my-4">
                  Vous n'avez pas encore fait de notification
                </p>
              )}
            </section>
            {/* )} */}
          </div>
        </main>

        <Modal
          show={openModal}
          size="7xl"
          // position={modalPlacement}
          onClose={() => {
            annulerSelectionNotif();
            // setProduitSelectionne({});
          }}
        >
          <Modal.Header>Details de la notification</Modal.Header>
          <Modal.Body>
            {/* <div className=""> */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <h5 className="text-2xl md:text-2xl pb-3 text-gray-800 dark:text-gray-100 font-bold">
                    Produit de santé
                  </h5>
                  <div className=" rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    {/* h-[460px] */}
                    <Carousel className="rounded-xl col-span-2">
                      {selectNotif.produits.map((produit, index) => {
                        return (
                          <div className="relative h-full w-full" key={index}>
                            <img
                              src={imgEEIM}
                              // "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                              alt="image 1"
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/55">
                              <div className="w-3/4 text-center md:w-2/4">
                                <Typography
                                  variant="h1"
                                  color="white"
                                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                >
                                  {produit.produit_sante.nom_produit}
                                </Typography>
                                <div className="grid grid-cols-2 gap-3 w-full text-gray-100  mx-auto">
                                  <div className=" ">
                                    <span className="font-bold ">
                                      Numero de lot :{" "}
                                    </span>
                                    {produit.numero_lot}
                                  </div>
                                  <div className=" ">
                                    <span className="font-bold ">
                                      Provenance :{" "}
                                    </span>
                                    {produit.provenance}
                                  </div>
                                  <div className=" ">
                                    <span className="font-bold ">
                                      Date de peremption :{" "}
                                    </span>
                                    {produit.date_peremption}
                                  </div>
                                  {produit.produit_sante.type_produit !==
                                    "vaccin" && (
                                    <div className=" ">
                                      <span className="font-bold ">
                                        Posologie :{" "}
                                      </span>
                                      {produit.posologie}
                                    </div>
                                  )}
                                  <div className=" ">
                                    <span className="font-bold ">
                                      Date de debut de prise du produit :{" "}
                                    </span>
                                    {produit.date_debut_prise}
                                  </div>
                                  <div className=" ">
                                    <span className="font-bold ">
                                      Date de fin de prise :{" "}
                                    </span>
                                    {produit.date_fin_prise}
                                  </div>

                                  {produit.produit_sante.type_produit ===
                                    "autre" && (
                                    <div className=" ">
                                      <span className="font-bold ">
                                        Date de prise :{" "}
                                      </span>
                                      {produit.date_prise}
                                    </div>
                                  )}

                                  {produit.produit_sante.type_produit ===
                                    "vaccin" && (
                                    <>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Date d'ouverture du flacon :{" "}
                                        </span>
                                        {produit.date_ouverture_flacon}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Date de la vaccination :{" "}
                                        </span>
                                        {produit.date_vaccination}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Site d'administration :{" "}
                                        </span>
                                        {produit.site_administration}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Nombre de contact avec vaccin :{" "}
                                        </span>
                                        {produit.nombre_contact_vaccin}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Nom du solvant :{" "}
                                        </span>
                                        {produit.nom_solvant}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          numero de lot du solvant :{" "}
                                        </span>
                                        {produit.numero_lot_solvant}
                                      </div>
                                      <div className=" ">
                                        <span className="font-bold ">
                                          Date de peremption du solvant :{" "}
                                        </span>
                                        {produit.date_peremption_solvant}
                                      </div>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </Carousel>
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {/* <h5 className="text-2xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold"> */}
                    {selectNotif.type_notification !== "notification_pqif"
                      ? "Info sur le patient"
                      : "Info sur le constatateur"}
                    {/* </h5> */}
                  </h2>
                  <div className="mb-4 grid grid-cols-2 gap-5  w-full  py-5 mx-auto text-gray-700 dark:text-gray-300">
                    {selectNotif.type_notification !== "notification_pqif" ? (
                      <>
                        <div className=" ">
                          <span className="font-bold">Numero dossier : </span>
                          {selectNotif.numero_dossier_patient}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Prenom ou initial :
                          </span>
                          {selectNotif.prenom_initiale}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Nom ou initial :</span>
                          {selectNotif.nom_initiale}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Adresse :</span>
                          {selectNotif.adresse_patient}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Telephone :</span>
                          {selectNotif.tel_patient}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Date de naissance :{" "}
                          </span>
                          {selectNotif.date_naissance_patient}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Sexe :</span>
                          {selectNotif.sexe}
                        </div>
                        <div className=" col-span-2">
                          <span className=" font-bold ">
                            Antecedents medicaux/Facteurs de risque/Facteurs
                            associés :{" "}
                          </span>
                          {
                            selectNotif.antecedentsMedicaux_facteursRisques_facteursAssocies
                          }
                        </div>
                      </>
                    ) : (
                      <>
                        <div className=" ">
                          <span className="font-bold">Numero dossier : </span>
                          {selectNotif.numero_dossier_patient}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Prenom :</span>
                          {selectNotif.prenom_constatateur}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Nom :</span>
                          {selectNotif.nom_constatateur}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Adresse :</span>
                          {selectNotif.adresse_constatateur}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Telephone :</span>
                          {selectNotif.tel_constatateur}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Date de signalement de la suspicion de defaut de
                            qualité :{" "}
                          </span>
                          {selectNotif.date_signalement_suspicion_pqif}
                        </div>
                      </>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {/* <h5 className="text-2xl md:text-2xl text-gray-800 dark:text-gray-100 font-bold"> */}
                    Evenement / Effet
                    {/* </h5> */}
                  </h2>
                  <div className="mb-4 grid grid-cols-2 gap-5  w-full  py-5 mx-auto ">
                    {selectNotif.type_notification !== "notification_pqif" ? (
                      <>
                        <div className=" ">
                          <span className="font-bold ">
                            Description de lévenement :{" "}
                          </span>
                          {selectNotif.description_evenement}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Date d'apparition de l'evenement :{" "}
                          </span>
                          {selectNotif.date_apparition_evenement}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Date de disparition de l'evenement :{" "}
                          </span>
                          {selectNotif.date_disparition_evenement}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Réadministration du produit :{" "}
                          </span>
                          {selectNotif.readministration == "1" ? "Oui" : "Non"}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Réapparition de l'évenement apres réadminstration:{" "}
                          </span>
                          {selectNotif.reapparition_apres_readministration ==
                          "1"
                            ? "Oui"
                            : "Non"}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Est ce qu'un traitement correcteur a été appliqué ?
                            :{" "}
                          </span>
                          {selectNotif.traitement_correcteur == "1"
                            ? "Oui"
                            : "Non"}
                        </div>
                        {selectNotif.traitement_correcteur == "1" && (
                          <div className=" ">
                            <span className="font-bold ">
                              Traitement correcteur :{" "}
                            </span>
                            {selectNotif.text_traitement_correcteur}
                          </div>
                        )}
                        <div className=" ">
                          <span className="font-bold ">Suivi patient :</span>
                          {selectNotif.suivi_patient}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Evolution de la situation du patient :{" "}
                          </span>
                          {selectNotif.evolution_situation_patient}
                        </div>

                        <div className=" ">
                          <span className="font-bold ">
                            Les produits ont été prescrits pour :{" "}
                          </span>
                          {selectNotif.motif_prise_produits_sante}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className=" ">
                          <span className="font-bold ">
                            Date de survenue de l'incident :{" "}
                          </span>
                          {selectNotif.date_survenue_incident}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Moment de detection de l'incident :{" "}
                          </span>
                          {selectNotif.moment_detection_incident}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">Mesure prise : </span>
                          {selectNotif.mesure_prise}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Nature de l'incident :{" "}
                          </span>
                          {selectNotif.nature_incident}
                        </div>

                        <div className=" ">
                          <span className="font-bold ">
                            Circonstances de l'incident :{" "}
                          </span>
                          {selectNotif.circonstances_incident}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Conséquence(s) clinique(s) sur le patient et/ou
                            l’utilisateur:{" "}
                          </span>
                          {selectNotif.consequence_clinique == "1"
                            ? "Oui"
                            : "Non"}
                        </div>
                        {selectNotif.consequence_clinique == "1" && (
                          <div className=" ">
                            <span className="font-bold ">
                              Description de l'évenement :{" "}
                            </span>
                            {selectNotif.description_evenement}
                          </div>
                        )}
                        <div className=" ">
                          <span className="font-bold ">
                            Date d'apparition de l'evenement :{" "}
                          </span>
                          {selectNotif.date_apparition_evenement}
                        </div>
                        <div className=" ">
                          <span className="font-bold ">
                            Date de disparition de l'evenement :{" "}
                          </span>
                          {selectNotif.date_disparition_evenement}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Modal.Body>
          
          {currentUser.role_utilisateur ===
            "responsable_organisme_reglementation" && (
            <Modal.Footer className="flex justify-end	">
              {/* <Button.Group> */}
              <Button color="blue" onClick={() => setOpenModalTraitement(true)}>
                Commencer le traitement de la notification
              </Button>
              <Button color="red" onClick={() => annulerSelectionNotif()}>
                Fermer
              </Button>

              {/* </Button.Group> */}
            </Modal.Footer>
          )}
        </Modal>

        <Modal
          show={openModalTraitement}
          // size="7xl"
          size="md"
          // position={modalPlacement}
          onClose={() => {
            // annulerSelectionNotif();
            setOpenModalTraitement(false);
            // setProduitSelectionne({});
          }}
        >
          <Modal.Header>Creation de traitement</Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <CircleAlert className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Etes vous sur de vouloir creer ce traitement?
              </h3>

              {/* <Spinner aria-label="Default status example" className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"/> */}
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-center	">
            <Button
              color="blue"
              onClick={() =>
                creerTraitement(
                  selectNotif.id,
                  selectNotif.type_notification === "notification_pqif"
                )
              }
            >
              Creer traitement
            </Button>
            <Button color="red" onClick={() => setOpenModalTraitement(false)}>
              Annuler
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={openModalMessage}
          // size="7xl"
          size="md"
          // position={modalPlacement}
          onClose={() => {
            // annulerSelectionNotif();
            setOpenModalMessage(false);
            // setProduitSelectionne({});
          }}
        >
          <Modal.Header>Message</Modal.Header>
          <Modal.Body>
            <div className="text-center">
              {traitement ? (
                <Spinner
                  aria-label="Default status example"
                  className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
                />
              ) : (
                <div className="text-center">
                  <CircleAlert className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Traitement crée avec success. Rendez vous à la page "Mes
                    traitements en cours" pour mettre à jour le traitement
                  </p>
                </div>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-end	"></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default HistoriqueNotifications;
