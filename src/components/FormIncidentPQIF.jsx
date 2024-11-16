import { Alert } from "flowbite-react";
import { Info } from "lucide-react";

const FormIncidentPQIF = ({ change, notificationData, errors }) => {
  return (
    <>
      <form className="mx-auto w-9/12" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 mx-auto  gap-14">
          <div>
            <label
              htmlFor="date_survenue_incident"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date de survenue de l'incident *
            </label>
            <input
              type="date"
              // id="date_survenue_incident"
              name="date_survenue_incident"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              // defaultValue="00/00/0000"
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.date_survenue_incident}
            />
            {errors.date_survenue_incident && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.date_survenue_incident}
                </Alert>
              </div>
            )}
          </div>

          <div className="">
            <label
              htmlFor="moment_detection_incident"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Moment de la detection de l'incident *
            </label>

            <select
              // id="moment_detection_incident"
              name="moment_detection_incident"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => change(e)}
              defaultValue={notificationData.moment_detection_incident}
            >
              <option>Selectionnez le moment</option>
              <option value="Avant administration du produit">
                Avant administration du produit
              </option>
              <option value="Pendant administration du produit">
                Pendant administration du produit
              </option>
              <option value="Apres administration du produit">
                Apres administration du produit
              </option>
            </select>
            {errors.moment_detection_incident && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.moment_detection_incident}
                </Alert>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="nature_incident"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nature de l'incident *
            </label>
            <input
              type="text"
              // id="nature_incident"
              name="nature_incident"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.nature_incident}
            />
            {errors.nature_incident && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.nature_incident}
                </Alert>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="circonstances_incident"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Circonstances de l'incident *
            </label>
            <input
              type="text"
              id="circonstances_incident"
              name="circonstances_incident"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.circonstances_incident}
            />
            {errors.circonstances_incident && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.circonstances_incident}
                </Alert>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="mesure_prise"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mesure prise *
            </label>
            <input
              type="text"
              id="mesure_prise"
              name="mesure_prise"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.mesure_prise}
            />
            {errors.mesure_prise && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.mesure_prise}
                </Alert>
              </div>
            )}
          </div>

          <div className="w-4/5">
            <label
              htmlFor="consequence_clinique"
              className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
            >
              Conséquence(s) clinique(s) sur le patient et/ou l’utilisateur ? *
            </label>
            <div className="flex   justify-between">
              <input
                id="country-option-1"
                type="radio"
                name="consequence_clinique"
                value={"1"}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                // defaultChecked
                onChange={(e) => change(e)}
                defaultChecked={notificationData.consequence_clinique === "1"}
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
                name="consequence_clinique"
                value={"0"}
                onChange={(e) => change(e)}
                defaultChecked={notificationData.consequence_clinique === "0"}
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

            {errors.consequence_clinique && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.consequence_clinique}
                </Alert>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="description_evenement"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description de l'evenement
            </label>
            <input
              type="text"
              id="description_evenement"
              name="description_evenement"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.description_evenement}
            />
            {errors.description_evenement && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.description_evenement}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="date_apparition_evenement"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date d'apparition de l'evenement
            </label>
            <input
              type="date"
              id="date_apparition_evenement"
              name="date_apparition_evenement"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.date_apparition_evenement}
            />
            {errors.date_apparition_evenement && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.date_apparition_evenement}
                </Alert>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="date_disparition_evenement"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date de disparition de l'evenement
            </label>
            <input
              type="date"
              id="date_disparition_evenement"
              name="date_disparition_evenement"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.date_disparition_evenement}
            />
            {errors.date_disparition_evenement && (
              <div className="  my-2 text-sm font-medium  ">
                <Alert color="failure" icon={Info}>
                  {errors.date_disparition_evenement}
                </Alert>
              </div>
            )}
          </div>
          {/* <div className="col-span-2 ">
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
                <option value={1}>Suivi ambulatoire</option>
              </optgroup>
            </select>
          </div> */}
        </div>
      </form>
    </>
  );
};

export default FormIncidentPQIF;
