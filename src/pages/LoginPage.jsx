import Logo from "@/images/logo.jpeg";
import { LogIn } from "lucide-react";

const LoginPage = () => {
  return (
    <>
      <section className="">
        {/* bg-gray-50 dark:bg-gray-900 */}
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex justify-center  my-2 ">
            <img src={Logo} className="w-17 object-cover  h-12 rounded-full" />
            <h5 className="font-semibold my-4 mx-2 md:order-0 text-white">
              Sama pharmacovigile
            </h5>
          </div>
          <div className="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Se connecter
              </h1>
              <form className="space-y-4 md:space-y-6" >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
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
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className=" flex m-auto items-center gap-1 text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <LogIn />
                  <span>Se connecter</span>
                </button>
                
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Vous n'avez pas de compte ?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline decoration-blue-600 dark:text-primary-500"
                  >
                    Inscrivez vous
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        
      </section>

    </>
  );
};

export default LoginPage;
