

const FormIdentifiants = ({ change , userData}) => {
    return (
        <>
      <div className="grid grid-cols-1 gap-8">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="exemple@gmail.com"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.email}

          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => change(e)}
            placeholder="••••••••"
            defaultValue={userData.password}

          />
        </div>
        <div>
          <label
            htmlFor="password_confirmation"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirmer votre mot de passe
          </label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            onChange={(e) => change(e)}
            defaultValue={userData.password_confirmation}

          />
        </div>
      </div>
    </>
    );
};

export default FormIdentifiants;