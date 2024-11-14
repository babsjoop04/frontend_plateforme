import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";

import { Alert, Table } from "flowbite-react";
import axios from "axios";
import { useAuthProvider } from "../utils/AuthContext";
import { User } from "lucide-react";

const DemandeInscription = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { currentUser, changeCurrentUser } = useAuthProvider();

  const [demandes, setDemandes] = useState({
    professionnel_sante: [],
    responsable_organisme_reglementation: [],
    PRV_exploitant: [],
  });

  useEffect(() => {
    axios
      .get("/api/utilisateur/demandes", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
          // application/json;
        },
      })
      .then(function (response) {
        // console.log(response.data.professionnel_sante);

        setDemandes({
          professionnel_sante: response.data.professionnel_sante || [],
          responsable_organisme_reglementation:
            response.data.responsable_organisme_reglementation || [],
          PRV_exploitant: response.data.PRV_exploitant || [],
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
                  Demande d'inscription
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
                    <h2 className="font-semibold ">
                      Personnes responsable de la vigilance
                    </h2>
                  </header>
                  <div className="p-3 overflow-x-auto">
                    {[...demandes.professionnel_sante].length !== 0 ? (
                      <Table hoverable>
                        <Table.Head>
                          <Table.HeadCell>Role</Table.HeadCell>
                          <Table.HeadCell>Nom</Table.HeadCell>
                          <Table.HeadCell>prenom</Table.HeadCell>
                          <Table.HeadCell>sexe</Table.HeadCell>
                          <Table.HeadCell>adresse</Table.HeadCell>
                          <Table.HeadCell>telephone</Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Date de naissance
                          </Table.HeadCell>
                          <Table.HeadCell>profession</Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Structure de travail
                          </Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Adresse de la structure de travail
                          </Table.HeadCell>
                          <Table.HeadCell>Specialité</Table.HeadCell>
                          <Table.HeadCell>District/localite</Table.HeadCell>
                          <Table.HeadCell>Email</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          {[...demandes.professionnel_sante].map(
                            ({
                              id,
                              role_utilisateur,
                              nom,
                              prenom,
                              sexe,
                              adresse,
                              telephone,
                              dateNaissance,
                              profession,
                              structure_travail,
                              adresse_structure_travail,
                              specilité,
                              district_localite,
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
                                    {structure_travail}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {adresse_structure_travail}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {specilité}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {district_localite}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {email}
                                  </Table.Cell>
                                </Table.Row>
                              );
                            }
                          )}
                        </Table.Body>
                      </Table>
                    ) : (
                      <p className=" text-xl my-4">
                        Aucune demande d'inscription de personnes responsable de
                        la vigilance chez un exploitant (PRV) n'a été enregistré
                      </p>
                    )}
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-3 gap-6  w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                <div className="col-span-full xl:col-span-6  shadow-sm rounded-xl">
                  <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                    <h2 className="font-semibold ">
                      Professionnels de la santé
                    </h2>
                  </header>
                  <div className="p-3 overflow-x-auto">
                    {[...demandes.professionnel_sante].length !== 0 ? (
                      <Table hoverable>
                        <Table.Head>
                          <Table.HeadCell>Role</Table.HeadCell>
                          <Table.HeadCell>Nom</Table.HeadCell>
                          <Table.HeadCell>prenom</Table.HeadCell>
                          <Table.HeadCell>sexe</Table.HeadCell>
                          <Table.HeadCell>adresse</Table.HeadCell>
                          <Table.HeadCell>telephone</Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Date de naissance
                          </Table.HeadCell>
                          <Table.HeadCell>profession</Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Structure de travail
                          </Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Adresse de la structure de travail
                          </Table.HeadCell>
                          <Table.HeadCell>Specialité</Table.HeadCell>
                          <Table.HeadCell>District/localite</Table.HeadCell>
                          <Table.HeadCell>Email</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          {[...demandes.professionnel_sante].map(
                            ({
                              id,
                              role_utilisateur,
                              nom,
                              prenom,
                              sexe,
                              adresse,
                              telephone,
                              dateNaissance,
                              profession,
                              structure_travail,
                              adresse_structure_travail,
                              specilité,
                              district_localite,
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
                                    {structure_travail}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {adresse_structure_travail}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {specilité}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {district_localite}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {email}
                                  </Table.Cell>
                                </Table.Row>
                              );
                            }
                          )}
                        </Table.Body>
                      </Table>
                    ) : (
                      <p className=" text-xl my-4">
                        Aucune demande d'inscription de professionnels de la
                        santé n'a été enregistré
                      </p>
                    )}
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-3 gap-6  w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                <div className="col-span-full xl:col-span-6  shadow-sm rounded-xl">
                  <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
                    <h2 className="font-semibold ">
                      Responsables d'organisme de réglementation
                    </h2>
                  </header>
                  <div className="p-3 overflow-x-auto">
                    {[...demandes.responsable_organisme_reglementation]
                      .length !== 0 ? (
                      <Table hoverable>
                        <Table.Head>
                          <Table.HeadCell>Role</Table.HeadCell>
                          <Table.HeadCell>Nom</Table.HeadCell>
                          <Table.HeadCell>prenom</Table.HeadCell>
                          <Table.HeadCell>sexe</Table.HeadCell>
                          <Table.HeadCell>adresse</Table.HeadCell>
                          <Table.HeadCell>telephone</Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Date de naissance
                          </Table.HeadCell>
                          <Table.HeadCell>profession</Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Structure de travail
                          </Table.HeadCell>
                          <Table.HeadCell className="whitespace-nowrap">
                            Adresse de la structure de travail
                          </Table.HeadCell>
                          <Table.HeadCell>Specialité</Table.HeadCell>
                          <Table.HeadCell>District/localite</Table.HeadCell>
                          <Table.HeadCell>Email</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                          {[
                            ...demandes.responsable_organisme_reglementation,
                          ].map(
                            ({
                              id,
                              role_utilisateur,
                              nom,
                              prenom,
                              sexe,
                              adresse,
                              telephone,
                              dateNaissance,
                              profession,
                              structure_travail,
                              adresse_structure_travail,
                              specilité,
                              district_localite,
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
                                    {structure_travail}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {adresse_structure_travail}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {specilité}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {district_localite}
                                  </Table.Cell>
                                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {email}
                                  </Table.Cell>
                                </Table.Row>
                              );
                            }
                          )}
                        </Table.Body>
                      </Table>
                    ) : (
                      <p className=" text-xl my-4">
                        Aucune demande d'inscription de responsables d'organisme
                        de réglementation n'a été enregistré
                      </p>
                    )}
                  </div>
                </div>
              </section>

              {/* <section className=" w-full px-10 py-10 mx-auto rounded-xl bg-white dark:bg-gray-800 "></section> */}
            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
};

export default DemandeInscription;
