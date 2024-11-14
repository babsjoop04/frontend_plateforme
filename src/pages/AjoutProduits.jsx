import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";

import axios from "axios";
import { useAuthProvider } from "../utils/AuthContext";
import { CirclePlus, Info } from "lucide-react";
import { Alert, Button, Modal } from "flowbite-react";
import FormProduit from "../components/FormProduit";

const AjoutProduits = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [donneesProduit, setdonneesProduit] = useState({
    nom_produit: "",
    type_produit: "",
    numero_AMM: "",
    date_début: "",
    prix_public: "",

    DCI: "",
    dosage: "",
    conditionnement: "",
    forme_galénique: "",
    laboratoire: "",
    voie_administration: "",
    classe_thérapeutique: "",
    files: null,
  });

  const [errors, setErrors] = useState({});
  const [openMessageModal, setOpenMessageModal] = useState(false);

  const { currentUser, changeCurrentUser } = useAuthProvider();

  // useEffect(() => {
  //   console.log(donneesProduit);
  // },[openMessageModal]);

  const creerProduit = () => {
    // setOpenModal(false);
    setErrors({});

    axios
      .post("/api/produit", donneesProduit, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
          // application/json;
        },
      })
      .then(function (response) {
        // setErrors({});
        setdonneesProduit({
          nom_produit: "",
          type_produit: "",
          numero_AMM: "",
          date_début: "",
          prix_public: "",
          
          DCI: "",
          dosage: "",
          conditionnement: "",
          forme_galénique: "",
          laboratoire: "",
          voie_administration: "",
          classe_thérapeutique: "",
          files: null,
        });
        setOpenMessageModal(true);
        // console.log(response);
        
        
        // getAccount();
        // setUtilisateurs(response.data);
      })
      .catch(function (error) {
        // console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
    // console.log(emailSelected, decision);
  };

  const change = (e) => {
    if (e.target.name === "files") {
      setdonneesProduit((prevState) => {
        return { ...prevState, files: e.target.files };
      });
      // console.log(e.target.files);
      return;
    }

    setdonneesProduit((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const submit = () => {
    creerProduit();
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
                  Ajout de produit de santé
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
                      Formulaire d'ajout de nouveaux produits
                    </h2>
                  </header>
                </div>

                <FormProduit
                  change={change}
                  errors={errors}
                  defaultValues={donneesProduit}
                  // submit={submit}
                />

                <div className=" col-span-full mx-auto mt-4">
                  <Button
                    color="blue"
                    size="sm"
                    // type="submit"
                    // disabled={isFirstStep}
                    onClick={() => {
                      //     setErrors({});
                      //     creerProduit();
                      creerProduit();
                    }}
                  >
                    {/* {!traitement && <FilePen />} */}
                    Ajouter
                    <CirclePlus className="ml-2" />
                  </Button>
                </div>

                <Modal
                  show={openMessageModal}
                  onClose={() => {
                    setOpenMessageModal(false);
                  }}
                  size="md"
                >
                  <Modal.Header>Message</Modal.Header>
                  <Modal.Body>
                    <div className="text-center">
                      <Info className="mx-auto mb-4 h-14 w-14 " />
                      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Produit ajouté avec success
                      </h3>
                    </div>
                  </Modal.Body>

                  <Modal.Footer className="flex justify-end">
                    {/* <Button
                    className="mx-2"
                    color="blue"
                    // onClick={() => setOpenModal(false)}
                    onClick={() => maj(newProduit.id)}
                  >
                    Mettre à jour
                  </Button> */}
                    <Button
                      className="mx-2"
                      color="gray"
                      onClick={() => setOpenMessageModal(false)}
                    >
                      Fermer
                    </Button>
                  </Modal.Footer>
                </Modal>
              </section>
            </div>
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
};

export default AjoutProduits;
