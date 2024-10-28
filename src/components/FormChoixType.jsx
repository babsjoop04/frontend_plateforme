import { Alert } from "flowbite-react";
import { Info } from "lucide-react";

const FormChoixType = ({ change, errors }) => {
  return (
    <>
      <div className="flex w-3/5 m-auto  flex-col gap-3 ">
        <label
          htmlFor="role_utilisateur"
          className="mx-auto  text-sm font-medium text-gray-900 dark:text-white"
        >
          Veuillez séléctionner le type de compte à créer
        </label>

        <select
          id="role_utilisateur"
          name="role_utilisateur"
          required
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => change(e)}
        >
          <option>{""}</option>
          <option value="consommateur">Consommateur</option>
          <option value="professionnel_sante">Professionnel de la santé</option>
          <option value="PRV_exploitant">PRV exploitant</option>
          <option value="responsable_organisme_reglementation">
            Responsable d'organisme de reglementation
          </option>
        </select>
        {errors.role_utilisateur !== "" && (
          <div className="  text-sm font-medium  ">
            <Alert color="failure" icon={Info}>
              {errors.role_utilisateur}
            </Alert>
          </div>
        )}
      </div>
    </>
  );
};

export default FormChoixType;
