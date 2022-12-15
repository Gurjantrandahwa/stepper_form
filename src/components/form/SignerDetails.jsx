import React, {useContext} from "react";
import {StepperContext} from "../context/StepperContext";
import {BsPersonCheck} from "react-icons/bs";
import {TextField} from "@mui/material";

export default function SignerDetails() {
    const {userData, setUserData} = useContext(StepperContext);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
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

                <div className={"grid gap-4 grid-cols-1 lg:grid-cols-3"}>
                    <div>
                        <label className={"pb-2 text-md"}>Full Name</label>
                        <TextField
                            onChange={handleChange}
                            value={userData["fullName"] || ""}
                            name={"fullName"}
                            sx={{width: "100%", marginTop: "5px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            type="text"
                            required
                        />
                    </div>
                    <div>
                        <label className={"pb-2 text-md"}>Phone Number</label>
                        <TextField
                            min={0}
                            sx={{width: "100%", marginTop: "5px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            className={"border-2 outline-0"}
                            type="number"
                            onChange={handleChange}
                            value={userData["phoneNumber"] || ""}
                            name={"phoneNumber"}
                            required
                        />
                    </div>

                </div>
                <div className={"mt-4"}>
                    <label className={"pb-2 text-md "}>Email</label>
                    <TextField
                        sx={{width: "100%", marginTop: "5px"}}
                        size={"small"}
                        placeholder={"you@example.com"}
                        type="text"
                        onChange={handleChange}
                        value={userData["email"] || ""}
                        name={"email"}
                        required
                    />
                </div>

            </div>
            {/*Company*/}
            <div className={"mt-8"}>
                <div className={"flex items-center mb-2"}>
                    <BsPersonCheck className={"text-2xl mr-2"}/>
                    <h1 className={"text-xl text-zinc-700"}>Title Company Details</h1>
                </div>

                <hr className={"border-t-2 border-black py-2"}/>
                <div className={"grid gap-4 grid-cols-1 lg:grid-cols-3"}>
                    <div>
                        <label className={"pb-2 text-md"}>Company Name</label>
                        <TextField
                            sx={{width: "100%", marginTop: "5px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            type="text"
                            onChange={handleChange}
                            value={userData["companyName"] || ""}
                            name={"companyName"}
                            required
                        />
                    </div>
                    <div>
                        <label className={"pb-2 text-md"}>Agent Name</label>
                        <TextField
                            sx={{width: "100%", marginTop: "5px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            className={"border-2 outline-0"}
                            type="text"
                            onChange={handleChange}
                            value={userData["agentName"] || ""}
                            name={"agentName"}
                            required
                        />
                    </div>

                </div>
                <div className={"grid gap-4 grid-cols-1 lg:grid-cols-3"}>
                    <div>
                        <label className={"pb-2 text-md"}>Email</label>
                        <TextField
                            sx={{width: "100%", marginTop: "5px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            type="text"
                            onChange={handleChange}
                            value={userData["companyEmail"] || ""}
                            name={"companyEmail"}
                            required
                        />
                    </div>
                    <div>
                        <label className={"pb-2 text-md"}>Phone Number</label>
                        <TextField
                            sx={{width: "100%", marginTop: "5px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            className={"border-2 outline-0"}
                            type="number"
                            onChange={handleChange}
                            value={userData["companyNumber"] || ""}
                            name={"companyNumber"}
                            required
                        />
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
                <div className={"grid gap-4 grid-cols-1 lg:grid-cols-3"}>
                    <div>
                        <label className={"pb-2 text-md mb-2"}>Escrow# /Loan No</label>
                        <TextField
                            sx={{width: "100%", marginTop: "5px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            type="number"
                            onChange={handleChange}
                            value={userData["loanNo"] || ""}
                            name={"loanNo"}
                            min={0}
                            required
                        />
                    </div>
                    <div>
                        <label className={""}>Property Address</label>
                        <TextField

                            sx={{width: "100%", marginTop: "5px"}}
                            size={"small"}
                            placeholder={"you@example.com"}
                            className={"border-2 outline-0"}
                            type="text"
                            onChange={handleChange}
                            value={userData["propertyAddress"] || ""}
                            name={"propertyAddress"}
                            required
                        />
                    </div>
                </div>
            </div>
        </form>

    </div>
}