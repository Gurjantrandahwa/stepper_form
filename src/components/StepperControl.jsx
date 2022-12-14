import React from "react";
import {IoIosArrowBack} from "react-icons/io";
import {GrLinkNext} from "react-icons/gr";

export default function StepperControl({steps, handleClick, currentStep}) {
    return <div className={"mt-4 static"}>
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
                        <span className={"bg-violet-50 p-1"}>New Appointment Requ</span>est

                    </h1>
                </div>
                <p className={"text-gray-300 text-sm font-normal"}>
                    Some great coverage for less
                </p>
            </div>
        </div>
        <div className={"absolute bottom-[-10px] right-16 pb-8"}>
            <button className={"flex items-center"}
                    onClick={() => handleClick("next")}>
                <p className={"text-violet-900 font-bold mr-4 text-xl"}>
                    {currentStep===steps.length-1?"Confirm":"Next Step"}
                </p>
                <div className={"bg-yellow-200 p-2 rounded-full"}>
                    <GrLinkNext className={"text-violet-900 text-xl"}/>
                </div>

            </button>
        </div>


    </div>
}