import Logo from "@/images/logo.jpeg";
import { LogIn } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button,Alert } from "flowbite-react";
import { Info } from "lucide-react";


import { useSelector, useDispatch } from "react-redux";

import { connection } from "@/redux/stateSlice/user/userSlice";
import { useAuthProvider } from "../utils/AuthContext";

const LoginPage = () => {
  const [identifiants, setIdentifiants] = useState({
    email: "",
    password: "",
  });
  const [traitement, setTraitement] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // useEffect(() => {
  //   console.log(errors);
  // });

  const navigate = useNavigate();

  // const dispatch = useDispatch();
  const { currentUser, changeCurrentUser } = useAuthProvider();


  const change = (e) => {
    setIdentifiants({ ...identifiants, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    if (identifiants.email !== "" && identifiants.email !== "") {
      setTraitement((value) => !value);

      setErrors({
        email: "",
        password: "",
      });

      axios
        .post("/api/login", identifiants, {
          headers: {
            "Content-Type": "application/json",
            // application/json multipart/form-data;
          },
        })
        .then(function (response) {
          setTraitement((value) => !value);

          // console.log(response);

          if (response.statusText==="OK") {

            changeCurrentUser(response.data)
            
          }
          


          // dispatch(
          //   connection({
          //     infos: response.data.user,
          //     token: response.data.token,
          //     // }
          //   })
          // );

          // console.log(user);

          setTimeout(() => {
            navigate("/");
          }, 1500);
        })
        .catch(function (error) {
          const responseErrors = error.response.data.errors;


          setErrors(responseErrors);

          setTraitement((value) => !value);

        });
    }
  };

  return (
    <>
      <section className="">
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
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
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
                    required
                    onChange={(e) => change(e)}
                  />
                  {errors.email && (
                    <div className="  my-2 text-sm font-medium  ">
                      <Alert color="failure" icon={Info}>
                        {errors.email}
                      </Alert>
                    </div>
                  )}
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
                    required
                    onChange={(e) => change(e)}
                  />
                  {errors.password && (
                    <div className="  my-2 text-sm font-medium  ">
                      <Alert color="failure" icon={Info}>
                        {errors.password}
                      </Alert>
                    </div>
                  )}
                </div>

                <Button
                  // type="submit"
                  color="blue"
                  size="sm"
                  isProcessing={traitement}
                  className="m-auto"
                  // className=" flex m-auto items-center gap-1 text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={(e) => submit(e)}
                >
                  {!traitement && <LogIn />}

                  <span className="mx-2">Se connecter</span>
                </Button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Vous n'avez pas de compte ?{" "}
                  <Link
                    to={"/signup"}
                    className="hover:underline decoration-indigo-600"
                  >
                    Inscrivez vous
                  </Link>
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
