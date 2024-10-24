import { Facebook, Github, Instagram,LogIn, LogOut, Twitter } from "lucide-react";

// import { button } from "@/components/ui/button";


import homme_1 from "@/images/homme_1.jpg";
import homme_2 from "@/images/homme_2.jpg";
import homme_3 from "@/images/homme_3.jpg";

import femme_1 from "@/images/femme_1.jpg";
import femme_2 from "@/images/femme_2.jpg";
import femme_3 from "@/images/femme_3.jpg";

import imgMedicament from "@/images/securite-removebg-preview.png";
import Logo from "@/images/logo.jpeg";



import {
  ArrowBigRightDash,
  BookOpen,
  FileChartColumnIncreasing,
  MoonStar,
  Power,
} from "lucide-react";
import { useState } from "react";



const TeamItem = ({ img_src, nom, poste}) => {
  return (
    <div className="flex space-x-6">
              <img
                alt=""
                className="flex-1 flex-shrink-0 object-cover h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                src={img_src}
              />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold dark:text-gray-600">{nom}</h4>
                <p className="text-sm dark:text-gray-600">{poste}</p>
                <div className="flex mt-2 space-x-2">
                  <ul className="mt-12 flex flex-wrap justify-center gap-2 ">
                    <li>
                      <Facebook />
                    </li>

                    <li>
                      <Instagram />
                    </li>

                    <li>
                      <Twitter />
                    </li>

                    <li>
                      <Github />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
  );
};

const Header = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white shadow shadow-gray-300 w-100 px-8 md:px-auto">
        <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
          {/* <!-- Logo --> */}
          <div className=" md:order-0 flex justify-between">
            <img src={Logo} className="w-17 object-cover  h-12 rounded-full shadow"/>
          <h5 className="font-semibold my-4 mx-2 md:order-0 ">
          Sama pharmacovigile
          </h5>

        
          </div>
          <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="flex font-semibold justify-between">
              {/* <!-- Active Link = text-indigo-500
                Inactive Link = hover:text-indigo-500 --> */}
              <li className="md:px-4 md:py-2 hover:text-white">
                A propos 
              </li>
              <li className="md:px-4 md:py-2 hover:text-white">
                Blog
              </li>
              <li className="md:px-4 md:py-2 hover:text-white">
                Explorer
              </li>
              
              <li className="md:px-4 md:py-2 hover:text-white">
                Contact
              </li>
              <li className="md:px-4 md:py-2 hover:text-white">
                Equipe
              </li>
            </ul>
          </div>
          
          <div className="order-2 md:order-3 flex justify-between">
            <button className="px-4 mx-1 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              <LogIn/>
              <span>Se connecter</span>
            </button>
            <button className="px-4 py-2 mx-1 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
              <LogOut/>
              <span>Deconnexion</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
    
    {/* <div className=" bg-white  px-4 py-2 "></div> */}

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center   ">
          <img src={Logo} className="w-17 object-cover  h-12 rounded-full" />
          <h5 className="font-semibold my-4 mx-2 md:order-0">
            Sama pharmacovigile
          </h5>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-slate-300">
          Notre plateforme de pharmacovigilance est le bouclier qui protège
          votre santé, en détectant et prévenant les effets indésirables des
          médicaments. En signalant vos expériences, vous devenez un acteur clé
          dans l'amélioration continue de la sécurité des traitements pour tous.
        </p>

        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li className="md:px-4 md:py-2 hover:text-indigo-500">A propos</li>
          <li className="md:px-4 md:py-2 hover:text-indigo-500">Carrieres</li>
          <li className="md:px-4 md:py-2 hover:text-indigo-500">Histoire</li>
          <li className="md:px-4 md:py-2 hover:text-indigo-500">Services</li>
          <li className="md:px-4 md:py-2 hover:text-indigo-500">Projets</li>
          <li className="md:px-4 md:py-2 hover:text-indigo-500">Blog</li>
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Facebook />
          </li>

          <li>
            <Instagram />
          </li>

          <li>
            <Twitter />
          </li>

          <li>
            <Github />
          </li>
        </ul>
      </div>

    </footer>

    
  );
};

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="relative z-20 dark:bg-gray-100  flex items-center overflow-hidden ">
      {/* bg-white dark:bg-gray-800 */}
        <div className="container relative flex px-6 py-16 mx-auto dark:text-dark">
          <div className="relative   z-20 flex flex-col sm:w-2/3 lg:w-3/5">
            {/* <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white">
            </span> */}
            <h1 className="flex flex-col text-2xl font-black leading-none text-indigo-500 dark:text-indigo-500 uppercase font-bebas-neue sm:text-8xl ">
              Contribuons
            </h1>
            <span className="text-sm font-semibold sm:text-7xl dark:text-slate-800">
              à l’utilisation sécurisée des produits de santé
            </span>
            <p className="text-sm mt-5 text-gray-700 sm:text-base dark:text-dark">
              Protégeons ensemble la santé de tous. Notre plateforme de
              pharmacovigilance est au cœur de la sécurité des médicaments,
              veillant sans relâche sur votre bien-être. Grace à cette
              plateforme , nous contribuons à rendre les traitements plus sûrs
              jour après jour. Rejoignez-nous dans cette mission cruciale .
              Ensemble, façonnons un avenir où chaque médicament est synonyme de
              confiance et de sécurité.
            </p>
            <div className="flex mt-8">
              <button className="px-4 mx-1 py-2 bg-indigo-500 hover:bg-indigo-600 text-gray-50 rounded-xl flex items-center gap-2">
                <Power />
                <span>Commencer</span>
              </button>
            </div>
          </div>
          <div className="relative flex-initial hidden  py-5  w-32 sm:block sm:w-1/3 lg:w-2/5">
            <img src={imgMedicament} className=" max-w-xs  m-auto md:max-w-sm" />
          </div>
        </div>
      </div>
      {/* <!-- presentation des fonctionnalites --> */}
      <section className="bg-gray-800">
        <div className="container px-6 py-10 mx-auto ">
          <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl dark:text-white">
            Explorer <br /> les{" "}
            <span className="underline decoration-blue-500">Fonctionnalités</span>
            {" "}de la plateforme
          </h1>

          <p className="mt-4 text-gray-300 xl:mt-6 dark:text-gray-300">
            Découvrez comment notre plateforme innovante simplifie et renforce
            la pharmacovigilance grâce à ses fonctionnalités clés
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-300 dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-400 dark:text-blue-400">
                <FileChartColumnIncreasing />
              </span>

              <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                Notification
              </h1>

              <p className="text-gray-300 dark:text-gray-300">
                Notre plateforme révolutionne la déclaration des événements
                indésirables en intégrant les notifications Manifestations
                Post-Vaccinale Indersirables (MAPI), évenements/effets
                indésirables des Médicaments (EEIM) et Produits de Qualité
                Inférieurs et falsifiés (PQIF). Grâce à des formulaires
                intuitifs et adaptés à chaque type de déclaration, vous
                contribuez efficacement à l'amélioration continue de la sécurité
                des produits de santé. Notre système centralise et analyse ces
                données précieuses, permettant une détection précoce des risques
                et une réponse rapide des autorités sanitaires.
              </p>
              <ArrowBigRightDash />
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-300  dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-400 dark:text-blue-400">
                <BookOpen />
              </span>

              <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                Informations sur les produits de santé
              </h1>

              <p className="text-gray-300 dark:text-gray-300">
                Notre plateforme offre un accès rapide et complet aux
                informations essentielles sur les produits de santé. Vous pouvez
                instantanément consulter les données à jour sur les médicaments,
                vaccins et dispositifs médicaux. Que vous cherchiez des
                indications thérapeutiques, des effets secondaires connus, des
                interactions médicamenteuses ou les dernières alertes de
                sécurité, notre base de données exhaustive répond à vos besoins.
                Cette fonctionnalité renforce la sécurité des traitements en
                mettant l'information cruciale à portée de main, contribuant
                ainsi à une utilisation plus sûre et efficace des produits de
                santé.
              </p>

              <ArrowBigRightDash />
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-300 dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-400 dark:text-blue-400">
                <MoonStar />
              </span>

              <h1 className="text-2xl font-semibold text-white capitalize dark:text-white">
                Simple & clean designs
              </h1>

              <p className="text-gray-300 dark:text-gray-300">
                Notre plateforme se distingue par son design épuré et son
                interface intuitive, conçus pour simplifier la
                pharmacovigilance. Chaque élément est soigneusement pensé pour
                offrir une expérience utilisateur fluide et sans distraction.
                Des formulaires clairs aux tableaux de bord visuellement
                attrayants, notre design minimaliste permet une navigation aisée
                et une compréhension rapide des informations critiques. Cette
                approche "Simple & clean" augmente l'efficacité et minimise les
                erreurs, permettant aux professionnels de santé de se concentrer
                sur l'essentiel : la sécurité des patients.
              </p>

              <ArrowBigRightDash />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- presentation equipe --> */}
      <section className="">
      
        <div className="container p-4 mx-auto space-y-16 sm:p-10 dark:bg-gray-100">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-none sm:text-5xl text-slate-700">
              Rencontrez notre equipe
            </h3>
            <p className="max-w-2xl dark:text-gray-600">
              At a assumenda quas cum earum ut itaque commodi saepe rem
              aspernatur quam natus quis nihil quod, hic explicabo doloribus
              magnam neque, exercitationem eius sunt!
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {
            [
              { 
                img_src:homme_2,
                nom:"Leroy Jenkins",
                poste:"Web developer"
              },
              { 
                img_src:femme_1,
                nom:"Leroy Jenkins",
                poste:"Web developer"
              },{ 
                img_src:femme_2,
                nom:"Leroy Jenkins",
                poste:"Web developer"
              },{ 
                img_src:homme_3,
                nom:"Leroy Jenkins",
                poste:"Web developer"
              },
              { 
                img_src:femme_3,
                nom:"Leroy Jenkins",
                poste:"Web developer"
              },
              { 
                img_src:homme_1,
                nom:"Leroy Jenkins",
                poste:"Web developer"
              },
            ].map((item,index)=>{

              return <TeamItem
              key={index}
                img_src={item.img_src}
                nom={item.nom}
                poste={item.poste}
              />
            }
            )
          }
            
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
};

export default LandingPage;
