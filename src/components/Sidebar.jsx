import React from "react";
import {MdMail} from "react-icons/md";
import {BsFillPersonFill, BsFillTelephoneFill} from "react-icons/bs";
import {FiMapPin} from "react-icons/fi";

export default function Sidebar() {
    return <div className={"h-[140vh] w-[30%] py-4 px-2 bg-[#26004d] rounded-l-3xl mr-10 flex flex-col items-center"}>
        <h3 className={"text-yellow-300 font-bold text-xl text-center"}>
            BeInsurance
        </h3>
        <img
            className={"w-28 rounded-full items-center mx-auto mt-12"}
            src={"https://i.pinimg.com/564x/14/31/a5/1431a5d9590c60e82e5cea8ca0766f24.jpg"} alt={""}/>
        <h1
            className={"text-white text-center font-bold mt-8 text-3xl"}
        >
            Jacob Jones
        </h1>
        <div className={"mt-8 flex flex-col"}>
            {
                [
                    {
                        icon: <MdMail/>,
                        text: "Jacksonjn@mail.com"
                    },
                    {
                        icon: <BsFillTelephoneFill/>,
                        text: "(316) 555-0116"
                    },
                    {
                        icon: <FiMapPin/>,
                        text: <>3891 Ranchview <br/>Dr.Richardson,California 62639</>
                    },
                    {
                        icon: <BsFillPersonFill/>,
                        text: "Insurance ID 24792492"
                    }
                ].map((value, index) => {
                    return <div key={index} className={"flex items-center text-white mt-4 w-[105%] "}>
                        <div className={"text-2xl mr-2"}>
                            {value.icon}
                        </div>

                        <p className={"ml-2 text-sm"}> {value.text}</p>
                    </div>
                })

            }
        </div>
    </div>
}