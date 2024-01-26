import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/myLogo.png"


export const Header = () => {


    return (
        <>

            <nav className='w-100 h-[10vh] fixed px-4 py-3 flex item-center justify-around '>
                <div className="flex h-100 items-center gap-3">
                    <img width={70} src={logo} alt="" />
                    <h3 className='text-white mt-2'>Coding <span className='text-purple-700'>Flex</span></h3>
                </div>

                <input placeholder='Insert the movie name please' className='w-50 py-4 bg-transparent outline-white text-white focus:outline-purple-300' type="search" />


            </nav>

        </>
    );
};

