import React from 'react'
import navlogo from "../assets/images/justimg.png";
import ButtonLight from "../components/buttons/ButtonLight";
import ButtonPink from "../components/buttons/ButtonPink";
import logo from "../assets/images/logoimg.jpeg"
import "../style/Navbar.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from 'react'; 
import { NavLink } from 'react-router-dom';

function NavbarUser() {
    const navigate = useNavigate();
 // يطبع اسم المستخدم الحالي لو موجود
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        setCurrentUser(user);
    }, []);
    const handleLogOut = () => { 
        localStorage.removeItem("currentUser");
        navigate("/");
    }

    return (
        <>
            <header className=" w-full h-fit bg-pink-10 *:shadow-lg shadow-pink-500 flex items-center justify-center">
                <nav className=" w-full h-fit  flex items-center justify-center gap-6 md:justify-evenly md:gap-10 lg:justify-around xl:justify-between  min-w-full px-4 py-3 flex-wrap">
                    <div className="logo w-fit h-fit px-2.5 flex justify-center items-center hover:text-white gap-3 py-1.5 bg-[var(--color-prinky)] rounded-3xl shadow-sm mr-6 hover:bg-pink-800 cursor-pointer transition-all duration-300 ease-in-out hover:scale-3d">
                        <img src={logo} alt="" width={40} height={45} className=" rounded-tl-2xl rounded-br-2xl" />
                        <p className=" text-var[(--color-prinky)] text-2xl">Welcome {currentUser ? currentUser.firstName : ""}</p>
                    </div>
                    <div className="btns w-fit gap-4 mr-6 h-fit flex items-center justify-center">
                        <button
                            onClick={handleLogOut}
                            className=" bg-[var(--color-creamy)] w-fit h-[45px] text-[var(--color-prinky)] rounded-2xl w-fit px-6 py-2 rounded transition duration-300 ease-in-out border-2 border-[var(--color-creamy)] cursor-pointer hover:bg-transparent flex items-center justify-center hover:text-amber-400">
                            <span>Log Out</span>
                        </button>
                        <NavLink
                            to={"/wish"}
                            
                            className={
                                " hover:text-pink-400 bg-[var(--color-prinky)] focus:text-pink-600 focus:bg-transparent focus:border-pink-600 rounded-2xl text-white hover:bg-transparent border-2 border-pink-400 px-6 py-2 rounded transition-all duration-300 ease-in-out"
                            }>
                            {" "}
                            WishList
                        </NavLink>
                        <NavLink
                            to={"/product"}
                          
                            className={
                                " hover:text-pink-400 bg-[var(--color-prinky)] focus:text-pink-600 focus:bg-transparent focus:border-pink-600 rounded-2xl text-white hover:bg-transparent border-2 border-pink-400 px-6 py-2 rounded transition-all duration-300 ease-in-out"
                            }>
                            {" "}
                           Product
                        </NavLink>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default NavbarUser
