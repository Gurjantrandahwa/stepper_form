import React, {useContext} from "react";
import {StepperContext} from "../context/StepperContext";
import {BsPersonCheck} from "react-icons/bs";
import {TextField} from "@mui/material";

export default function SignerDetails() {
    const {userData, setUserdata} = useContext(StepperContext);
    const handleChange = (e) => {
        const {name, value} = e.target
        setUserdata({...userData, [name]: value})
    }

    return <div className={"border-2 border-black p-4 bg-white"}>


        <form className={"py-4"}>
            {/*Personal*/}
            <div>
                <div className={"flex items-center mb-2"}>
                    <BsPersonCheck className={"text-2xl mr-2"}/>
                    <h1 className={"text-xl text-zinc-700"}>Signer Details</h1>
                </div>

                <hr className={"border-t-2 border-black py-2"}/>

                    <div className={"flex items-center gap-28"}>
                        <div className={"flex flex-col py-4"}>
                            <label className={"pb-2 text-md"}>Full Name</label>
                            <TextField
                                sx={{width:"330px"}}
                                size={"small"}
                                placeholder={"you@example.com"}
                                type="text"
                                name={"fullName"}
                                onChange={handleChange}/>
                        </div>
                        <div className={"flex flex-col"}>
                            <label className={"pb-2 text-md"}>Phone Number</label>
                            <TextField
                                sx={{width:"330px"}}
                                size={"small"}
                                placeholder={"you@example.com"}
                                className={"border-2 outline-0"}
                                type="number"
                                name={"phoneNumber"}
                                onChange={handleChange}/>
                        </div>

                    </div>
                    <div className={"flex flex-col"}>
                        <label className={"pb-2 text-md"}>Email</label>
                        <TextField
                            sx={{width:"330px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            type="text"
                            name={"email"}
                            onChange={handleChange}/>
                    </div>

            </div>
            {/*Company*/}
            <div className={"mt-8"}>
                <div className={"flex items-center mb-2"}>
                    <BsPersonCheck className={"text-2xl mr-2"}/>
                    <h1 className={"text-xl text-zinc-700"}>Title Company Details</h1>
                </div>

                <hr className={"border-t-2 border-black py-2"}/>
                <div className={"flex items-center gap-28"}>
                    <div className={"flex flex-col py-4"}>
                        <label className={"pb-2 text-md"}>Company Name</label>
                        <TextField
                            sx={{width:"330px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            type="text"
                            name={"fullName"}
                            onChange={handleChange}/>
                    </div>
                    <div className={"flex flex-col"}>
                        <label className={"pb-2 text-md"}>Agent Name</label>
                        <TextField
                            sx={{width:"330px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            className={"border-2 outline-0"}
                            type="number"
                            name={"phoneNumber"}
                            onChange={handleChange}/>
                    </div>

                </div>
                <div className={"flex items-center gap-28"}>
                    <div className={"flex flex-col py-4"}>
                        <label className={"pb-2 text-md"}>Email</label>
                        <TextField
                            sx={{width:"330px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            type="text"
                            name={"fullName"}
                            onChange={handleChange}/>
                    </div>
                    <div className={"flex flex-col"}>
                        <label className={"pb-2 text-md"}>Phone Number</label>
                        <TextField
                            sx={{width:"330px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            className={"border-2 outline-0"}
                            type="number"
                            name={"phoneNumber"}
                            onChange={handleChange}/>
                    </div>

                </div>
            </div>
            {/*Loan*/}
            <div className={"mt-8"}>
                <div className={"flex items-center mb-2"}>
                    <BsPersonCheck className={"text-2xl mr-2"}/>
                    <h1 className={"text-xl text-zinc-700"}>Order Info</h1>
                </div>

                <hr className={"border-t-2 border-black py-2"}/>
                <div className={"flex items-center gap-28"}>
                    <div className={"flex flex-col py-4"}>
                        <label className={"pb-2 text-md"}>Escrow# /Loan No</label>
                        <TextField
                            sx={{width:"330px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            type="text"
                            name={"fullName"}
                            onChange={handleChange}/>
                    </div>
                    <div className={"flex flex-col"}>
                        <label className={"pb-2 text-md"}>Property Address</label>
                        <TextField
                            sx={{width:"330px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            className={"border-2 outline-0"}
                            type="text"
                            name={"phoneNumber"}
                            onChange={handleChange}/>
                    </div>

                </div>
            </div>
        </form>


    </div>
}