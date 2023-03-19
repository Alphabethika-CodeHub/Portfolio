import { useEffect, useState } from "react";
import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import {
    Switch,
    Button,
} from "@material-tailwind/react";

export default function CustomNavbar() {
    const navigate = useNavigate()

    return (
        <div className="w-full p-3 sticky top-0 z-30 backdrop-blur-lg dark:bg-elegant-black dark:text-white">
            <div className="flex justify-center">
                {/* <div className="flex align-middle h-full gap-3">
                    <p>Home</p>
                </div> */}
                <div onClick={() => alert("Hellooooooo! 👋")} className="flex align-middle h-full gap-3 my-0">
                    {"| | |"}
                </div>
                {/* <div className="flex align-middle h-full gap-3">
                    <p>Daffa Nabil Hartono</p>
                </div> */}
                {/* <div className="flex align-middle h-full gap-3">
                    <Button size="sm" className="text-black dark:text-white text-md" onClick={() => navigate("/explore")} variant="text">Explore</Button>
                    <Button size="sm" className="text-black dark:text-white text-md" onClick={() => navigate("/contact-us")} variant="text">Contact Us</Button>
                    <Button size="sm" className="text-black dark:text-white text-md" onClick={() => navigate("/about")} variant="text">About</Button>
                </div> */}
            </div>
        </div>
    );
}