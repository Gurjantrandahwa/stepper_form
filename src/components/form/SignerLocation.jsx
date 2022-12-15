import React, {useEffect, useState} from "react";
import {BsPersonCheck} from "react-icons/bs";
import {Button, TextField} from "@mui/material";
import axios from "axios";

export default function SignerLocation() {
    const [post, setPost] = useState(null);
    const URL = "https://notaryapp-staging.herokuapp.com/plugin/posts";
    const createPost = () => {
        axios
            .post(URL, {
            //    data
            })
            .then((res) => {
                setPost(res.data)
            })
    }

    useEffect(() => {
        axios.get(`${URL}/1`).then((response) => {
            setPost(response.data);
        });
    }, []);
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
                    name={"email"}
                />
            </div>
            <div className={"flex items-center gap-28"}>
                <div className={"flex flex-col py-4"}>
                    <label className={"pb-2 text-md"}>Date</label>
                    <TextField
                        sx={{width: "330px"}}
                        size={"small"}
                        placeholder={"you@example.com"}
                        type="date"
                        name={"date"}
                    />
                </div>
                <div className={"flex flex-col"}>
                    <label className={"pb-2 text-md"}>Time</label>
                    <TextField
                        sx={{width: "330px"}}
                        size={"small"}
                        placeholder={"you@example.com"}
                        className={"border-2 outline-0"}
                        type="time"
                        name={"time"}
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