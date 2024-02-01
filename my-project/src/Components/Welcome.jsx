import React, { useState } from 'react';
import image from "./../assets/unnamed.png";
import img from"./../assets/Screenshot 2024-01-31 142322.png";
import im from "./../assets/Screenshot 2024-01-31 142943.png";
import i from "./../assets/Screenshot 2024-01-31 143203.png";
import { Link } from 'react-router-dom';

// this is the welcome page imports are present
function Welcome() {
    const[show,setContant]=useState(false)
    const handle=()=>{
        setContant(!show);
    }
    const[about,setAbout]=useState(false)
    const handles=()=>{
        setAbout(!about);
    }
//this part is for  returning  the images and and other kind of stuffs
  return (
    <div>
      <div className="bg-gray-800 h-14 flex items-center justify-end justify-between  shadow-2xl shadow-slate-700 drop-shadow-lg">
        <img className='rounded-md w-10 h-18 mb-4 ml-3 mt-5' src={image} alt="" />
        <h1 className='hidden sm:block text-xl hover:scale-95 text-white'>Books bring magic</h1>
        <div className='flex'>
        <button
            className={`ml-2 text-white mr-3 px-4 py-2 transition-transform transform focus:outline-none hover:scale-110`}
            onClick={handle}
          >
            Contact
          </button>
            <button className='ml-2 text-white mr-3 px-4 py-2 transition-transform transform focus:outline-none hover:scale-110' onClick={handles}>About us</button>
            <a className=' text   sm:ml-2 text-white mr-3 px-4 py-2 transition-transform transform focus:outline-none hover:scale-110' href="https://pay.google.com/intl/en_in/about/">Donate❤</a>
        </div>
      </div>
      {show && (
        <div className="bg-gray-800 text-white p-3 mt-3 w-full sm:w-40 h-30 rounded-lg shadow-2xl drop-shadow-2xl shadow-slate-700 ml-0 sm:ml-96 ">
          <p>Email: Kalvium@gmail.com</p>
          <p>Phone: +1 123-456-7890</p>  
        </div>
      )}
        {about && (
        <div className="bg-gray-800 text-white p-3 mt-3 w-full sm:w-85 h-30 rounded-lg shadow-2xl drop-shadow-2xl shadow-slate-700 ml-10 sm:ml-96">
          <p> Welcome to our online platform dedicated to fostering a love for reading! At Kalvium, we believe that access to knowledge should be freely available to all. Our mission is to provide a vast collection of books across various genres to readers around the world, completely free of charge.</p>
        </div>
      )}
      <h1 className='text-center mt-5  text-white text-3xl font-bold hover:scale-125'>Kalvium Archive</h1>
      <h3 className='text-white font-semibold text-center mt-10 hover:scale-150'>Don't stop reading, let the adventure continue on every page</h3>

      <div className=' grid grid-rows-1 gap-y-4 relative left-4  sm:flex justify-center justify-evenly  mt-24 '>
        <a href="https://aspiringyouths.com/general-knowledge/books-by-apj-abdul-kalam/" target='_blank'><img className='w-80 h-50 hover:scale-105' src={img} alt="" /></a>
        <a href="https://fable.co/folio/sundar-pichais-favorite-books-by-sundar-pichai" target='_blank'> <img className='w-80 h-50 hover:scale-105 'src={im} alt="" /></a>
        <a href="https://www.gatesnotes.com/Books" target='_blank'><img className='w-80 h-64 hover:scale-105' src={i} alt="" /></a>
      </div>
      <div className='flex justify-center mt-14'>
        <button className='bg-black text-white w-20 rounded-md p-2  shadow-zinc-900  shadow-2xl drop-shadow-2xl  '><Link to="/main">Search</Link></button>
      </div>
    </div>
  );
}

export default Welcome;
