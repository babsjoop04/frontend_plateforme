import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import { Button, Modal, Table } from "flowbite-react";
import axios from "axios";
import { useAuthProvider } from "../utils/AuthContext";

const GestionUtilisateurs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [utilisateurs, setUtilisateurs] = useState({
    consommateur: [],
    professionnel_sante: [],
    responsable_organisme_reglementation: [],
    PRV_exploitant: [],
  });

  const [openModal, setOpenModal] = useState(false);
  const [emailSelected, setEmailSelected] = useState("");
  const [statutCompte, setStatutCompte] = useState("");

  const { currentUser, changeCurrentUser } = useAuthProvider();


  const getAccount = () => {
    axios
      .get(
        "/api/utilisateurs",
        
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${currentUser.token}`,

            // application/json;
          },
        }
      )
      .then(function (response) {
        // console.log(response.data);

        let newUtilisateurs = {
          consommateur: [],
          professionnel_sante: [],
          responsable_organisme_reglementation: [],
          PRV_exploitant: [],
        };

        for (const key in response.data) {
          // console.log(key);
          newUtilisateurs[key] = response.data[key];
        }

        // console.log(newUtilisateurs);

        setUtilisateurs(newUtilisateurs);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    // axios
    //   .get(
    //     "/api/utilisateurs",
    //     {},
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         // application/json;
    //       },
    //     }
    //   )
    //   .then(function (response) {
    //     // console.log(response.data);

    //     setUtilisateurs(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    getAccount();
  }, []);

  const gestionCompte = (decision) => {
    setOpenModal(false);

    axios
      .post(
        "/api/utilisateur/gestion",
        {
          email_utilisateur: emailSelected,
          decision: decision,
        },
        {
          headers: {
            "Content-Type": "application/json",
            // application/json;
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        getAccount();

        // setUtilisateurs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(emailSelected, decision);
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
                  Gestion des utilisateurs
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
                <div className="col-span-full xl:col-span-6  shadow-sm rounded-xl">
                  <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                    <h2 className="font-semibold ">Consommateurs</h2>
                  </header>
                  <div className="p-3 overflow-x-auto ">
                  {
                    [...utilisateurs.consommateur].length!==0 && 
                    <Table hoverable>
                      <Table.Head>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>

                        <Table.HeadCell>Nom</Table.HeadCell>
                        <Table.HeadCell>prenom</Table.HeadCell>
                        <Table.HeadCell>sexe</Table.HeadCell>
                        <Table.HeadCell>adresse</Table.HeadCell>
                        <Table.HeadCell>telephone</Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap">
                          Date de naissance
                        </Table.HeadCell>
                        <Table.HeadCell>profession</Table.HeadCell>

                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {[...utilisateurs.consommateur].map(
                          ({
                            id,
                            role_utilisateur,
                            statut,
                            nom,
                            prenom,
                            sexe,
                            adresse,
                            telephone,
                            dateNaissance,
                            profession,

                            email,
                          }) => {
                            return (
                              <Table.Row
                                key={id}
                                className=" dark:border-gray-700 "
                              >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {role_utilisateur}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {statut}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {nom}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {prenom}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {sexe}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {adresse}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {telephone}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {dateNaissance}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {profession}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {email}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  <Button
                                    onClick={() => {
                                      // gestionCompte(email,"desactivation_compte")
                                      setOpenModal(true);
                                      setEmailSelected(email);
                                      setStatutCompte(statut);
                                    }}
                                    color={
                                      statut === "activé" ? "failure" : "blue"
                                    }
                                  >
                                    {statut === "activé"
                                      ? "désactiver"
                                      : "activer"}
                                  </Button>
                                  <Modal
                                    key={id}
                                    show={openModal}
                                    onClose={() => setOpenModal(false)}
                                  >
                                    <Modal.Header>Avertissement</Modal.Header>
                                    <Modal.Body>
                                      <div className="space-y-6">
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                          Vous êtes sur le point de désactiver
                                          le compte de cet utilisateur.
                                          L'utilisateur ne pourra plus se
                                          connecter à son compte et ses accès
                                          aux services seront immédiatement
                                          suspendus Les données du compte seront
                                          conservées conformément à notre
                                          politique de rétention et un email de
                                          notification sera automatiquement
                                          envoyé à l'utilisateur. Cette action
                                          peut être annulée ultérieurement et
                                          toutes les sessions actives de
                                          l'utilisateur seront déconnectées
                                        </p>
                                      </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      {statutCompte === "activé" ? (
                                        <Button
                                          onClick={() =>
                                            // setOpenModal(false)

                                            gestionCompte(
                                              "desactivation_compte"
                                            )
                                          }
                                          color="failure"
                                        >
                                          désactiver
                                        </Button>
                                      ) : (
                                        <Button
                                          onClick={() =>
                                            gestionCompte("reactivation_compte")
                                          }
                                          color="blue"
                                        >
                                          activer
                                        </Button>
                                      )}

                                      <Button
                                        color="gray"
                                        onClick={() => {
                                          setOpenModal(false);
                                          setEmailSelected("");
                                          setStatutCompte("");
                                        }}
                                      >
                                        Annuler
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Table.Cell>
                              </Table.Row>
                            );
                          }
                        )}
                      </Table.Body>
                    </Table>
                  }
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-3 gap-6  w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                <div className="col-span-full xl:col-span-6  shadow-sm rounded-xl">
                  <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                    <h2 className="font-semibold ">Professionnels de la santé</h2>
                  </header>
                  <div className="p-3 overflow-x-auto ">
                  {
                    [...utilisateurs.professionnel_sante].length!==0 &&
                    <Table hoverable>
                      <Table.Head>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>

                        <Table.HeadCell>Nom</Table.HeadCell>
                        <Table.HeadCell>prenom</Table.HeadCell>
                        <Table.HeadCell>sexe</Table.HeadCell>
                        <Table.HeadCell>adresse</Table.HeadCell>
                        <Table.HeadCell>telephone</Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap">
                          Date de naissance
                        </Table.HeadCell>
                        <Table.HeadCell>profession</Table.HeadCell>

                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {[...utilisateurs.professionnel_sante].map(
                          ({
                            id,
                            role_utilisateur,
                            statut,
                            nom,
                            prenom,
                            sexe,
                            adresse,
                            telephone,
                            dateNaissance,
                            profession,

                            email,
                          }) => {
                            return (
                              <Table.Row
                                key={id}
                                className=" dark:border-gray-700 "
                              >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {role_utilisateur}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {statut}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {nom}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {prenom}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {sexe}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {adresse}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {telephone}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {dateNaissance}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {profession}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {email}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  <Button
                                    onClick={() => {
                                      // gestionCompte(email,"desactivation_compte")
                                      setOpenModal(true);
                                      setEmailSelected(email);
                                      setStatutCompte(statut);
                                    }}
                                    color={
                                      statut === "activé" ? "failure" : "blue"
                                    }
                                  >
                                    {statut === "activé"
                                      ? "désactiver"
                                      : "activer"}
                                  </Button>
                                  <Modal
                                    key={id}
                                    show={openModal}
                                    onClose={() => setOpenModal(false)}
                                  >
                                    <Modal.Header>Avertissement</Modal.Header>
                                    <Modal.Body>
                                      <div className="space-y-6">
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                          Vous êtes sur le point de désactiver
                                          le compte de cet utilisateur.
                                          L'utilisateur ne pourra plus se
                                          connecter à son compte et ses accès
                                          aux services seront immédiatement
                                          suspendus Les données du compte seront
                                          conservées conformément à notre
                                          politique de rétention et un email de
                                          notification sera automatiquement
                                          envoyé à l'utilisateur. Cette action
                                          peut être annulée ultérieurement et
                                          toutes les sessions actives de
                                          l'utilisateur seront déconnectées
                                        </p>
                                      </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      {statutCompte === "activé" ? (
                                        <Button
                                          onClick={() =>
                                            // setOpenModal(false)

                                            gestionCompte(
                                              "desactivation_compte"
                                            )
                                          }
                                          color="failure"
                                        >
                                          désactiver
                                        </Button>
                                      ) : (
                                        <Button
                                          onClick={() =>
                                            gestionCompte("reactivation_compte")
                                          }
                                          color="blue"
                                        >
                                          activer
                                        </Button>
                                      )}

                                      <Button
                                        color="gray"
                                        onClick={() => {
                                          setOpenModal(false);
                                          setEmailSelected("");
                                          setStatutCompte("");
                                        }}
                                      >
                                        Annuler
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Table.Cell>
                              </Table.Row>
                            );
                          }
                        )}
                      </Table.Body>
                    </Table>
                  }
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-3 gap-6  w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                <div className="col-span-full xl:col-span-6  shadow-sm rounded-xl">
                  <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                    <h2 className="font-semibold ">PRV exploitant</h2>
                  </header>
                  <div className="p-3 overflow-x-auto ">
                  {
                    [...utilisateurs.PRV_exploitant].length!==0 &&
                    <Table hoverable>
                      <Table.Head>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>

                        <Table.HeadCell>Nom</Table.HeadCell>
                        <Table.HeadCell>prenom</Table.HeadCell>
                        <Table.HeadCell>sexe</Table.HeadCell>
                        <Table.HeadCell>adresse</Table.HeadCell>
                        <Table.HeadCell>telephone</Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap">
                          Date de naissance
                        </Table.HeadCell>
                        <Table.HeadCell>profession</Table.HeadCell>

                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {[...utilisateurs.PRV_exploitant].map(
                          ({
                            id,
                            role_utilisateur,
                            statut,
                            nom,
                            prenom,
                            sexe,
                            adresse,
                            telephone,
                            dateNaissance,
                            profession,

                            email,
                          }) => {
                            return (
                              <Table.Row
                                key={id}
                                className=" dark:border-gray-700 "
                              >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {role_utilisateur}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {statut}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {nom}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {prenom}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {sexe}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {adresse}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {telephone}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {dateNaissance}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {profession}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {email}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  <Button
                                    onClick={() => {
                                      // gestionCompte(email,"desactivation_compte")
                                      setOpenModal(true);
                                      setEmailSelected(email);
                                      setStatutCompte(statut);
                                    }}
                                    color={
                                      statut === "activé" ? "failure" : "blue"
                                    }
                                  >
                                    {statut === "activé"
                                      ? "désactiver"
                                      : "activer"}
                                  </Button>
                                  <Modal
                                    key={id}
                                    show={openModal}
                                    onClose={() => setOpenModal(false)}
                                  >
                                    <Modal.Header>Avertissement</Modal.Header>
                                    <Modal.Body>
                                      <div className="space-y-6">
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                          Vous êtes sur le point de désactiver
                                          le compte de cet utilisateur.
                                          L'utilisateur ne pourra plus se
                                          connecter à son compte et ses accès
                                          aux services seront immédiatement
                                          suspendus Les données du compte seront
                                          conservées conformément à notre
                                          politique de rétention et un email de
                                          notification sera automatiquement
                                          envoyé à l'utilisateur. Cette action
                                          peut être annulée ultérieurement et
                                          toutes les sessions actives de
                                          l'utilisateur seront déconnectées
                                        </p>
                                      </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      {statutCompte === "activé" ? (
                                        <Button
                                          onClick={() =>
                                            // setOpenModal(false)

                                            gestionCompte(
                                              "desactivation_compte"
                                            )
                                          }
                                          color="failure"
                                        >
                                          désactiver
                                        </Button>
                                      ) : (
                                        <Button
                                          onClick={() =>
                                            gestionCompte("reactivation_compte")
                                          }
                                          color="blue"
                                        >
                                          activer
                                        </Button>
                                      )}

                                      <Button
                                        color="gray"
                                        onClick={() => {
                                          setOpenModal(false);
                                          setEmailSelected("");
                                          setStatutCompte("");
                                        }}
                                      >
                                        Annuler
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Table.Cell>
                              </Table.Row>
                            );
                          }
                        )}
                      </Table.Body>
                    </Table>
                  }
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-3 gap-6  w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                <div className="col-span-full xl:col-span-6  shadow-sm rounded-xl">
                  <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                    <h2 className="font-semibold ">Responsable d'organisme de réglementation</h2>
                  </header>
                  <div className="p-3 overflow-x-auto ">
                  {
                    [...utilisateurs.responsable_organisme_reglementation].length!==0 &&
                    <Table hoverable>
                      <Table.Head>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>

                        <Table.HeadCell>Nom</Table.HeadCell>
                        <Table.HeadCell>prenom</Table.HeadCell>
                        <Table.HeadCell>sexe</Table.HeadCell>
                        <Table.HeadCell>adresse</Table.HeadCell>
                        <Table.HeadCell>telephone</Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap">
                          Date de naissance
                        </Table.HeadCell>
                        <Table.HeadCell>profession</Table.HeadCell>

                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Actions</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        {[...utilisateurs.responsable_organisme_reglementation].map(
                          ({
                            id,
                            role_utilisateur,
                            statut,
                            nom,
                            prenom,
                            sexe,
                            adresse,
                            telephone,
                            dateNaissance,
                            profession,

                            email,
                          }) => {
                            return (
                              <Table.Row
                                key={id}
                                className=" dark:border-gray-700 "
                              >
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {role_utilisateur}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {statut}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {nom}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {prenom}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {sexe}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {adresse}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {telephone}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {dateNaissance}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {profession}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  {email}
                                </Table.Cell>

                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                  <Button
                                    onClick={() => {
                                      // gestionCompte(email,"desactivation_compte")
                                      setOpenModal(true);
                                      setEmailSelected(email);
                                      setStatutCompte(statut);
                                    }}
                                    color={
                                      statut === "activé" ? "failure" : "blue"
                                    }
                                  >
                                    {statut === "activé"
                                      ? "désactiver"
                                      : "activer"}
                                  </Button>
                                  <Modal
                                    key={id}
                                    show={openModal}
                                    onClose={() => setOpenModal(false)}
                                  >
                                    <Modal.Header>Avertissement</Modal.Header>
                                    <Modal.Body>
                                      <div className="space-y-6">
                                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                          Vous êtes sur le point de désactiver
                                          le compte de cet utilisateur.
                                          L'utilisateur ne pourra plus se
                                          connecter à son compte et ses accès
                                          aux services seront immédiatement
                                          suspendus Les données du compte seront
                                          conservées conformément à notre
                                          politique de rétention et un email de
                                          notification sera automatiquement
                                          envoyé à l'utilisateur. Cette action
                                          peut être annulée ultérieurement et
                                          toutes les sessions actives de
                                          l'utilisateur seront déconnectées
                                        </p>
                                      </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      {statutCompte === "activé" ? (
                                        <Button
                                          onClick={() =>
                                            // setOpenModal(false)

                                            gestionCompte(
                                              "desactivation_compte"
                                            )
                                          }
                                          color="failure"
                                        >
                                          désactiver
                                        </Button>
                                      ) : (
                                        <Button
                                          onClick={() =>
                                            gestionCompte("reactivation_compte")
                                          }
                                          color="blue"
                                        >
                                          activer
                                        </Button>
                                      )}

                                      <Button
                                        color="gray"
                                        onClick={() => {
                                          setOpenModal(false);
                                          setEmailSelected("");
                                          setStatutCompte("");
                                        }}
                                      >
                                        Annuler
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
                                </Table.Cell>
                              </Table.Row>
                            );
                          }
                        )}
                      </Table.Body>
                    </Table>
                  }
                  </div>
                </div>
              </section>

            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
};

export default GestionUtilisateurs;
