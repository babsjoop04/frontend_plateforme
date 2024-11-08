import { Alert } from "flowbite-react";
import { Info } from "lucide-react";

const FormChoixPSPQIF = ({ change, notificationData, errors }) => {
  return (
    <>
      <form className="mx-auto w-9/12" onSubmit={(e) => e.preventDefault()}>
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
              onChange={(e) => change(e)}
              defaultValue={notificationData.produit_sante_id}
            >
              <optgroup label="Medicament">
                <option>{""}</option>
                <option value={1}>Suivi ambulatoire</option>
              </optgroup>
            </select>
            {errors.produit_sante_id && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  Veuillez choisir un produit
                </Alert>
              </div>
            )}
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
              onChange={(e) => change(e)}
              defaultValue={notificationData.provenance}
            >
              <option>{""}</option>
              <option value="Officine">Officine</option>
              <option value="Centre de santé">Centre de santé</option>
              <option value="Poste de santé">Poste de santé</option>
              <option value="Hôpital">Hôpital</option>
              <option value="Herboristerie">Herboristerie</option>
            </select>
            {errors.provenance && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.provenance}
                </Alert>
              </div>
            )}
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
              onChange={(e) => change(e)}
              defaultValue={notificationData.date_peremption}
            />
            {errors.date_peremption && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.date_peremption}
                </Alert>
              </div>
            )}
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
              onChange={(e) => change(e)}
              defaultValue={notificationData.numero_lot}
            />
            {errors.numero_lot && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.numero_lot}
                </Alert>
              </div>
            )}
          </div>
          <div className="w-4/5">
            <label
              htmlFor="echantillon_conserve"
              className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
            >
              L’échantillon concerné a-t-il été conservé
            </label>
            <div className="flex   justify-between">
              <input
                id="country-option-1"
                type="radio"
                name="echantillon_conserve"
                value={"1"}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                // defaultChecked
                onChange={(e) => change(e)}
                defaultChecked={notificationData.echantillon_conserve === "1"}
              />
              <label
                // for="country-option-1"
                className="block   text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Oui
              </label>
              <input
                id="country-option-1"
                type="radio"
                name="echantillon_conserve"
                value={"0"}
                onChange={(e) => change(e)}
                defaultChecked={notificationData.echantillon_conserve === "0"}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                // defaultChecked
              />
              <label
                // for="country-option-1"
                className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Non
              </label>
            </div>

            {errors.echantillon_conserve && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.echantillon_conserve}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="prenom_detenteur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Prenom du detenteur de l'echantillon
            </label>
            <input
              type="text"
              id="prenom_detenteur"
              name="prenom_detenteur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.prenom_detenteur}
            />
            {errors.prenom_detenteur && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.prenom_detenteur}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="nom_detenteur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nom du detenteur de l'echantillon
            </label>
            <input
              type="text"
              id="nom_detenteur"
              name="nom_detenteur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.nom_detenteur}
            />
            {errors.nom_detenteur && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.nom_detenteur}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="tel_detenteur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Telephone du detenteur de l'echantillon *
            </label>
            <input
              type="text"
              id="tel_detenteur"
              name="tel_detenteur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.tel_detenteur}
            />
            {errors.tel_detenteur && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.tel_detenteur}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="email_detenteur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email du detenteur de l'echantillon *
            </label>
            <input
              type="text"
              id="email_detenteur"
              name="email_detenteur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.email_detenteur}
            />
            {errors.email_detenteur && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.email_detenteur}
                </Alert>
              </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default FormChoixPSPQIF;
