import React, {useContext} from "react";
import {StepperContext} from "../context/StepperContext";

export default function SignerDetails() {
    const {userData, setUserdata} = useContext(StepperContext);
    const handleChange = (e) => {
        const {name, value} = e.target
        setUserdata({...userData, [name]: value})
    }
    return<div>
        Signer Details
    </div>
}