import React, { useState } from 'react';
import "./section1.sass"
import { useNavigate } from 'react-router-dom';
import tod from "../../../assets/img/tod.jpg"
import ffa from "../../../assets/img/ffa.jpg"
import godfather from "../../../assets/img/godfather.jpg"
import hehe from "../../../assets/img/hehe.jpg"
import htyd from "../../../assets/img/htyd.jpg"
import mnik from "../../../assets/img/mnik.jpg"
import venom from "../../../assets/img/venom.jpg"
import bh6 from "../../../assets/img/bh6.jpeg"
import logo from "../../../assets/img/myLogo.png"
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa6";


export const FirstSectionComponent = () => {


    const navigate = useNavigate()


    class Movies {
        constructor(title, desc, img, type, rd) {
            this.title = title
            this.desc = desc
            this.img = img
            this.type = type
            this.rd = rd
        }
    }

    let movie1 = new Movies("Truth or dare", "description 111111111111", tod, "Action", 2013);
    let movie2 = new Movies("Five feet apart", "description 222222222", ffa, "drama", 2017);
    let movie3 = new Movies("Godfather", "description 3333333333333", godfather, "drama", 1954);
    let movie4 = new Movies("hehe", "description 44444444444", hehe, "comedy", 2010);
    let movie5 = new Movies("How to train ylour drahgon", "description 55555555555", htyd, "anime", 2015);
    let movie6 = new Movies("my name is khan ", "description 6666666666", mnik, "drama", 2008);
    let movie7 = new Movies("venom", "description 7777777777", venom, "action", 2020);
    let movie8 = new Movies("big hero 6", "description 8888888", bh6, "anime", 2020);


    const movie = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8]

    const [screenArray, setScreenArray] = useState(movie)




    const filterElement = (event) => {
        let newTab = movie.filter(element => element.title.toLowerCase().includes(event.target.value.toLowerCase()));
        setScreenArray(newTab)
    }


    return (
        <>

            <nav className='w-100 h-[10vh] fixed px-4 py-3 flex item-center justify-around '>
                <div className="flex h-100 items-center gap-3">
                    <img width={70} src={logo} alt="" />
                    <h3 className='text-white mt-2'>Coding <span className='text-purple-700'>Flex</span></h3>
                </div>

                <input onChange={(e) => filterElement(e)} placeholder='Insert the movie name please' className='w-50 py-4 bg-transparent outline-white text-white focus:outline-purple-300' type="search" />

                <div className="w-[20%] text-2xl h-100 text-white flex items-center justify-evenly">
                    <FaInstagram />
                    <FaDiscord />
                    <FaGithub />
                </div>
            </nav>

            <div className="h-screen bg-gradient-to-b from-[#170434] to-[#000] flex flex-col  items-center justify-evenly">

                <div className="w-[90%] h-[80vh] mt-8 overflow-y-auto  py-5 flex flex-wrap items-start justify-start gap-5">
                {
                        screenArray.map((element, index) =>
                            <>

                                <div className="movie w-[22%] h-[60vh] mt-4 outline outline-white relative overflow-hidden" style={{ backgroundImage: `url(${element.img})`, backgroundPosition: `center`, backgroundSize: `cover` }}>


                                    <div className="sub w-100 h-100 text-white bg-[#000000a6] absolute end-100 flex flex-col items-center justify-around ">

                                        <h1 className='text-white'>{element.title}</h1>

                                        <h3>{element.desc}</h3>
                                        <div className="w-100 flex justify-around">
                                            <h6>{element.rd}</h6>
                                            <h6>{element.type}</h6>
                                        </div>
                                        <button onClick={()=>{navigate(`/about/${element.title}`)}} className=' w-[90%] rounded-full bg-white text-purple-900 py-2'>Check Movie</button>


                                    </div>
                                </div>


                            </>)
                    }


                </div>
            </div>


        </>
    );
};

