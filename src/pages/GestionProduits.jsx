import { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import FilterButton from "../components/DropdownFilter";
import Datepicker from "../components/Datepicker";

import axios from "axios";
import { useAuthProvider } from "../utils/AuthContext";
import { Button, Dropdown, Modal, Table } from "flowbite-react";
import FormProduit from "../components/FormProduit";
import { Info } from "lucide-react";
// import { Table } from "lucide-react";

const GestionProduits = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openMessageModal, setOpenMessageModal] = useState(false);

  // const [seeMedicament, setSeeMedicament] = useState(false);
  // const [seeVaccin, setseeVaccin] = useState(false);
  // const [seeAutres, setSeeAutres] = useState(false);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [produits, setProduits] = useState([]);
  const [newProduit, setNewProduit] = useState({
    id: "",
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

  const selectProduit = (id) => {
    const produit = [...produits].find((produit) => {
      return produit.id === id;
    });

    setNewProduit(produit);
    setOpenModal(true);
    // console.log(produit);
  };

  const annulerSelectProduit = () => {
    setOpenModal(false);

    setNewProduit({
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

    // console.log(produit);
  };

  const change = (e) => {
    if (e.target.name === "files") {
      setNewProduit((prevState) => {
        return { ...prevState, files: e.target.files };
      });
      // console.log(e.target.files);
      return;
    }

    setNewProduit((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const maj = (id) => {
    // console.log(id);

    axios
      .patch(`/api/produit/${id}`, newProduit, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
          // application/json;
        },
      })
      .then(function (response) {
        // setErrors({});
        setOpenModal(false);
        setOpenMessageModal(true);
        getProduits();
        // console.log(response);

        // getAccount();

        // setUtilisateurs(response.data);
      })
      .catch(function (error) {
        // console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  //   useEffect(() => {
  // console.log(newProduit);

  //   })

  const { currentUser, changeCurrentUser } = useAuthProvider();

  const getProduits = () => {
    axios
      .get("/api/produit", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentUser.token}`,
          // application/json;
        },
      })
      .then(function (response) {
        // setErrors({});
        // console.log(response);
        setProduits(response.data);

        // getAccount();

        // setUtilisateurs(response.data);
      })
      .catch(function (error) {
        console.log(error);
        // setErrors(error.response.data.errors);
      });
  };

  useEffect(() => {
    getProduits();
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
                  Gestion des produits de santé
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
              {/* <div className="grid grid-flow-col sm:auto-cols-max justify-start gap-2">
                <Dropdown
                  color="light"
                  label="Choix du type de produit"
                  dismissOnClick={false}
                >
                  <Dropdown.Item
                    onClick={() => {
                      setSeeMedicament(true);
                      setseeVaccin(false);
                      setSeeAutres(false);
                    }}
                  >
                    Médicaments
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSeeMedicament(false);
                      setseeVaccin(true);
                      setSeeAutres(false);
                    }}
                  >
                    Vaccins
                  </Dropdown.Item>
                  <Dropdown.Item
                  onClick={()=> {
                    setSeeMedicament(false)
                    setseeVaccin(false)
                    setSeeAutres(true)
                  }}>Autres</Dropdown.Item>
                </Dropdown>
              </div> */}
              <section className="p-3 overflow-x-auto grid grid-cols-3 gap-6  w-full px-10 py-10 mx-auto bg-white dark:bg-gray-800   rounded-xl">
                <Table hoverable>
                  <Table.Head>
                    <Table.HeadCell className="whitespace-nowrap">
                      Nom du produit
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      Type de produit
                    </Table.HeadCell>

                    <Table.HeadCell className="whitespace-nowrap">
                      Numero AMM
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      Date de debut
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      Prix public
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      DCI
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      Dosage
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      Conditionnement
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      Forme galénique
                    </Table.HeadCell>

                    <Table.HeadCell className="whitespace-nowrap">
                      Laboratoire
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      voie d'administration
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      Classe thérapeutique
                    </Table.HeadCell>
                    <Table.HeadCell className="whitespace-nowrap">
                      Acions
                    </Table.HeadCell>
                  </Table.Head>
                  <Table.Body className="divide-y">
                    {[...produits].map(
                      ({
                        id,
                        nom_produit,
                        type_produit,
                        numero_AMM,
                        date_début,
                        prix_public,

                        DCI,
                        dosage,
                        conditionnement,
                        forme_galénique,
                        laboratoire,
                        voie_administration,
                        classe_thérapeutique,
                      }) => {
                        return (
                          <Table.Row
                            key={id}
                            className=" dark:border-gray-700 "
                          >
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {nom_produit}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {type_produit}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {numero_AMM}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {date_début}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {prix_public}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {DCI}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {dosage}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {conditionnement}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {forme_galénique}
                            </Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {laboratoire}
                            </Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {voie_administration}
                            </Table.Cell>

                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              {classe_thérapeutique}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                              <Button.Group>
                                <Button
                                  color="blue"
                                  onClick={() => selectProduit(id)}
                                >
                                  Mettre à jour
                                </Button>
                                <Button color="failure">Supprimer</Button>
                              </Button.Group>
                            </Table.Cell>
                          </Table.Row>
                        );
                      }
                    )}
                  </Table.Body>
                </Table>
              </section>
              <Modal
                show={openModal}
                onClose={() => {
                  setOpenModal(false);
                }}
                size="max-w-lg"
              >
                <Modal.Header>
                  Formulaire de mise à jour de produit
                </Modal.Header>
                <Modal.Body>
                  <FormProduit
                    change={change}
                    errors={errors}
                    defaultValues={newProduit}
                    submit={() => {}}
                  />
                </Modal.Body>

                <Modal.Footer className="flex justify-end">
                  <Button
                    className="mx-2"
                    color="blue"
                    // onClick={() => setOpenModal(false)}
                    onClick={() => maj(newProduit.id)}
                  >
                    Mettre à jour
                  </Button>
                  <Button
                    className="mx-2"
                    color="gray"
                    onClick={() => annulerSelectProduit()}
                  >
                    Annuler
                  </Button>
                </Modal.Footer>
              </Modal>

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
                      Mise à jour faite avec success
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
            </div>
          </div>
        </main>

 
      </div>
    </div>
  );
};

export default GestionProduits;
