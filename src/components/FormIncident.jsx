import { Alert } from "flowbite-react";
import { Info } from "lucide-react";

const FormIncident = ({change,errors,notificationData}) => {
  return (
    <>
      <form className="mx-auto w-9/12" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 mx-auto  gap-14">
          <div>
            <label
              htmlFor="description_evenement"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>

            <textarea
              id="description_evenement"
              name="description_evenement"
              rows="1"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.description_evenement}
            ></textarea>
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
            {errors.date_apparition_evenement  && (
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
            {errors.date_disparition_evenement  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.date_disparition_evenement}
              </Alert>
            </div>
            )}
          </div>

          <div className="w-4/5">
            <label
                htmlFor="readministration"
              className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
            >
              Readministration
            </label>
            <div className="flex   justify-between">
              <input
                id="country-option-1"
                type="radio"
                name="readministration"
                value={"1"}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                // defaultChecked
                onChange={(e) => change(e)}
                defaultChecked={notificationData.readministration==="1"}
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
                name="readministration"
                value={"0"}
                onChange={(e) => change(e)}
                defaultChecked={notificationData.readministration==="0"}

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

            {errors.readministration  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.readministration}
              </Alert>
            </div>
            )}
          </div>
          <div className="w-4/5">
            <label
              //   htmlFor="reapparition_apres_readministration"
              className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ré apparition
            </label>
            <div className="flex   justify-between">
              <input
                id="country-option-1"
                type="radio"
                name="reapparition_apres_readministration"
                value={"1"}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                // defaultChecked
                defaultChecked={notificationData.reapparition_apres_readministration==="1"}

              />
              <label
                // for="country-option-1"
                className="block   text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Oui
              </label>
              <input
                // id="country-option-1"
                type="radio"
                name="reapparition_apres_readministration"
                value={"0"}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                // defaultChecked
                defaultChecked={notificationData.reapparition_apres_readministration==="0"}

              />
              <label
                // for="country-option-1"
                className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Non
              </label>
            </div>
            {errors.reapparition_apres_readministration  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.reapparition_apres_readministration}
              </Alert>
            </div>
            )}
          </div>
          <div className="w-4/5">
            <label
              //   htmlFor="date_disparition_evenement"
              className="block mb-5 text-sm font-medium text-gray-900 dark:text-white"
            >
              Traitement correcteur
            </label>
            <div className="flex   justify-between">
              <input
                // id="country-option-1"
                type="radio"
                name="traitement_correcteur"
                value={"1"}
                onChange={(e) => change(e)}
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                // defaultChecked
                defaultChecked={notificationData.traitement_correcteur==="1"}

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
                name="traitement_correcteur"
                value={"0"}
                // defaultChecked
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                // defaultChecked
                onChange={(e) => change(e)}
                defaultChecked={notificationData.traitement_correcteur==="0"}

              />
              <label
                // for="country-option-1"
                className="block  text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Non
              </label>
            </div>
            {errors.traitement_correcteur  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.traitement_correcteur}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="text_traitement_correcteur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description du traitement correcteur
            </label>

            <textarea
              id="text_traitement_correcteur"
              name="text_traitement_correcteur"
              rows="1"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.text_traitement_correcteur}

            ></textarea>
            {errors.text_traitement_correcteur  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.text_traitement_correcteur}
              </Alert>
            </div>
            )}
          </div>

          <div>
            <label
              htmlFor="suivi_patient"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Suivi du patient
            </label>
            <select
              id="suivi_patient"
              name="suivi_patient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => change(e)}
              defaultValue={notificationData.suivi_patient}

            >
              <option>{""}</option>
              <option value="suivi ambulatoire">Suivi ambulatoire</option>
              <option value="hospitalisation">Hospitalisation</option>
              <option value="référence">Référence</option>
            </select>
            {errors.suivi_patient  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.suivi_patient}
              </Alert>
            </div>
            )}
          </div>

          <div>
            <label
              htmlFor="evolution_situation_patient"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Evolution
            </label>
            <select
              id="evolution_situation_patient"
              name="evolution_situation_patient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => change(e)}
              defaultValue={notificationData.evolution_situation_patient}

            >
              <option>selectionner l'evolution</option>
              <option value="Favorable">Favorable</option>
              <option value="En cours de guérison">En cours de guérison</option>
              <option value="Guéri avec de séquelles">Guéri avec de séquelles</option>
              <option value="Guéri sans séquelles">Guéri sans séquelles</option>
              <option value="Non guéri">Non guéri</option>
              <option value="Inconnu">Inconnu</option>
              <option value="Fatale">Fatale</option>


            </select>
            {errors.evolution_situation_patient  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.evolution_situation_patient}
              </Alert>
            </div>
            )}
          </div>

          {/* <div>
            <label
              htmlFor="poids_patient"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Poids
            </label>
            <input
              type="text"
              id="poids_patient"
              name="poids_patient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              // onChange={(e) => change(e)}
              // defaultValue={userData.email}
            />
            {errors.email !== "" && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.email}
              </Alert>
            </div>
            )}
          </div> */}
        </div>
      </form>
    </>
  );
};

export default FormIncident;
