import Stepper from "./components/Stepper";
import React, {useState} from "react";
import StepperControl from "./components/StepperControl";
import Sidebar from "./components/Sidebar";
import SigningAgent from "./components/form/SigningAgent";
import SignerDetails from "./components/form/SignerDetails";
import SignerLocation from "./components/form/SignerLocation";
import Complete from "./components/form/Complete";
import {StepperContext} from "./components/context/StepperContext";

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
    return <div className={"container flex border-r-2 border-b-8 border-purple-100 rounded-3xl relative"}>
        <Sidebar/>
        <div className={"container "}>

            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
            <Stepper
                steps={steps}
                currentStep={currentStep}/>

            <div className={"my-10"}>
                <StepperContext.Provider value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData
                }}>
                    {displayStep(currentStep)}
                </StepperContext.Provider>
            </div>
        </div>

    </div>
}

export default App;
