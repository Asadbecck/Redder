import React from 'react';
import { Link } from 'react-router-dom';
import { Logo_One, call, first_logo, language, meny } from '../../assets/Logo/index';
import Navlink from '../CustomComponents/Navlink';

const Navbar = () => {
    return (
        <>
            <div>
                <div className="flex justify-between">
                    <div className=" flex items-center ">
                        <img src={first_logo} alt="png" />
                        <img className=" px-[1px] pt-4" src={Logo_One} alt="png" />
                    </div>

                    <div className="flex items-center justify-between">
                        <img src={call} alt="png" />
                        <h1 className="text-white p-4">+998 99 999 99 99</h1>
                        <img className="px-5" src={language} alt="png" />
                        <Link to="/profile">
                            <img src={meny} alt="png" />
                        </Link>
                    </div>
                </div>
                <Navlink />
            </div>
        </>
    );
};

export default Navbar;
