import React from "react";
import {Button} from "@mui/material";
import {BsArrowRight} from "react-icons/bs";

export default function SigningAgent() {

    return <div className={"flex gap-4"}>
        <div className={'flex flex-col'}>
            {
                [
                    {
                        name: "Notary Signing Agent",
                        description: "Suitable for those who have purchased a brand new car",
                        button: <Button sx={{textTransform: "none", color: "purple"}}
                                        endIcon={<BsArrowRight/>}>
                            View details
                        </Button>,
                        input: <><input type={"number"}
                                        min={1}
                                        className={"bg-purple-50 w-24 h-10 outline-0"}/>
                            <p className={"text-right text-sm text-gray-400"}>per year</p>
                        </>
                    },
                    {
                        name: <p className={"bg-gray-100"}>Remote Online Notary</p>,
                        description: "Suitable for those who have purchased a brand new car",
                        button: <Button sx={{textTransform: "none", color: "purple"}}
                                        endIcon={<BsArrowRight/>}>
                            View details
                        </Button>,
                        input: <><input
                            className={"bg-purple-50 w-24 h-10 outline-0 text-center"}
                            min={1}
                            type={"number"}/>
                            <p className={"text-right text-sm text-gray-400"}>per year</p>
                        </>
                    },
                    {
                        name: "Mobile General Notary",
                        description: "Suitable for those who have purchased a brand new car",
                        button: <Button sx={{textTransform: "none", color: "purple"}}
                                        endIcon={<BsArrowRight/>}>
                            View details
                        </Button>,
                        input: <>
                            <input type={"number"}
                                   min={1}
                                   className={"bg-purple-50 w-24 h-10 outline-0"}/>
                            <p className={"text-right text-sm text-gray-400"}>per year</p>
                        </>
                    },
                ].map((value, index) => {
                    return <div key={index}
                                className={`flex py-4 border-2 rounded-xl p-4 mb-4 items-center shadow
                                ${index === 1 ? "bg-yellow-100 border-2 border-purple-400 shadow" : ""}`}>
                        <div className={"max-w-[320px] "}>
                            <h1 className={`text-3xl bg-purple-50 mr-2 p-1 text-zinc-700`}>{value.name}</h1>
                            <p className={"text-[15px] text-gray-400 font"}>{value.description}</p>
                            {value.button}
                        </div>
                        <div>{value.input}</div>
                    </div>
                })
            }
        </div>
        <div className={"border-2 w-1/2 p-4 "}>
            <h1
                className={"text-2xl font-semibold rounded text-black-100 text-center text-zinc-700"}
            >Calculate your Costs for Ron!
            </h1>
            <div className={"mt-8"}>
                {
                    [
                        {
                            header: "No of Extra Signatures",
                            description: "Please enter zero if only one signature is required",
                            input1: <input
                                className={"border-2 outline-0 rounded-xl w-[20%] h-10 "}
                                type={"number"}/>
                        },
                        {
                            header: "How many Files will you be uploading in the session",
                            input1: <input

                                className={"border-2 outline-0 rounded-xl w-[30%] h-10 "}
                                type={"number"}/>
                        },
                        {
                            header: "Number of Singers",

                            input1: <input
                                className={"border-2 outline-0 rounded-xl w-[30%] h-10"}
                                type={"number"}/>
                        },
                        {
                            header: "Don you need Witness?",
                            description: "Please enter zero if only one signature is required",
                            input1: <input
                                className={"border-2 outline-0 rounded-xl w-[15%] h-10"}
                                type={"number"}/>
                        },

                    ].map( (value, index) => {
                        return<div key={index} className={"flex mb-4 flex-row justify-between py-2"}>
                            <div className={"space-x-2"}>
                                <h1 className={"text-xl"}>{value.header}</h1>
                                <p>{value.description}</p>
                            </div>
                            {value.input1}
                        </div>
                    })
                }
            </div>
            <h1
                className={"text-right font-bold text-xl mx-4 py-4 text-zinc-500 capitalize"}
            >Your appointment quote: $59</h1>
        </div>
    </div>
}