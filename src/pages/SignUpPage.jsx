import Logo from "@/images/logo.jpeg";
import { AtSign, BriefcaseBusiness, User, UserRoundCog } from "lucide-react";

import {
  Stepper,
  Step,
  Button,
  Typography,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import { useState } from "react";

export function SelectColors() {
  return (
    <div className="flex w-80 flex-col gap-6 ">
      <label
        htmlFor="type_compte"
        className="  text-sm font-medium text-gray-900 dark:text-white"
      >
        Veuillez séléctionner le tye de compte à créer
      </label>
      <Select
        color="blue"
        id="type_compte"
        className="text-white "
        label="Type de compte"
      >
        <Option>Consommateur</Option>
        <Option>Professionnel de la santé</Option>
        <Option>PRV exploitant</Option>
        <Option>Responsable d'organisme de reglementation</Option>
        {/* <Option>Material Tailwind Svelte</Option> */}
      </Select>
    </div>
  );
}

const SignUpPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <>
      <section className="">
        {/* bg-gray-50 dark:bg-gray-900 */}
        <div className="flex flex-col items-center justify-center mt-9  px-6 py-8  mx-auto md:h-screen ">
          <div className="flex justify-center  my-5 ">
            <img src={Logo} className="w-17 object-cover  h-12 rounded-full" />
            <h5 className="font-semibold my-4 mx-2 md:order-0 text-white">
              Sama pharmacovigile
            </h5>
          </div>
          {/*  w-12/12 w-80  md:h-screen lg:py-0 max-w-full */}
          <div
            id="cible"
            className="flex justify-center  w-3/5 mx-auto  rounded-lg  dark:border md:mt-0  xl:p-0 bg-white dark:bg-gray-800 dark:border-gray-700"
          >
            {/* sm:max-w-md */}
            <div className=" sm:p-8">
              {/* space-y-20 md:space-y-25 */}
              <h1 className="text-xl mb-5 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Creer votre compte
              </h1>

              <div className="w-96  mx-16    ">
                {/*mb-5 px-24 */}
                <Stepper
                  activeStep={activeStep}
                  isLastStep={(value) => setIsLastStep(value)}
                  isFirstStep={(value) => setIsFirstStep(value)}
                >
                  {/* bg-blue-600 */}
                  <Step className="mx-15">
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
                  <Step className="mx-15">
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
                  <Step className="mx-15">
                    <AtSign />
                    <div className="absolute -bottom-9 w-max text-center">
                      <Typography
                        variant="h6"
                        color={activeStep >= 2 ? "light-blue" : "white"}
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
                        Emploie
                      </Typography>
                    </div>
                  </Step>
                </Stepper>
                {/* <div className=" mt-32 flex justify-between">
        
      </div> */}
              </div>
              <form className=" mx-auto m-16 ">
                {/*mb-16 mb-16 space-y-4 md:space-y-6 */}

                {
                  activeStep===0?<SelectColors />:null
                  
                }

                {
                  activeStep===1?
                <div className="grid grid-cols-2 gap-8">
                  

                  <div>
                    <label
                      htmlFor="nom"
                      className=" text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nom
                    </label>

                    <Input
                      type="email"
                      id="nom"
                      color="blue"
                      className="text-white "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nom"
                      className=" text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Prenom
                    </label>

                    <Input
                      type="email"
                      id="nom"
                      color="blue"
                      className="text-white "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nom"
                      className=" text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Date de naissance
                    </label>

                    <Input
                      type="email"
                      id="nom"
                      color="blue"
                      className="text-white "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nom"
                      className=" text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Sexe
                    </label>

                    <Select
                      color="blue"
                      id="type_compte"
                      className="text-white "
                      
                    >
                      <Option>Homme</Option>
                      <Option>Femme</Option>
                      
                    </Select>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="nom"
                      className=" text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Adresse
                    </label>

                    <Input
                      type="email"
                      id="nom"
                      color="blue"
                      className="text-white "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nom"
                      className=" text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Numero de telephone
                    </label>

                    <Input
                      type="email"
                      id="nom"
                      color="blue"
                      className="text-white "
                      required
                    />
                  </div>
                </div>:null
                }


                {
                  activeStep===2?
                <div className="grid grid-cols-1 gap-8 ">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="nom"
                      color="blue"
                      className="text-white "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mot de passe 
                    </label>
                    <Input
                      type="password"
                      id="nom"
                      color="blue"
                      className="text-white "
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Confirmer mot de passe
                    </label>
                    <Input
                      type="password"
                      id="nom"
                      color="blue"
                      className="text-white "
                      required
                    />
                  </div>
                </div>:null
                }

              </form>
              <div className="mt-10  flex justify-between">
                <Button onClick={handlePrev} disabled={isFirstStep}>
                  Reculer
                </Button>
                <Button onClick={handleNext} disabled={isLastStep}>
                  Suivant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpPage;
