import React from "react";
import {Button} from "@mui/material";

export default function Complete() {
    return <div className={"container md:mt-10"}>
        <div className={"flex flex-col items-center"}>
            <div
                className={"font-bold flex text-white text-xl bg-purple-500 w-12 h-12 justify-center rounded-full items-center"}>
                &#10003;
            </div>
            <div className={"mt-3 text-xl font-semibold uppercase text-purple-500"}>
                Your data is submitted
            </div>
            <a  href={"/"} className={"mt-4"}>
                <Button sx={{bgcolor:"mediumpurple",color:"white"}}>
                  Home
                </Button>
            </a>
        </div>


    </div>
}