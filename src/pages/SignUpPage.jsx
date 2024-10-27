import Logo from "@/images/logo.jpeg";
import {
  AtSign,
  BriefcaseBusiness,
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
} from "@material-tailwind/react";
// import { Button } from "flowbite-react";
import { useEffect, useState } from "react";

import FormChoixType from "@/components/FormChoixType";
import FormInfoPerso from "@/components/FormInfoPerso";
import FormIdentifiants from "@/components/FormIdentifiants";
import FormJustificatifs from "@/components/FormJustificatifs";



const SignUpPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  // useEffect(() => {
  //   console.log(userData);
  // });

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
    // specilité: "",
    // Est_point_focal: null,
    // district_lOCALITE: "",
    structure_travail: "",
    Adresse_structure: "",
    files: null,
  });
  const change = (e) => {
    // if (e.target.name==="files") {
    //   setUserData({ ...userData, [files]: e.target.files[0]})
    // }

    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const submit = () => {

    // console.log("hello ");
    
  

  };

  return (
    <>
      <section className=" mx-auto md:h-screen lg:py-0 ">
        <div className="flex flex-row items-center justify-center my-10  ">
          <img src={Logo} className="w-12 object-cover  h-12 rounded-full" />
          <h5 className="font-semibold my-4 mx-2 md:order-0 text-white">
            Sama pharmacovigile
          </h5>
        </div>
       
        <div className="flex justify-center  w-3/5 mx-auto  rounded-lg  dark:border   xl:p-0 bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className=" sm:pt-10">
            <h1 className="text-xl mb-5  font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Creation de compte
            </h1>
            <div className="w-96 mb-16  mx-16">
              <Stepper
                activeStep={activeStep}
                isLastStep={(value) => setIsLastStep(value)}
                isFirstStep={(value) => setIsFirstStep(value)}
              >
                <Step className="">
                  <UserRoundCog />

                  <div className="absolute -bottom-9 w-max text-center  ">
                    <Typography
                      variant="h6"
                      color={activeStep === 0 ? "light-blue" : "white"}
                    >
                      Type de compte
                    </Typography>
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
                      {/* Info <br /> supplementaire */}
                      Justificatif
                    </Typography>
                  </div>
                </Step>
              </Stepper>
            </div>
            <form className="mx-auto" 
            onSubmit={(e) => e.preventDefault()}
            >
              
              {activeStep === 0 ? <FormChoixType change={change} /> : null}

              {activeStep === 1 ? (
                <FormInfoPerso change={change} userData={userData} />
              ) : null}

              {activeStep === 2 ? <FormIdentifiants change={change} userData={userData}/> : null}

              {activeStep === 3 ? <FormJustificatifs change={change} userData={userData} /> : null}
            <div className="my-10  flex justify-between">
              <ButtonMT onClick={handlePrev} disabled={isFirstStep}>
                Précedent
              </ButtonMT>
              
              {
                isLastStep?
                 
                <ButtonMT  color="blue" onClick={submit} disabled={false}>
                Creer
              </ButtonMT>
             :

                <ButtonMT  onClick={handleNext} disabled={isLastStep}>
                Suivant
              </ButtonMT>}
            </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
