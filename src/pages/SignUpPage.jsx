import Logo from "@/images/logo.jpeg";
import {
  AtSign,
  BriefcaseBusiness,
  CircleAlert,
  FilePen,
  LogIn,
  MoveLeft,
  MoveRight,
  Upload,
  User,
  UserRoundCog,
} from "lucide-react";

import {
  Stepper,
  Step,
  Button as ButtonMT,
  Typography,
  Select,
  Option,
  Input,
  Badge,
} from "@material-tailwind/react";
// import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";

import FormChoixType from "@/components/FormChoixType";
import FormInfoPerso from "@/components/FormInfoPerso";
import FormIdentifiants from "@/components/FormIdentifiants";
import FormJustificatifs from "@/components/FormJustificatifs";
import { Button, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [verification, setVerification] = useState(false);

  // useEffect(() => {
  //   console.log(errors);
  // });

  const navigate = useNavigate();

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  const [userData, setUserData] = useState({
    role_utilisateur: "",
    nom: "",
    prenom: "",
    sexe: "",
    adresse: "",
    telephone: "",
    profession: "",
    dateNaissance: "",
    email: "",
    password: "",
    password_confirmation: "",
    specilité: "",
    Est_point_focal: 0,
    district_localite: "",
    adresse_structure_travail: "",
    structure_travail: "",
    files: null,
  });

  const [traitement, setTraitement] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const [errors, setErros] = useState({});

  const change = (e) => {
    // return "hello"
    if (e.target.name === "files") {
      setUserData({ ...userData, files: e.target.files[0] });
      // console.log(e.target.files[0]);
      return;
    }

    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


  const submit = (e) => {
    setTraitement((value) => !value);
    setErros({});

    const formData = new FormData();

    for (const key in userData) {
      formData.append(key, userData[key]);
    }

    axios
      .post("/api/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // application/json;
        },
      })
      .then(function (response) {
        setTraitement((value) => !value);

        console.log(response);

        setOpenModal(true)

        // setTimeout(() => {
        //   navigate("/login");
        // }, 2500);
      })
      .catch(function (error) {
        setErros(error.response.data.errors);
        // console.log(error);
        
        setTraitement((value) => !value);
      });
  };

  return (
    <>
      <section className=" mx-auto  md:h-screen lg:py-0 ">
        <div className="flex flex-row items-center justify-center my-10  ">
          <img src={Logo} className="w-12 object-cover  h-12 rounded-full" />
          <h5 className="font-semibold my-4 mx-2 md:order-0 text-white">
            Sama pharmacovigile
          </h5>
        </div>
        <div className="flex flex-col  w-4/5 mx-auto  rounded-lg  dark:border   xl:p-0 bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className="w-auto mx-auto my-9  ">
            <h1 className="text-xl  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Creation de compte
            </h1>
          </div>

          <div className="w-3/5 mx-auto mb-20  ">
            {[
              "professionnel_sante",
              "PRV_exploitant",
              "responsable_organisme_reglementation",
            ].includes(userData.role_utilisateur) ? (
              <>
                <Stepper
                  activeStep={activeStep}
                  isLastStep={(value) => setIsLastStep(value)}
                  isFirstStep={(value) => setIsFirstStep(value)}
                >
                  <Step className="">
                    <UserRoundCog />

                    <div className="absolute -bottom-9 w-max text-center  ">
                      {/* <Badge placement="top-end"> */}
                      <Typography
                        variant="h6"
                        color={activeStep === 0 ? "light-blue" : "white"}
                      >
                        Type de compte
                      </Typography>
                      {/* </Badge> */}
                    </div>
                  </Step>
                  <Step className="">
                    <User />
                    <div className="absolute -bottom-9 w-max text-center">
                      <Typography
                        variant="h6"
                        color={activeStep === 1 ? "light-blue" : "white"}
                      >
                        Infos
                      </Typography>
                    </div>
                  </Step>
                  <Step className="">
                    <AtSign />
                    <div className="absolute -bottom-9 w-max text-center">
                      <Typography
                        variant="h6"
                        color={activeStep === 2 ? "light-blue" : "white"}
                      >
                        Identifiants
                      </Typography>
                    </div>
                  </Step>
                  <Step>
                    <BriefcaseBusiness />
                    <div className="absolute -bottom-9 w-max text-center">
                      <Typography
                        variant="h6"
                        color={activeStep === 3 ? "light-blue" : "white"}
                      >
                        Justificatif
                      </Typography>
                    </div>
                  </Step>
                </Stepper>
              </>
            ) : (
              <>
                <Stepper
                  activeStep={activeStep}
                  isLastStep={(value) => setIsLastStep(value)}
                  isFirstStep={(value) => setIsFirstStep(value)}
                >
                  <Step className="">
                    <UserRoundCog />

                    <div className="absolute -bottom-9 w-max text-center  ">
                      {/* <Badge placement="top-end"> */}
                      <Typography
                        variant="h6"
                        color={activeStep === 0 ? "light-blue" : "white"}
                      >
                        Type de compte
                      </Typography>
                      {/* </Badge> */}
                    </div>
                  </Step>
                  <Step className="">
                    <User />
                    <div className="absolute -bottom-9 w-max text-center">
                      <Typography
                        variant="h6"
                        color={activeStep === 1 ? "light-blue" : "white"}
                      >
                        Infos
                      </Typography>
                    </div>
                  </Step>
                  <Step className="">
                    <AtSign />
                    <div className="absolute -bottom-9 w-max text-center">
                      <Typography
                        variant="h6"
                        color={activeStep === 2 ? "light-blue" : "white"}
                      >
                        Identifiants
                      </Typography>
                    </div>
                  </Step>
                </Stepper>
              </>
            )}
            {/* </Stepper> */}
          </div>
          <form className="mx-auto w-7/12" onSubmit={(e) => e.preventDefault()}>
            {activeStep === 0 ? (
              <FormChoixType
                change={change}
                errors={errors}
                userData={userData}
              />
            ) : null}

            {activeStep === 1 ? (
              <FormInfoPerso
                change={change}
                userData={userData}
                errors={errors}
              />
            ) : null}

            {activeStep === 2 ? (
              <FormIdentifiants
                change={change}
                userData={userData}
                errors={errors}
              />
            ) : null}

            {activeStep === 3 ? (
              <FormJustificatifs
                change={change}
                userData={userData}
                errors={errors}
              />
            ) : null}

            <div className="my-10 w-4/5 mx-auto  flex justify-between">
              <Button
                color="blue"
                size="sm"
                disabled={isFirstStep}
                onClick={handlePrev}
              >
                {/* {!traitement && <FilePen />} */}

                <MoveLeft />
              </Button>

              {isLastStep ? (
                <Button
                  color="blue"
                  size="sm"
                  isProcessing={traitement}
                  onClick={(e) => submit(e)}
                >
                  {!traitement && <FilePen />}

                  <span className="ml-1">Creer</span>
                </Button>
              ) : (
                <Button
                  color="blue"
                  size="sm"
                  isProcessing={traitement}
                  onClick={handleNext}
                >
                  <MoveRight />
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
      <Modal
        show={openModal}
        onClose={() => {
          setOpenModal(false);
          navigate("/login");
        }}
      >
        <Modal.Header>Message</Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <CircleAlert className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Votre compte a été créé avec succès
            </p>
            <p className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              <Link
                to={"/login"}
                className="hover:underline decoration-indigo-600"
              >
                {/* <Button className="flex items-center gap-3 bg-indigo-500">
                  <LogIn /> */}
                Connectez vous !!
                {/* </Button> */}
              </Link>
            </p>
          </div>
        </Modal.Body>

        <Modal.Footer className="flex justify-end"></Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUpPage;
