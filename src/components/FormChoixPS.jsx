import { Step, Stepper, Typography } from "@material-tailwind/react";
import { Alert, Button, Modal, Table } from "flowbite-react";
import { Info, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const FormChoixPS = ({ change,notificationData,setNotificationData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalVaccin, setOpenModalVaccin] = useState(false);
  const [openModalAutres, setOpenModalAutres] = useState(false);

  const [produit, setProduit] = useState({
    produit_sante_id: null,
    numero_lot: "",
    provenance: "",
    date_peremption: "",

    date_debut_prise: "",
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

  useEffect(() => {
    console.log(produit);
  });

  const changeProduit = (e) => {
    // console.log(e.target.name, e.target.value);
    setProduit((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const createProduit=()=>{

    setNotificationData((prevState) => {
      return { ...prevState, infos_produits_santes:[...prevState.infos_produits_santes,produit] };
    })

    setOpenModal(false)

    // console.log({ ...notificationData, infos_produits_santes:[...notificationData.infos_produits_santes,produit] });
    

  }

  // const [activeStep, setActiveStep] = useState(0);
  // const [isLastStep, setIsLastStep] = useState(false);
  // const [isFirstStep, setIsFirstStep] = useState(false);

  // const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  // const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 px-10 py-10 ">
        <div className="col-span-full  xl:col-span-6">
          <label
            htmlFor="motif_prise_produits_sante"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Pour quelle(s) pathologie(s) les produits ci-dessous ont été
            prescrit(s) ?
          </label>

          <textarea
            // id="motif_prise_produits_sante"
            name="motif_prise_produits_sante"
            rows="1"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            onChange={(e) => change(e)}
          ></textarea>
          {/* {errors.email !== "" && ( */}
          {/* <div className="  my-2 text-sm font-medium  ">
            <Alert color="failure" icon={Info}>
              {errors.email}
            </Alert>
          </div> */}
          {/* )} */}
        </div>
        {/* medicaments */}
        <div className="col-span-full xl:col-span-6  my-3  shadow-sm rounded-xl">
          <header className="flex justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
            <h2 className="font-semibold ">Medicaments</h2>
            <Button
              color="blue"
              size="sm"
              onClick={() => setOpenModal(true)}

              // disabled={isFirstStep}
              // onClick={handlePrev}
            >
              <Plus />
            </Button>
            {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Formulaire d'ajout de produit</Modal.Header>
              <Modal.Body>
                {/*  */}
                <form
                  className="space-y-6 mx-auto w-9/12"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-2 mx-auto  gap-14">
                    <div className="col-span-2 ">
                      <label
                        htmlFor="produit_sante_id"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Produit
                      </label>

                      <select
                        // id="suivi_patient"
                        name="produit_sante_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => changeProduit(e)}
                      >
                        <optgroup label="Medicament">
                          <option>{""}</option>
                          <option value={1}>
                            Suivi ambulatoire
                          </option>
                        </optgroup>
                      </select>
                    </div>

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
                        // defaultValue={userData.email}
                      />
                    </div>

                    {/* medicament seulement */}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
                      />
                    </div>
                  </div>
                </form>
              </Modal.Body>

              <Modal.Footer className="flex justify-end">
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
                  onClick={() => setOpenModal(false)}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
          </header>
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
                <Table.Row
                  //   key={id}
                  className=" dark:border-gray-700 "
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>

        {/* vaccins */}
        <div className="col-span-full xl:col-span-6 my-3 shadow-sm rounded-xl">
          <header className="flex justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
            <h2 className="font-semibold ">Vaccins</h2>
            <Button
              color="blue"
              size="sm"
              onClick={() => setOpenModalVaccin(true)}

              // disabled={isFirstStep}
              // onClick={handlePrev}
            >
              <Plus />
            </Button>
            {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
            <Modal
              show={openModalVaccin}
              onClose={() => setOpenModalVaccin(false)}
            >
              <Modal.Header>Formulaire d'ajout de produit</Modal.Header>
              <Modal.Body>
                {/*  */}
                <form
                  className="space-y-6 mx-auto w-9/12"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-2 mx-auto  gap-14">
                    <div className="col-span-2 ">
                      <label
                        htmlFor="produit_sante_id"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Produit
                      </label>

                      <select
                        // id="suivi_patient"
                        name="produit_sante_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => changeProduit(e)}
                      >
                        <optgroup label="Medicament">
                          <option>{""}</option>
                          <option value="suivi ambulatoire">
                            Suivi ambulatoire
                          </option>
                        </optgroup>
                      </select>
                    </div>

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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
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
                        // defaultValue={userData.email}
                      />
                    </div>
                  </div>
                </form>
              </Modal.Body>

              <Modal.Footer className="flex justify-end">
                <Button
                  className="mx-2"
                  color="blue"
                  onClick={() => setOpenModalVaccin(false)}
                >
                  Ajouter
                </Button>
                <Button
                  className="mx-2"
                  color="gray"
                  onClick={() => setOpenModalVaccin(false)}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
          </header>
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
                <Table.Row
                  //   key={id}
                  className=" dark:border-gray-700 "
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>

        {/* autres */}
        <div className="col-span-full xl:col-span-6 my-3 shadow-sm rounded-xl">
          <header className="flex justify-between px-5 py-4 border-b border-gray-100 dark:border-gray-700/60">
            <h2 className="font-semibold ">Autres</h2>
            <Button
              color="blue"
              size="sm"
              onClick={() => setOpenModalAutres(true)}

              // disabled={isFirstStep}
              // onClick={handlePrev}
            >
              <Plus />
            </Button>
            {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
            <Modal
              show={openModalAutres}
              onClose={() => setOpenModalAutres(false)}
            >
              <Modal.Header>Formulaire d'ajout de produit</Modal.Header>
              <Modal.Body>
                {/*  */}
                <form
                  className="space-y-6 mx-auto w-9/12"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-2 mx-auto  gap-14">
                    <div className="col-span-2 ">
                      <label
                        htmlFor="produit_sante_id"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Produit
                      </label>

                      <select
                        // id="suivi_patient"
                        name="produit_sante_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => changeProduit(e)}
                      >
                        <optgroup label="Medicament">
                          <option>{""}</option>
                          <option value="suivi ambulatoire">
                            Suivi ambulatoire
                          </option>
                        </optgroup>
                      </select>
                    </div>

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
                        required
                        onChange={(e) => changeProduit(e)}
                      ></textarea>
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
                        // defaultValue={userData.email}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="numero_lot"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Numero de lot du produit
                      </label>
                      <input
                        type="text"
                        // id="numero_lot"
                        name="numero_lot"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder=""
                        required
                        onChange={(e) => changeProduit(e)}
                        // defaultValue={userData.email}
                      />
                    </div>
                  </div>
                </form>
              </Modal.Body>

              <Modal.Footer className="flex justify-end">
                <Button
                  className="mx-2"
                  color="blue"
                  onClick={() => setOpenModalAutres(false)}
                >
                  Ajouter
                </Button>
                <Button
                  className="mx-2"
                  color="gray"
                  onClick={() => setOpenModalAutres(false)}
                >
                  Annuler
                </Button>
              </Modal.Footer>
            </Modal>
          </header>
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
                <Table.Row
                  //   key={id}
                  className=" dark:border-gray-700 "
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {/* {role_utilisateur} */}
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormChoixPS;
