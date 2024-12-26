import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";
import { Button, Card, Carousel, Dropdown, List, Modal } from "flowbite-react";

import imgDefaut from "@/images/defaut.png";
import {
  Atom,
  Badge,
  BookOpenText,
  Calendar1,
  Download,
  FlaskConical,
  FolderPen,
  HandCoins,
  Key,
  Pipette,
  Plus,
  Search,
  Tablets,
} from "lucide-react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useAuthProvider } from "../utils/AuthContext";

const Sinformer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [searchData, setSearchData] = useState({});
  const [produits, setProduit] = useState([]);
  const [produitSelectionne, setProduitSelectionne] = useState({});

  const { currentUser, changeCurrentUser } = useAuthProvider();

  // useEffect(() => {
  //   console.log(produitSelectionne);
  // });

  const change = (e) => {
    setSearchData((previousState) => {
      return { ...previousState, [e.target.name]: e.target.value };
    });
  };

  const selection = (id) => {
    const produit = [...produits].find((produit) => {
      return produit.id === id;
    });
    // console.log(produit);

    setProduitSelectionne(produit);
    setOpenModal(true);
  };

  const rechercher = () => {
    // console.log('hello');

    axios
      .get("/api/produit/rechercher", {
        params: searchData,
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        if (response.statusText === "OK") {
          // console.log(response.statusText==="OK");
          // setOpenModal(true);

          setProduit(response.data);
        }

        // setTimeout(() => {
        //   navigate("/");
        // }, 2500);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const downloadNotice = async (email, type = "demande_inscription") => {
    // console.log(email);

    try {
      // Configuration CORS côté Laravel nécessaire
      const response = await axios({
        url: "/api/produit/notice/download",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
          // application/json;
        },
        responseType: "blob", // Important pour les fichiers
        params: {
          //       nom_fichiers: "2024_10_26_10_23_54_Lefevre_Pierre.zip",
         id:produitSelectionne.id
        },
      });

      
      
      // Créez un lien de téléchargement
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", 'notice.pdf');
      document.body.appendChild(link);
      link.click();

      // Nettoyez
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Erreur de téléchargement", error);
    }
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
                    htmlFor="nom_produit"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nom du produit de sante
                  </label>
                  <input
                    type="text"
                    id="nom_produit"
                    name="nom_produit"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    required
                    onChange={(e) => change(e)}
                    defaultValue={searchData.nom_produit_sante}
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
                    onClick={() => {
                      rechercher();
                    }}
                  >
                    <Search className="mr-2" />
                    Rechercher
                  </Button>
                </div>
              </section>

              {[...produits].length !== 0 && (
                <section className="grid grid-cols-3 gap-6 w-full px-10 py-10 mx-auto rounded-xl bg-white dark:bg-gray-800 ">
                  {[...produits].map(
                    ({ id, nom_produit, forme_galénique, conditionnement }) => {
                      return (
                        <Card
                          key={id}
                          className="max-w-sm  "
                          renderImage={() => (
                            <img
                              // width={150}
                              // height={15}
                              // className="h-3/5"
                              src={imgDefaut}
                              alt="image 1"
                            />
                          )}
                        >
                          <h5 className="text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
                            {nom_produit}
                          </h5>

                          <span className=" text-xl font-medium  text-gray-700 dark:text-gray-400">
                            <List>
                              <List.Item>{forme_galénique}</List.Item>
                              <List.Item>{conditionnement}</List.Item>
                            </List>
                          </span>
                          <div className="mt-4  ">
                            <Button
                              color="blue"
                              // onClick={() => setOpenModal(id)}
                              onClick={() => selection(id)}
                            >
                              Voir plus
                              <Plus className="ml-2" />
                            </Button>
                          </div>
                        </Card>
                      );
                    }
                  )}
                </section>
              )}
            </div>
          </div>
        </main>

        <Modal
          show={openModal}
          size="max-w-lg"
          // position={modalPlacement}
          onClose={() => {
            setOpenModal(false);
            setProduitSelectionne({});
          }}
        >
          <Modal.Header>Informations</Modal.Header>
          <Modal.Body>
            {/* <div className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            <div className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div><div className="space-y-6 p-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div> */}

            <div className=" py-8">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                  <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                      {/* <img
                        className="w-full h-full object-cover"
                        src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                        alt="Product Image"
                      /> */}
                      <Carousel>
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcpimg.tistatic.com%2F06139253%2Fb%2F4%2F1-5-gm-Ceftriaxone-Sulbactam-For-Injection.jpg&f=1&nofb=1&ipt=1f699a0a655a2bcb9565737e5dc2c5737baaaf30f5442db2f58174ca60255694&ipo=images"
                          alt="..."
                        />
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frawilliamsltd.com%2Fwp-content%2Fuploads%2F2021%2F07%2FSteritax-1.5.jpg&f=1&nofb=1&ipt=ac582fd6a9b14443fd81e2c7fe34fbde484db4b46d81a2a31b5b04b3161f5291&ipo=images"
                          alt="..."
                        />
                        
                      </Carousel>
                    </div>
                    <div className="flex -mx-2 mb-4">
                      {/* <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                          Add to Cart
                        </button>
                      </div>
                      <div className="w-1/2 px-2">
                        <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                          Add to Wishlist
                        </button>
                      </div> */}
                    </div>
                  </div>
                  <div className="md:flex-1 px-4 ">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {produitSelectionne.nom_produit}
                    </h2>

                    <div className="flex items-center my-3">
                      <span className="mr-2 text-violet-500">
                        <Key size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Numero d'amm :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.numero_AMM}
                      </span>
                    </div>

                    <div className="flex items-center my-3">
                      <span className="mr-2 text-violet-500">
                        <HandCoins size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Prix public :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.prix_public}
                      </span>
                    </div>

                    <div className="flex items-center my-3">
                      <span className="mr-2 text-violet-500">
                        <Calendar1 size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Date de début :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.date_début}
                      </span>
                    </div>

                    <div className="flex items-center my-3">
                      <span className="mr-2 text-violet-500">
                        <FolderPen size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Denomination commune internationale :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.DCI}
                      </span>
                    </div>

                    <div className="flex items-center my-3">
                      <span className="mr-2 text-violet-500">
                        <Pipette size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Dosage :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.dosage}
                      </span>
                    </div>

                    <div className="flex items-center my-3">
                      <span className="mr-2 text-violet-500">
                        <Atom size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Forme galénique :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.forme_galénique}
                      </span>
                    </div>

                    <div className="flex items-center my-3">
                      <span className="mr-2 text-violet-500">
                        <FlaskConical size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Laboratoire :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.laboratoire}
                      </span>
                    </div>

                    <div className="flex items-center ">
                      <span className="mr-2 text-violet-500">
                        <Tablets size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Voie d'administration :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.voie_administration}
                      </span>
                    </div>

                    <div className="flex items-center my-3">
                      <span className="mr-2 text-violet-500">
                        <Tablets size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Classe thérapeutique :
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">
                        {produitSelectionne.classe_thérapeutique}
                      </span>
                    </div>

                    <div className="flex items-center my-3">
                      {/* <span className="mr-2 text-violet-500">
                        <Download size={21} />
                      </span>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Notice :
                      </span> */}
                      {/* <span className="text-gray-600 dark:text-gray-300">
                        <Link
                          // to={"/signup"}
                          className="hover:underline decoration-indigo-600"
                        >
                          Telecharger
                          <Button
                            color="blue"
                            onClick={() => setOpenModal(false)}
                          >
                        <Download size={21} />

                            Telecharger la notice
                          </Button>
                        </Link>
                      </span> */}
                    </div>

                    <div className="mb-4">
                      {/* <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Color:
                      </span> */}
                      {/* <div className="flex items-center mt-2">
                        <span className="text-gray-600 dark:text-gray-300"> */}
                     
                        {/* Telecharger */}
                        <Button
                          color="blue"
                          onClick={() => downloadNotice()}
                        >
                          <Download size={21} className="mr-2" />

                          <span className="font-bold ">
                            Telecharger la notice
                          </span>
                        </Button>
                      {/* </span>
                      </div> */}
                    </div>
                    {/* <div className="mb-4">
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Select Size:
                      </span>
                      <div className="flex items-center mt-2">
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          S
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          M
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          L
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          XL
                        </button>
                        <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                          XXL
                        </button>
                      </div>
                    </div> */}
                    {/* <div>
                      <span className="font-bold text-gray-700 dark:text-gray-300">
                        Product Description:
                      </span>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sed ante justo. Integer euismod libero id mauris
                        malesuada tincidunt. Vivamus commodo nulla ut lorem
                        rhoncus aliquet. Duis dapibus augue vel ipsum pretium,
                        et venenatis sem blandit. Quisque ut erat vitae nisi
                        ultrices placerat non eget velit. Integer ornare mi sed
                        ipsum lacinia, non sagittis mauris blandit. Morbi
                        fermentum libero vel nisl suscipit, nec tincidunt mi
                        consectetur.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    </div>
  );
};

export default Sinformer;
