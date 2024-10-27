

const FormJustificatifs = ({ change }) => {
    return (
        <>
      <div className="grid grid-cols-1 gap-8">
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
          />
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
          />
        </div>

        <div>
          <label
            htmlFor="files"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Fichiers justificatifs
          </label>
          <p className="text-xs  ">
            Vous devrez fournir :
            <br /> * une photocopie legalisée de la carte professionnelle
            délivrée par
            <br /> l'ordre professionnel d'appartenance
            <br /> * une photocopie legalisée de la carte professionnelle
            délivrée par <br /> l'établissement de santé ou la strructure
            <br /> * une photocopie legalisée du contrat de travail signé avec{" "}
            <br /> l'établissement de santé ou la structure
          </p>

          <p className="text-xs ">
            NB : Les fichiers doivent etre compressés au format Zip (Taille max.
            )
          </p>
          <input
            type="file"
            id="files"
            name="files"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => change(e)}
          />
        </div>
      </div>
    </>
    );
};

export default FormJustificatifs;