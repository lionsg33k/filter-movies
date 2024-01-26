import React from 'react';
import { useParams } from 'react-router-dom';
import tod from "../../assets/img/tod.jpg"
import ffa from "../../assets/img/ffa.jpg"
import godfather from "../../assets/img/godfather.jpg"
import hehe from "../../assets/img/hehe.jpg"
import htyd from "../../assets/img/htyd.jpg"
import mnik from "../../assets/img/mnik.jpg"
import venom from "../../assets/img/venom.jpg"
import bh6 from "../../assets/img/bh6.jpeg"




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


export const AboutPage = () => {


    const { id } = useParams()

    let myMovie = movie.find(element => element.title === id)


    return (
        <>
            <div className="w-100 h-screen flex items-center justify-center bg-slate-900">

                <div className="w-[90%] h-[90vh] outline outline-white flex">
                    <div className="w-[25%] h-100" style={{ backgroundImage: `url(${myMovie.img})`, backgroundPosition: `center`, backgroundSize: `cover` }}>></div>
                    <div className="w-[75%] text-white">
                        <h1>{myMovie.title}</h1>
                        <h1>{myMovie.desc}</h1>
                        <h1>{myMovie.type}</h1>
                        <h1>{myMovie.rd}</h1>
                    </div>
                </div>

            </div>


        </>
    );
};

