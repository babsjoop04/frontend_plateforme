import { FileInput, Label } from "flowbite-react";
import { Alert } from "flowbite-react";
import { Info } from "lucide-react";


const FormJustificatifs = ({ change, userData,errors }) => {
  return (
    <>
      <div className="grid w-4/5 mx-auto grid-cols-1 gap-8">
        <div>
          <label
            htmlFor="specilité"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre spécialité
          </label>
          <input
            type="text"
            id="specilité"
            name="specilité"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            onChange={(e) => change(e)}
            defaultValue={userData.specilité}
          />
          {errors.specilité  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.specilité}
              </Alert>
            </div>
          )}
        </div>
        {
          userData.role_utilisateur==="professionnel_sante" &&
        <div>
          <label
            htmlFor="district_localite"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Votre district/localité
          </label>
          <input
            type="text"
            id="district_localite"
            name="district_localite"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            onChange={(e) => change(e)}
            defaultValue={userData.district_localite}
          />
          {errors.district_localite  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.district_localite}
              </Alert>
            </div>
          )}
        </div>
        }
        <div>
          <label
            htmlFor="structure_travail"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom de la structure
          </label>
          <input
            type="text"
            id="structure_travail"
            name="structure_travail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
            onChange={(e) => change(e)}
            defaultValue={userData.structure_travail}
          />
          {errors.structure_travail  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.structure_travail}
              </Alert>
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="adresse_structure_travail"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Adresse de la structure
          </label>
          <input
            type="text"
            id="adresse_structure_travail"
            name="adresse_structure_travail"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Keur Massar"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.adresse_structure_travail}
          />
          {errors.adresse_structure_travail  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.adresse_structure_travail}
              </Alert>
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="files"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fichiers justificatifs
          </label>
          <p className="text-xs mb-3 ">
            Vous devrez fournir :
            <br /> * une photocopie legalisée de la carte professionnelle
            délivrée par
            <br /> l'ordre professionnel d'appartenance
            <br /> * une photocopie legalisée de la carte professionnelle
            délivrée par <br /> l'établissement de santé ou la strructure
            <br /> * une photocopie legalisée du contrat de travail signé avec{" "}
            <br /> l'établissement de santé ou la structure
            <br />
            NB : Les fichiers doivent etre compressés au format Zip (Taille max.
            )
          </p>

          <input
            type="file"
            id="files"
            name="files"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            accept=".zip"
            onChange={(e) => change(e)}
            defaultValue={userData.files}
          />
          {errors.files  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.files}
              </Alert>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default FormJustificatifs;
