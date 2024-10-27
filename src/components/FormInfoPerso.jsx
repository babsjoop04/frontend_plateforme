

const FormInfoPerso = ({ change, userData }) => {
    return (
        <>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <label
            htmlFor="prenom"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Prenom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Babacar"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.prenom}
          />
        </div>
        <div>
          <label
            htmlFor="nom"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Diop"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.nom}
          />
        </div>
        <div>
          <label
            htmlFor="dateNaissance"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Date de naissance
          </label>
          <input
            type="date"
            id="dateNaissance"
            name="dateNaissance"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.dateNaissance}
          />
        </div>
        <div>
          <label
            htmlFor="sexe"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sexe
          </label>
          <select
            id="sexe"
            name="sexe"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => change(e)}
          >
            <option>{""}</option>
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="profession"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profession
          </label>
          <input
            type="text"
            id="profession"
            name="profession"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Etudiant"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.profession}
          />
        </div>
        <div>
          <label
            htmlFor="adresse"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Adresse
          </label>
          <input
            type="text"
            id="adresse"
            name="adresse"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="keur Massar"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.adresse}
          />
        </div>
        <div>
          <label
            htmlFor="telephone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Telephone
          </label>
          <input
            type="text"
            id="telephone"
            name="telephone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="keur Massar"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.telephone}
          />
        </div>
      </div>
    </>
    );
};

export default FormInfoPerso;