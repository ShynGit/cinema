import React from "react";
import useClock from "../hooks/useClock";
import { Link, useLocation } from "react-router-dom";
import { Navbar, NavItem, Icon } from "react-materialize";

export default function NavBar() {
    const active = useLocation().pathname.slice(1, 100);
    const clock = useClock();
    return (
        <Navbar
            className="bg-black px-2 pr-10"
            alignLinks="left"
            brand={
                <Link to="/" className="brand-logo">
                    <Icon left style={{ fontSize: "30px" }}>
                        local_movies
                    </Icon>
                    Cinema
                </Link>
            }
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
        >
            <ul className="">
                <li
                    className={`hover:bg-cyan-600 ${
                        active === "home" ? "bg-emerald-600" : ""
                    }`}
                >
                    <Link to="/home">
                        <Icon left>home</Icon>
                        Trang chủ
                    </Link>
                </li>
                <li
                    className={`hover:bg-cyan-600 ${
                        active === "news" ? "bg-emerald-600" : ""
                    }`}
                >
                    <Link to="/news">
                        <Icon left>dvr</Icon>Tin tức
                    </Link>
                </li>
                <li
                    className={`hover:bg-cyan-600 ${
                        active === "about" ? "bg-emerald-600" : ""
                    }`}
                >
                    <Link to="/about">
                        <Icon left>info_outline</Icon>Giới thiệu
                    </Link>
                </li>
                <li
                    className={`hover:bg-cyan-600 ${
                        active === "contact" ? "bg-emerald-600" : ""
                    }`}
                >
                    <Link to="/contact">
                        <Icon left>contacts</Icon>Liên hệ
                    </Link>
                </li>

                <li className="">
                    <Link>
                        <Icon left>access_alarms</Icon>
                        {clock}
                    </Link>
                </li>
            </ul>
        </Navbar>
    );
}
