import { Alert, Button } from "flowbite-react";
import { Asterisk, Info, MoveLeft, MoveRight } from "lucide-react";
import { useEffect } from "react";

const FormInfoPatient = ({notificationData,errors,change}) => {

//   useEffect(() =>{
// console.log(document.getElementById("sexe").value);

//   },[])
  return (
    <>
      <form className="mx-auto w-9/12" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 mx-auto  gap-14">
          <div>
            <label
              htmlFor="numero_dossier_patient"
              className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Numero de dossier patient *  
            </label>
              
            <input
              type="text"
              id="numero_dossier_patient"
              name="numero_dossier_patient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.numero_dossier_patient}
            />
            {errors.numero_dossier_patient && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.numero_dossier_patient}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="prenom_initiale"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Prenom ou initiale du patient *
            </label>
            <input
              type="text"
              id="prenom_initiale"
              name="prenom_initiale"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.prenom_initiale}
            />
            {errors.prenom_initiale && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.prenom_initiale}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="nom_initiale"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nom ou initiale du patient *
            </label>
            <input
              type="text"
              id="nom_initiale"
              name="nom_initiale"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.nom_initiale}
            />
            {errors.nom_initiale  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.nom_initiale}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="adresse_patient"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Adresse patient *
            </label>
            <input
              type="text"
              id="adresse_patient"
              name="adresse_patient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.adresse_patient}
            />
            {errors.adresse_patient  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.adresse_patient}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="tel_patient"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Telephone *
              
            </label>
            <input
              type="text"
              id="tel_patient"
              name="tel_patient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.tel_patient}
            />
            {errors.tel_patient && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.tel_patient}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="date_naissance_patient"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date de naissance *
            </label>
            <input
              type="date"
              id="date_naissance_patient"
              name="date_naissance_patient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.date_naissance_patient}
            />
            {errors.date_naissance_patient  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.date_naissance_patient}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="nom_initiale"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Sexe *
            </label>
            <select
              id="sexe"
              name="sexe"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => change(e)}
              defaultValue={notificationData.sexe}
            >
              <option>Veuillez selectionner votre sexe</option>
              <option value="homme" >Homme</option>
              <option value="femme">Femme</option>
            </select>
            {errors.sexe && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.sexe}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="antecedentsMedicaux_facteursRisques_facteursAssocies"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Antecedents medicaux, facteurs de risques et facteurs associes *
            </label>
            
            <textarea
              id="antecedentsMedicaux_facteursRisques_facteursAssocies"
              name="antecedentsMedicaux_facteursRisques_facteursAssocies"
              rows="1"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              defaultValue={notificationData.antecedentsMedicaux_facteursRisques_facteursAssocies}
            ></textarea>
            {errors.antecedentsMedicaux_facteursRisques_facteursAssocies && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.antecedentsMedicaux_facteursRisques_facteursAssocies}
              </Alert>
            </div>
            )}
          </div>
          {/* <div>
            <label
              htmlFor="poids_patient"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Poids  *
            </label>
            <input
              type="text"
              id="poids_patient"
              name="poids_patient"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
              // defaultValue={notificationData.email}
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

export default FormInfoPatient;
