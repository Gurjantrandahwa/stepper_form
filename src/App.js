import Stepper from "./components/Stepper";
import React, {useState} from "react";
import StepperControl from "./components/StepperControl";
import Sidebar from "./components/Sidebar";
import SigningAgent from "./components/form/SigningAgent";
import SignerDetails from "./components/form/SignerDetails";
import SignerLocation from "./components/form/SignerLocation";
import Complete from "./components/form/Complete";
import {StepperContext} from "./components/context/StepperContext";
import {GrLinkNext} from "react-icons/gr";

function App() {
    const [currentStep, setCurrentStep] = useState(1)
    const [userData,setUserData]=useState('');
    const [finalData,setFinalData]=useState([])
    const steps = [
        "Signing Agent",
        "Details",
        "location",
        "complete"
    ]
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <SigningAgent/>;

            case 2:
                return <SignerDetails/>;

            case 3:
                return <SignerLocation/>;

            case 4:
                return <Complete/>
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;
        direction === "next" ? newStep++ : newStep--;
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
    }
    return <div className={"container my-4 flex border-r-2 border-b-8 border-purple-100 rounded-3xl relative mx-auto h-auto md:h-[95vh] "}>
        <Sidebar/>
        <div className={"p-4 h-full w-full flex flex-col"}>
            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
            <Stepper
                steps={steps}
                currentStep={currentStep}/>

            <div className={"my-2 overflow-auto flex-auto"}>
                <StepperContext.Provider value={{
                    userData:userData,
                    setUserData:setUserData,
                    finalData:finalData,
                    setFinalData:setFinalData
                }}>
                    <div className="">

                        {displayStep(currentStep)}
                    </div>


                </StepperContext.Provider>
            </div>
            <div className={` flex justify-end ${currentStep === 4 ? "hidden" : ""}`}>
                <div className="">
                    <button className={"flex items-center"}
                            onClick={() => handleClick("next")}>
                        <p className={"text-violet-900 font-bold mr-4 text-xl"}>
                            {currentStep === steps.length - 1 ? "Confirm" : "Next Step"}
                        </p>
                        <div className={"bg-yellow-200 p-2 rounded-full"}>
                            <GrLinkNext className={"text-violet-900 text-xl"}/>
                        </div>
                    </button>
                </div>

            </div>
        </div>

    </div>
}

export default App;