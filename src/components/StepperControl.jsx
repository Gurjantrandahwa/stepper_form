import React from "react";
import {IoIosArrowBack} from "react-icons/io";
import {GrLinkNext} from "react-icons/gr";

export default function StepperControl() {
    return <div className={"mt-4 static"}>
        <div className={"flex"}>
            <button className={"bg-violet-100 rounded-full w-8 h-8 flex justify-center items-center text-xl"}>
                <IoIosArrowBack/>
            </button>
            <div className={"ml-6"}>
                <div className={"bg-violet-50 p-1"}>
                    <h1 className={"text-2xl font-normal"}>
                        New Appointment Request
                    </h1>
                </div>
                <p className={"text-gray-300 text-sm font-normal"}>Some great coverage for less</p>
            </div>
        </div>
        <div className={"absolute bottom-20 right-64"}>
            <button className={"flex items-center"}>
                <p className={"text-violet-900 font-bold mr-4 text-xl"}> Next step</p>
                <div className={"bg-yellow-200 p-2 rounded-full"}>
                    <GrLinkNext className={"text-violet-900 text-xl"}/>
                </div>

            </button>
        </div>


    </div>
}