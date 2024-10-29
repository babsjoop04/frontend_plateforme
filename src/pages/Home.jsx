import { useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";

import imgMedicament from "@/images/photo-removebg-preview.png";

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
                    pharmacovigile, votre outil essentiel pour la surveillance
                    et l'utilisation sécurisée des produits de santé.
                  </p>
                  <p className=" text-2xl mb-4 ">
                    Notre système permet à tous les acteurs du système
                    nationalde pharmacovigilance de signaler, suivre les effets
                    indésirables des differents produit de santé en circulation.
                    Grace à cette plateforme, vous participerez activement à
                    l'amélioration de la sécurité des patients et à l'évolution
                    des connaissances médicales.
                  </p>

                  <p className=" text-2xl ">
                    Ensemble, nous renforçons la sécurité des traitements et la
                    qualité des soins de santé.
                  </p>
                  
                {/* </p> */}
              </section>

              <section className=" w-4/5 px-10 py-10 mx-auto rounded-xl bg-white dark:bg-gray-800 ">
                <div className=" ">
                  <p className="text-2xl">Les fonctionnalités</p>

                  

                  <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div className="p-8 space-y-3 border-2 border-violet-500  rounded-xl">
                      

                      <h1 className="text-2xl font-semibold  capitalize ">
                        Notification
                      </h1>

                      <p className="  ">
                        Notre plateforme révolutionne la déclaration des
                        événements indésirables en intégrant les notifications
                        Manifestations Post-Vaccinale Indersirables (MAPI),
                        évenements/effets indésirables des Médicaments (EEIM) et
                        Produits de Qualité Inférieurs et falsifiés (PQIF).
                        Grâce à des formulaires intuitifs et adaptés à chaque
                        type de déclaration, vous contribuez efficacement à
                        l'amélioration continue de la sécurité des produits de
                        santé. Notre système centralise et analyse ces données
                        précieuses, permettant une détection précoce des risques
                        et une réponse rapide des autorités sanitaires.
                      </p>
                      {/* <ArrowBigRightDash /> */}
                    </div>

                    <div className="p-8 space-y-3 border-2 border-violet-500   rounded-xl">
                      {/* <span className="inline-block text-blue-400 dark:text-blue-400">
                <BookOpen />
              </span> */}

                      <h1 className="text-2xl font-semibold ">
                        Informations sur les produits de santé
                      </h1>

                      <p className=" ">
                        Notre plateforme offre un accès rapide et complet aux
                        informations essentielles sur les produits de santé.
                        Vous pouvez instantanément consulter les données à jour
                        sur les médicaments, vaccins et dispositifs médicaux.
                        Que vous cherchiez des indications thérapeutiques, des
                        effets secondaires connus, des interactions
                        médicamenteuses ou les dernières alertes de sécurité,
                        notre base de données exhaustive répond à vos besoins.
                        Cette fonctionnalité renforce la sécurité des
                        traitements en mettant l'information cruciale à portée
                        de main, contribuant ainsi à une utilisation plus sûre
                        et efficace des produits de santé.
                      </p>

                      {/* <ArrowBigRightDash /> */}
                    </div>

                    <div className="p-8 space-y-3 border-2 border-violet-500  rounded-xl">
                      {/* <span className="inline-block text-blue-400 dark:text-blue-400">
                <MoonStar />
              </span> */}

                      <h1 className="text-2xl font-semibold capitalize ">
                        Simple & clean designs
                      </h1>

                      <p className="">
                        Notre plateforme se distingue par son design épuré et
                        son interface intuitive, conçus pour simplifier la
                        pharmacovigilance. Chaque élément est soigneusement
                        pensé pour offrir une expérience utilisateur fluide et
                        sans distraction. Des formulaires clairs aux tableaux de
                        bord visuellement attrayants, notre design minimaliste
                        permet une navigation aisée et une compréhension rapide
                        des informations critiques. Cette approche "Simple &
                        clean" augmente l'efficacité et minimise les erreurs,
                        permettant aux professionnels de santé de se concentrer
                        sur l'essentiel : la sécurité des patients.
                      </p>

                      {/* <ArrowBigRightDash /> */}
                    </div>
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

export default Home;
