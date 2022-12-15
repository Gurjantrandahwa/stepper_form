import React from "react";
import {IoIosArrowBack} from "react-icons/io";

export default function StepperControl({steps, handleClick, currentStep}) {

    return <div className={"mt-4"}>
        <div className={"flex"}>
            <button
                onClick={() => handleClick()}
                className={`bg-violet-100 rounded-full w-8 h-8 flex justify-center items-center text-xl
                    ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
                <IoIosArrowBack/>
            </button>
            <div className={"ml-6"}>
                <div className={""}>
                    <h1 className={"text-2xl font-normal"}>
                        <span className={"bg-violet-50 p-1"}>New Appointment Request</span>

                    </h1>
                </div>
                <p className={"text-gray-300 text-sm font-normal"}>
                    Some great coverage for less
                </p>
            </div>
        </div>


    </div>
}