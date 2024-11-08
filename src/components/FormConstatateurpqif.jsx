import { Alert } from "flowbite-react";
import { Info } from "lucide-react";

const FormConstatateurpqif = ({ change,notificationData,errors }) => {
  return (
    <>
      <form className="mx-auto w-9/12" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 mx-auto  gap-14">
          <div>
            <label
              htmlFor="prenom_constatateur"
              className="block  mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Prenom *
            </label>

            <input
              type="text"
              id="prenom_constatateur"
              name="prenom_constatateur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              onChange={(e) => change(e)}
                defaultValue={notificationData.prenom_constatateur}
            />
            {errors.prenom_constatateur && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.prenom_constatateur}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="nom_constatateur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nom *
            </label>
            <input
              type="text"
              id="nom_constatateur"
              name="nom_constatateur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
                onChange={(e) => change(e)}
                defaultValue={notificationData.nom_constatateur}
            />
            {errors.nom_constatateur && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.nom_constatateur}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="adresse_constatateur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Adresse *
            </label>
            <input
              type="text"
              id="adresse_constatateur"
              name="adresse_constatateur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
                onChange={(e) => change(e)}
                defaultValue={notificationData.adresse_constatateur}
            />
            {errors.adresse_constatateur  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.adresse_constatateur}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="tel_constatateur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Telephone *
            </label>
            <input
              type="text"
              id="tel_constatateur"
              name="tel_constatateur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
                onChange={(e) => change(e)}
                defaultValue={notificationData.tel_constatateur}
            />
            {errors.tel_constatateur  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.tel_constatateur}
              </Alert>
            </div>
            )}
          </div>

          <div>
            <label
              htmlFor="email_constatateur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email *
            </label>
            <input
              type="email"
              id="email_constatateur"
              name="email_constatateur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
                onChange={(e) => change(e)}
                defaultValue={notificationData.email_constatateur}
            />
            {errors.email_constatateur  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.email_constatateur}
              </Alert>
            </div>
            )}
          </div>

          <div>
            <label
              htmlFor="profession_constatateur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Profession *
            </label>
            <input
              type="text"
              id="profession_constatateur"
              name="profession_constatateur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
                onChange={(e) => change(e)}
                defaultValue={notificationData.profession_constatateur}
            />
            {errors.profession_constatateur  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.profession_constatateur}
              </Alert>
            </div>
            )}
          </div>
          <div>
            <label
              htmlFor="lieu_travail_constatateur"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Lieu de travail *
            </label>
            <input
              type="text"
              id="lieu_travail_constatateur"
              name="lieu_travail_constatateur"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
                onChange={(e) => change(e)}
                defaultValue={notificationData.lieu_travail_constatateur}
            />
            {errors.lieu_travail_constatateur  && (
            <div className="  my-2 text-sm font-medium  ">
              <Alert color="failure" icon={Info}>
                {errors.lieu_travail_constatateur}
              </Alert>
            </div>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

// {/* a transferer */}
//

export default FormConstatateurpqif;
