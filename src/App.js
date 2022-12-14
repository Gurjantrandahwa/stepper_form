import Stepper from "./components/Stepper";
import React from "react";
import StepperControl from "./components/StepperControl";
import Sidebar from "./components/Sidebar";

function App() {
    return <div className={"flex"}>
        <Sidebar/>
        <div>

            <StepperControl/>
            <Stepper/>
        </div>

    </div>
}

export default App;
