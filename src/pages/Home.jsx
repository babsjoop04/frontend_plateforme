import { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";

// import imgMedicament from "@/images/photo-removebg-preview.png";
// import imgMedicament from "@/images/medicine-2325047_640.png";
import imgMAPI from "@/images/mapi.png";
import imgEEIM from "@/images/eeim.png";
import imgRechercher from "@/images/rechercher.png";
import imgDefaut from "@/images/defaut.png";






import { Card } from "flowbite-react";

const Home = () => {
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
                  Acceuil
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
              <section className="w-4/5 px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                {/* <p className=" text-2xl "> */}
                <p className=" text-2xl mb-4">
                  Bienvenue dans la plateforme de pharmacovigilance : Sama
                  pharmacovigile, votre outil essentiel pour la surveillance et
                  l'utilisation sécurisée des produits de santé.
                </p>
                <p className=" text-2xl mb-4 ">
                  Notre système permet à tous les acteurs du système nationalde
                  pharmacovigilance de signaler, suivre les effets indésirables
                  des differents produit de santé en circulation. Grace à cette
                  plateforme, vous participerez activement à l'amélioration de
                  la sécurité des patients et à l'évolution des connaissances
                  médicales.
                </p>

                <p className=" text-2xl ">
                  Ensemble, nous renforçons la sécurité des traitements et la
                  qualité des soins de santé.
                </p>

                {/* </p> */}
              </section>

              <section className="  px-10 py-10 mx-auto rounded-xl bg-white dark:bg-gray-800 ">
              <h1 className="text-2xl md:text-3xl mb-6 text-gray-800 dark:text-gray-100 font-bold">
                  Fonctionnalités
                </h1>
                <div className="grid grid-cols-2 gap-6 ">
                
                  <Card
                    className="max-w-sm "
                    renderImage={() => (
                      <img
                        // width={500}
                        // height={500}
                        className=" mt-auto mx-auto"
                        src={imgEEIM}
                        alt="image 1"
                      />
                    )}
                  >
                    <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                      Notification d'événement/effet indesirables des
                      medicaments
                    </h5>
                    <p className="font-normal  text-gray-700 dark:text-gray-400">
                      La Notification d'événement/effet indésirable des
                      médicaments est un système permettant aux professionnels
                      de santé et aux patients de signaler aux autorités
                      sanitaires tout problème lié à un médicament, afin
                      d'assurer la sécurité des traitements et prendre des
                      mesures correctives si nécessaire.
                    </p>
                  </Card>
                  <Card
                    className="max-w-sm "
                    renderImage={() => (
                      <img
                        // width={500}
                        // height={500}
                        className=" "
                        src={imgMAPI}
                        alt="image 1"
                      />
                    )}
                  >
                    <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                      Notification de manifestations post vaccinales
                      indesirables
                    </h5>
                    <p className="font-normal  text-gray-700 dark:text-gray-400">
                      La Notification de manifestations post-vaccinales
                      indésirables est un système permettant de signaler aux
                      autorités sanitaires tout effet secondaire survenu après
                      une vaccination pour assurer la sécurité des vaccins.
                    </p>
                  </Card>
                  <Card
                    className="max-w-sm "
                    renderImage={() => (
                      <img
                        // width={500}
                        // height={500}
                        className=" mx-auto"
                        src={imgDefaut}
                        alt="image 1"
                      />
                    )}
                  >
                    <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                      Notification de suspicion de defaut de qualité
                    </h5>
                    <p className="font-normal  text-gray-700 dark:text-gray-400">
                      La Notification de suspicion de défaut de qualité est un
                      système permettant aux professionnels de santé et
                      utilisateurs de signaler aux autorités tout problème de
                      qualité observé sur un produit de santé (comme une
                      anomalie d'aspect, d'emballage, ou de contenu) afin
                      d'assurer la sécurité des patients et la qualité des
                      produits.
                    </p>
                  </Card>
                  <Card
                    className="max-w-sm "
                    renderImage={() => (
                      <img
                        // width={500}
                        // height={500}
                        className=" mx-auto"
                        src={imgRechercher}
                        alt="image 1"
                      />
                    )}
                  >
                    <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                      S'informer sur les produits de santé
                    </h5>
                    <p className="font-normal  text-gray-700 dark:text-gray-400">
                    Notre plateforme offre un accès rapide et complet aux
                informations essentielles sur les produits de santé. Vous pouvez
                instantanément consulter les données à jour sur les médicaments,
                vaccins et dispositifs médicaux.
                    </p>
                  </Card>
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

export default Home;
