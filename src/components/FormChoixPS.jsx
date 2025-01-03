import { Card, Step, Stepper, Typography } from "@material-tailwind/react";
import { Alert, Button, Modal, Table } from "flowbite-react";
import {
  BookOpenText,
  Info,
  MoveLeft,
  MoveRight,
  PillBottle,
  Plus,
  Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthProvider } from "../utils/AuthContext";

const FormChoixPS = ({
  change,
  notificationData,
  setNotificationData,
  errors,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const [nomRecherche, setNomRecherche] = useState("");

  const { currentUser, changeCurrentUser } = useAuthProvider();

  const [produit, setProduit] = useState({
    produit_sante_id: null,
    type_produit: "",
    numero_lot: "",
    provenance: "",
    date_peremption: "",
    posologie: "",

    date_debut_prise: "",
    date_fin_prise: "1800-01-01",

    // date_prise: "",

    date_ouverture_flacon: "",
    date_vaccination: "",
    site_administration: "",
    nombre_contact_vaccin: null,
    nom_solvant: "",
    date_peremption_solvant: "",
    numero_lot_solvant: "",
  });

  const [produits, setProduits] = useState([]);

  // useEffect(() => {
  //   console.log(produit);

  //   //   //   getProduits();
  // });

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
        console.log(response);
        // setProduits(response.data);

        // getAccount();

        // setUtilisateurs(response.data);
      })
      .catch(function (error) {
        console.log(error);
        // setErrors(error.response.data.errors);
      });
  };

  const changeProduit = (e) => {
    if (e.target.name === "produit_sante_id") {
      const produitT = [...produits].find((produit) => {
        return produit.id == e.target.value;
      });

      setProduit((prevState) => {
        return {
          ...prevState,
          type_produit: produitT.type_produit,
          produit_sante_id: produitT.id,
          nom_produit: produitT.nom_produit,
        };
      });

      return;
    }

    setProduit((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const createProduit = () => {
    setNotificationData((prevState) => {
      return {
        ...prevState,
        infos_produits_santes: [...prevState.infos_produits_santes, produit],
      };
    });

    setOpenModal(false);
  };

  const annulerAjoutProduit = () => {
    setProduit({
      produit_sante_id: null,
      nom_produit: null,

      type_produit: "",
      numero_lot: "",
      provenance: "",
      date_peremption: "",

      date_debut_prise: "",
      // date_prise: "",

      date_fin_prise: "1800-01-01",
      posologie: "",

      date_ouverture_flacon: "",
      date_vaccination: "",
      site_administration: "",
      nombre_contact_vaccin: null,
      nom_solvant: "",
      date_peremption_solvant: "",
      numero_lot_solvant: "",
    });

    setOpenModal(false);
  };

  const rechercher = () => {
    // console.log('hello');

    axios
      .get("/api/produit/rechercher", {
        params: {
          nom_produit: nomRecherche,
        },
        headers: {
          Authorization: `Bearer ${currentUser.token}`,
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        // console.log(response.data);
        setProduits(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <div className="grid grid-cols-1 w-4/5 mx-auto gap-6 px-10 py-10 ">
        <div className="col-span-full  xl:col-span-6">
          <label
            htmlFor="motif_prise_produits_sante"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pour quelle(s) pathologie(s) les produits ci-dessous ont été
            prescrit(s) ? *
          </label>

          <textarea
            // id="motif_prise_produits_sante"
            name="motif_prise_produits_sante"
            rows="1"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            onChange={(e) => change(e)}
            defaultValue={notificationData.motif_prise_produits_sante}
          ></textarea>
          {errors.motif_prise_produits_sante && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.motif_prise_produits_sante}
              </Alert>
            </div>
          )}
        </div>

        <div className="col-span-full xl:col-span-6  my-3  shadow-sm rounded-xl">
          <span className="flex justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
            <h2 className="font-semibold ">Produits</h2>
            <Button
              color="blue"
              size="sm"
              onClick={(e) => {
                setOpenModal(true);
                // changeProduit(e);
              }}

              // disabled={isFirstStep}
              // onClick={handlePrev}
            >
              <Plus />
            </Button>
          </span>
        </div>

        <Modal show={openModal} onClose={() => annulerAjoutProduit()}>
          <Modal.Header>Formulaire d'ajout de produit</Modal.Header>
          <Modal.Body>
            <div className="w-2/5 mx-auto mb-20  ">
              <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
              >
                <Step className="">
                  <PillBottle />
                  <div className="absolute -bottom-9 w-max text-center">
                    <Typography
                      variant="h6"
                      color={activeStep === 0 ? "light-blue" : "white"}
                    >
                      Choix
                    </Typography>
                  </div>
                </Step>
                <Step className="">
                  <BookOpenText />

                  <div className="absolute -bottom-9 w-max text-center  ">
                    {/* <Badge placement="top-end"> */}
                    <Typography
                      variant="h6"
                      color={activeStep === 1 ? "light-blue" :  "white"}
                    >
                      Infos
                    </Typography>
                    {/* </Badge> */}
                  </div>
                </Step>
              </Stepper>
            </div>

            {activeStep === 0 && (
              <>
                <div className="my-10 w-3/5 mx-auto grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    // id="numero_lot"
                    name="nom_produit "
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nom du produit"
                    required
                    onChange={(e) => setNomRecherche(e.target.value)}
                    // defaultValue={produit.id}
                  />
                  <Button
                    color="blue"
                    size="sm"
                    className=""
                    // disabled={isFirstStep}
                    onClick={() => {
                      rechercher();
                    }}
                  >
                    <Search className="mr-2" />
                    Rechercher
                  </Button>
                </div>

                <div className="my-10 w-3/5 mx-auto">
                  {[...produits].length !== 0 ? (
                    <>
                      <label
                        htmlFor="produit_sante_id"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      ></label>

                      <select
                        // id="produit_sante_id"
                        name="produit_sante_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => changeProduit(e)}
                        defaultValue={produit.produit_sante_id}
                      >
                        <option>Veuillez choisir un produit</option>
                        {[...produits].map(
                          ({
                            id,
                            nom_produit,
                            type_produit,
                            dosage,
                            voie_administration,
                          }) => {
                            return (
                              <option value={id} key={id}>
                                {nom_produit}, produit de type {type_produit}
                                ,dosage : {dosage}, voie d'administration :{" "}
                                {voie_administration}{" "}
                              </option>
                            );
                          }
                        )}
                      </select>
                    </>
                  ) : (
                    <h5 className="text-sm  font-bold tracking-tight text-gray-900 dark:text-white">
                      Veuillez effectuer une recherche
                    </h5>
                  )}
                </div>
              </>
            )}

            {activeStep === 1 && (
              <form
                className="space-y-6 mx-auto w-9/12"
                onSubmit={(e) => e.preventDefault()}
              >
                {produit.type_produit === "vaccin" ? (
                  <div className="grid grid-cols-2 mx-auto  gap-14">
                    <div className="">
                      <label
                        htmlFor="provenance"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Provenance
                      </label>

                      <select
                        // id="provenance"
                        name="provenance"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => changeProduit(e)}
                      >
                        <option>{""}</option>
                        <option value="Officine">Officine</option>
                        <option value="Centre de santé">Centre de santé</option>
                        <option value="Poste de santé">Poste de santé</option>
                        <option value="Hôpital">Hôpital</option>
                        <option value="Herboristerie">Herboristerie</option>
                      </select>
                    </div>

                    {/* vaccin */}

                    <div>
                      <label
                        htmlFor="date_ouverture_flacon"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date d'ouverture du flacon
                      </label>
                      <input
                        type="date"
                        // id="date_ouverture_flacon"
                        name="date_ouverture_flacon"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="date_peremption"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date de peremption
                      </label>
                      <input
                        type="date"
                        // id="date_peremption"
                        name="date_peremption"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        // defaultValue="00/00/0000"
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date_vaccination"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date de la vaccination
                      </label>
                      <input
                        type="date"
                        // id="date_vaccination"
                        name="date_vaccination"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="site_administration"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Site d'administration
                      </label>
                      <input
                        type="text"
                        // id="site_administration"
                        name="site_administration"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="nombre_contact_vaccin"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nombre de contact avec le vaccin
                      </label>
                      <input
                        type="number"
                        // id="nombre_contact_vaccin"
                        name="nombre_contact_vaccin"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        min={0}
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="numero_lot"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Numero de lot du vaccin
                      </label>
                      <input
                        type="text"
                        // id="numero_lot"
                        name="numero_lot"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="nom_solvant"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Nom du solvant utilisé
                      </label>
                      <input
                        type="text"
                        // id="nom_solvant"
                        name="nom_solvant"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="numero_lot_solvant"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Numero de lot du solvant
                      </label>
                      <input
                        type="text"
                        // id="numero_lot_solvant"
                        name="numero_lot_solvant"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="date_peremption_solvant"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date de peremption du solvant
                      </label>
                      <input
                        type="date"
                        // id="date_peremption_solvant"
                        name="date_peremption_solvant"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={produit.email}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 mx-auto  gap-14">
                    <div className="">
                      <label
                        htmlFor="provenance"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Provenance
                      </label>

                      <select
                        // id="provenance"
                        name="provenance"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => changeProduit(e)}
                        defaultValue={produit.provenance}
                      >
                        <option>Veuillez choisir une provenance</option>
                        <option value="Officine">Officine</option>
                        <option value="Centre de santé">Centre de santé</option>
                        <option value="Poste de santé">Poste de santé</option>
                        <option value="Hôpital">Hôpital</option>
                        <option value="Herboristerie">Herboristerie</option>
                      </select>
                    </div>

                    <div className="">
                      <label
                        htmlFor="posologie"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Posologie
                      </label>

                      <textarea
                        // id="posologie"
                        name="posologie"
                        rows="1"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        defaultValue={produit.posologie}
                        required
                        onChange={(e) => changeProduit(e)}
                      ></textarea>
                    </div>

                    <div>
                      <label
                        htmlFor="date_debut_prise"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date de debut de prise
                      </label>
                      <input
                        type="date"
                        // id="date_debut_prise"
                        name="date_debut_prise"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        // defaultValue={"2024-09-05"}
                        required
                        onChange={(e) => changeProduit(e)}
                        defaultValue={produit.date_debut_prise}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date_fin_prise"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date de fin de prise si arrêt
                      </label>
                      <input
                        type="date"
                        // id="date_fin_prise"
                        name="date_fin_prise"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        // defaultValue="1800-01-01"
                        required
                        onChange={(e) => changeProduit(e)}
                        defaultValue={produit.date_fin_prise}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="date_peremption"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Date de peremption
                      </label>
                      <input
                        type="date"
                        // id="date_peremption"
                        name="date_peremption"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        // defaultValue="00/00/0000"
                        required
                        onChange={(e) => changeProduit(e)}
                        defaultValue={produit.date_peremption}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="numero_lot"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Numero de lot du médicament
                      </label>
                      <input
                        type="text"
                        // id="numero_lot"
                        name="numero_lot"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        defaultValue={produit.numero_lot}
                      />
                    </div>
                  </div>
                )}
              </form>
            )}

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
                  onClick={() => createProduit()}

                  // isProcessing={traitement}
                  // onClick={() => notifier()}
                >
                  {/* {!traitement && <FilePen />} */}

                  <span className="ml-1">Ajouter</span>
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
          </Modal.Body>

          {/* <Modal.Footer className="flex justify-end">
            <Button
              className="mx-2"
              color="blue"
              // onClick={() => setOpenModal(false)}
              onClick={() => createProduit()}
            >
              Ajouter
            </Button>
            <Button
              className="mx-2"
              color="gray"
              onClick={() => annulerAjoutProduit()}
            >
              Annuler
            </Button>
          </Modal.Footer> */}
        </Modal>

        {/* medicaments */}
        <div className="col-span-full xl:col-span-6  my-3  shadow-sm rounded-xl">
          <header className="flex justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
            <h2 className="font-semibold ">Medicaments</h2>
          </header>
          {[...notificationData.infos_produits_santes].filter((produit) => {
            return produit.type_produit === "medicament";
          }).length !== 0 ? (
            <div className="p-3 overflow-x-auto ">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Produit</Table.HeadCell>
                  <Table.HeadCell>Posologie</Table.HeadCell>

                  <Table.HeadCell className="whitespace-nowrap">
                    date de debut de prise
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    date de fin de prise
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    numero de lot
                  </Table.HeadCell>
                  <Table.HeadCell>provenance</Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    date de peremption
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {[...notificationData.infos_produits_santes]
                    .filter((produit) => {
                      return produit.type_produit === "medicament";
                    })
                    .map((medicament) => {
                      return (
                        <Table.Row
                            key={medicament.produit_sante_id}
                          className=" dark:border-gray-700 "
                        >
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.nom_produit}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.posologie}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.date_debut_prise}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.date_fin_prise}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.numero_lot}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.provenance}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.date_peremption}
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <h6 className="p-3 font-semibold ">
              Vous n'avez pas encore ajouté de produit de ce type
            </h6>
          )}
        </div>

        {/* vaccins */}
        <div className="col-span-full xl:col-span-6 my-3 shadow-sm rounded-xl">
          <header className="flex justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
            <h2 className="font-semibold ">Vaccins</h2>
          </header>
          {[...notificationData.infos_produits_santes].filter((produit) => {
            return produit.type_produit === "vaccin";
          }).length !== 0 ? (
            <div className="p-3 overflow-x-auto ">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Produit</Table.HeadCell>
                  <Table.HeadCell>provenance</Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Date d'ouverture du flacon
                  </Table.HeadCell>

                  <Table.HeadCell className="whitespace-nowrap">
                    Date de peremption
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Date de la vaccination
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Site d'administration
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Nombre de contact avec le vaccin
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Numero de lot du vaccin
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Nom du solvant utilisé
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Numero de lot du solvant
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    Date de peremption du solvant
                  </Table.HeadCell>
                </Table.Head>

                <Table.Body className="divide-y">
                  {[...notificationData.infos_produits_santes]
                    .filter((produit) => {
                      return produit.type_produit === "vaccin";
                    })
                    .map((medicament) => {
                      return (
                        <Table.Row
                            key={medicament.produit_sante_id}
                          className=" dark:border-gray-700 "
                        >
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.produit_sante_id}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.provenance}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.date_ouverture_flacon}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.date_peremption}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.date_vaccination}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.site_administration}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.nombre_contact_vaccin}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.numero_lot}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.nom_solvant}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.numero_lot_solvant}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {medicament.date_peremption_solvant}
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <h6 className="p-3 font-semibold ">
              Vous n'avez pas encore ajouté de produit de ce type
            </h6>
          )}
        </div>

        <div className="col-span-full xl:col-span-6  my-3  shadow-sm rounded-xl">
          <header className="flex justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
            <h2 className="font-semibold ">Autres</h2>
          </header>
          {[...notificationData.infos_produits_santes].filter((produit) => {
            return produit.type_produit === "autre";
          }).length !== 0 ? (
            <div className="p-3 overflow-x-auto ">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell>Produit</Table.HeadCell>
                  <Table.HeadCell>Posologie</Table.HeadCell>

                  <Table.HeadCell className="whitespace-nowrap">
                    date de debut de prise
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    date de fin de prise
                  </Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    numero de lot
                  </Table.HeadCell>
                  <Table.HeadCell>provenance</Table.HeadCell>
                  <Table.HeadCell className="whitespace-nowrap">
                    date de peremption
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {[...notificationData.infos_produits_santes]
                    .filter((produit) => {
                      return produit.type_produit === "autre";
                    })
                    .map((produit) => {
                      return (
                        <Table.Row
                            key={produit.produit_sante_id}
                          className=" dark:border-gray-700 "
                        >
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {produit.nom_produit}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {produit.posologie}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {produit.date_debut_prise}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {produit.date_fin_prise}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {produit.numero_lot}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {produit.provenance}
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {produit.date_peremption}
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                </Table.Body>
              </Table>
            </div>
          ) : (
            <h6 className="p-3 font-semibold ">
              Vous n'avez pas encore ajouté de produit de ce type
            </h6>
          )}
        </div>
      </div>
    </>
  );
};

export default FormChoixPS;
