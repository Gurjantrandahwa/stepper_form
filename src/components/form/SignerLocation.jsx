import React, {useContext, useEffect} from "react";
import {BsPersonCheck} from "react-icons/bs";
import {Button, TextField} from "@mui/material";
import axios from "axios";
import {StepperContext} from "../context/StepperContext";

export default function SignerLocation() {
    const {userData, setUserData} = useContext(StepperContext);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

    const URL = "https://notaryapp-staging.herokuapp.com/plugin/userdata";
    const createPost = () => {
        axios
            .post(URL, {
            //    data
        ...userData
            })
            .then((res) => {
                setUserData(res.data)
            })
    }

    useEffect(() => {
        axios.get(`${URL}/1`).then((response) => {
            setUserData(response.data);
        });
    }, [userData]);
    return <div className={"border-2 border-black p-4 bg-white h-[100vh]"}>
        <form>
            <div className={"flex items-center mb-2"}>
                <BsPersonCheck className={"text-2xl mr-2"}/>
                <h1 className={"text-xl text-zinc-700"}>Signing Location</h1>
            </div>

            <hr className={"border-t-2 border-black py-2"}/>
            <div className={"flex flex-col"}>
                <label className={"pb-2 text-md"}>Enter Signing Location</label>
                <TextField
                    fullWidth
                    size={"small"}
                    placeholder={"you@example.com"}
                    type="text"
                    name={"location"}
                    onChange={handleChange}
                    value={userData["location"] || ""}
                    required
                />
            </div>
            <div className={"grid gap-4 grid-cols-1 lg:grid-cols-3 mt-6"}>
                <div>
                    <label className={"pb-2 text-md"}>Date</label>
                    <TextField
                        sx={{width: "100%"}}
                        size={"small"}
                        placeholder={"you@example.com"}
                        type="date"
                        name={"date"}
                        onChange={handleChange}
                        value={userData["date"] || ""}
                        required
                    />
                </div>
                <div>
                    <label className={"pb-2 text-md"}>Time</label>
                    <TextField
                        sx={{width: "100%"}}
                        size={"small"}
                        placeholder={"you@example.com"}
                        className={"border-2 outline-0"}
                        type="time"
                        name={"time"}
                        onChange={handleChange}
                        value={userData["time"] || ""}
                        required
                    />
                </div>

            </div>
            <div className={"mt-12 mx-auto text-center"}>
                <Button
                    onClick={createPost}
                    sx={{
                        padding: "10px 70px",
                        backgroundColor: "rgb(238 242 255)",
                        color: "rgb(79 70 229)",
                        textTransform: "none",
                        fontSize: "medium",
                        borderRadius: "10px"
                    }}
                >
                    Schdule Appointment
                </Button>
            </div>
        </form>
    </div>
}