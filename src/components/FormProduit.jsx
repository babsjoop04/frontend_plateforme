import { Alert, Button } from "flowbite-react";
import { CirclePlus, Info } from "lucide-react";

const FormProduit = ({ change, errors, defaultValues, submit }) => {
  return (
    <div className="col-span-full xl:col-span-6 mt-5">
      <form className="mx-auto w-9/12" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 mx-auto  gap-14">
          <div>
            <label
              htmlFor="nom_produit"
              className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nom du produit *
            </label>

            <input
              type="text"
              id="nom_produit"
              name="nom_produit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              defaultValue={defaultValues.nom_produit}
              required
              onChange={(e) => change(e)}
            />
            {errors.nom_produit && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.nom_produit}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="type_produit"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Type de produit *
            </label>
            <select
              id="sexe"
              name="type_produit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => change(e)}
              // defaultValue={notificationData.sexe}
              defaultValue={defaultValues.type_produit}
            >
              <option>Veuillez selectionner votre sexe</option>
              <option value="medicament">Medicament</option>
              <option value="vaccin">Vaccin</option>
              <option value="autre">Autre</option>
            </select>
            {errors.type_produit && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.type_produit}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="numero_AMM"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Numero d'autorisation de mise sur le marché (AMM) *
            </label>
            <input
              type="text"
              id="numero_AMM"
              name="numero_AMM"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              defaultValue={defaultValues.numero_AMM}
              required
              onChange={(e) => change(e)}
              // defaultValue={notificationData.prenom_initiale}
            />
            {errors.numero_AMM && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.numero_AMM}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="date_début"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date de debut
            </label>
            <input
              type="date"
              id="date_début"
              name="date_début"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => change(e)}
              // defaultValue={userData.dateNaissance}
              defaultValue={defaultValues.date_début}
            />
            {errors.date_début && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.date_début}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="prix_public"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Prix public *
            </label>
            <input
              type="text"
              id="prix_public"
              name="prix_public"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              // defaultValue={notificationData.prenom_initiale}
              defaultValue={defaultValues.prix_public}
            />
            {errors.prix_public && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.prix_public}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="DCI"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Denomination commune internationale (DCI) *
            </label>
            <input
              type="text"
              id="DCI"
              name="DCI"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={defaultValues.DCI}

              // defaultValue={notificationData.nom_initiale}
            />
            {errors.DCI && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.DCI}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="dosage"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Dosage *
            </label>
            <input
              type="text"
              id="dosage"
              name="dosage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={defaultValues.dosage}

              // defaultValue={notificationData.adresse_patient}
            />
            {errors.dosage && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.dosage}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="conditionnement"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Conditionnement *
            </label>
            <input
              type="text"
              id="conditionnement"
              name="conditionnement"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={defaultValues.conditionnement}

              // defaultValue={notificationData.adresse_patient}
            />
            {errors.conditionnement && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.conditionnement}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="forme_galénique"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Forme galénique *
            </label>
            <input
              type="text"
              id="forme_galénique"
              name="forme_galénique"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={defaultValues.forme_galénique}

              // defaultValue={notificationData.adresse_patient}
            />
            {errors.forme_galénique && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.forme_galénique}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="laboratoire"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Laboratoire *
            </label>
            <input
              type="text"
              id="laboratoire"
              name="laboratoire"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={defaultValues.laboratoire}

              // defaultValue={notificationData.adresse_patient}
            />
            {errors.laboratoire && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.laboratoire}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="voie_administration"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Voie d'administration *
            </label>
            <input
              type="text"
              id="voie_administration"
              name="voie_administration"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={defaultValues.voie_administration}

              // defaultValue={notificationData.adresse_patient}
            />
            {errors.voie_administration && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.voie_administration}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="classe_thérapeutique"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Classe thérapeutique *
            </label>
            <input
              type="text"
              id="classe_thérapeutique"
              name="classe_thérapeutique"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={defaultValues.classe_thérapeutique}

              // defaultValue={notificationData.adresse_patient}
            />
            {errors.classe_thérapeutique && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.classe_thérapeutique}
                </Alert>
              </div>
            )}
          </div>
          <div className="col-span-2">
            <label
              htmlFor="files"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Photo du produit
            </label>

            <input
              type="file"
              id="file_img_produit"
              name="file_img_produit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              accept=".png,.jpg,jpeg"
              onChange={(e) => change(e)}
              // defaultValue={userData.files}
            />
            {errors.file_img_produit  && (
                            <div className="  my-2 text-sm font-medium  ">
                              <Alert color="failure" icon={Info}>
                                {errors.file_img_produit}
                              </Alert>
                            </div>
                          )}
          </div>

          <div className="col-span-2">
            <label
              htmlFor="files"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Notice du produit
            </label>

            <input
              type="file"
              id="file_notice_produit"
              name="file_notice_produit"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              accept=".pdf,.txt"
              onChange={(e) => change(e)}
              // defaultValue={userData.files}
            />
            {errors.file_notice_produit  && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.file_notice_produit}
                </Alert>
              </div>
            )}
          </div>

          {/* <div className=" col-span-2 mx-auto">
            <Button
              color="blue"
              size="sm"
              // type="submit"
              // disabled={isFirstStep}
              onClick={() => {
                //     setErrors({});
                //     creerProduit();
                submit();
              }}
            >
              {!traitement && <FilePen />}
              Ajouter
              <CirclePlus className="ml-2" />
            </Button>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default FormProduit;
