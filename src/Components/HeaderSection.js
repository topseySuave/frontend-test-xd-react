/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const HeaderSection = () => (
    <section className="h-screen bg-dark-gray">
      <div id="creative_">
        <span>creative</span><br />
      </div>
      <div className="container nav mx-auto w-10/12 p-20 flex flex-row justify-between">
        <h3 className="text-2xl text-indigo-800 title-logo font-black">agency</h3>
  
        <ul class="flex z-40">
          <li class="mr-10">
            <a class="text-indigo-500 hover:text-indigo-800 font-bold" href="#">Home</a>
          </li>
          <li class="mr-10">
            <a class="text-indigo-500 hover:text-indigo-800 font-bold" href="#">Services</a>
          </li>
          <li class="mr-10">
            <a class="text-indigo-500 hover:text-indigo-800 font-bold" href="#">Project</a>
          </li>
          <li class="mr-10">
            <a class="text-indigo-500 hover:text-indigo-800 font-bold" href="#">about us</a>
          </li>
          <li class="mr-10">
            <a class="text-indigo-500 hover:text-indigo-800 font-bold" href="#">contact</a>
          </li>
          <li class="mr-10">
            <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-full">
              My Projects
            </button>
          </li>
        </ul>
      </div>
  
      <div className="relative">
        <h1 className="text-large font-black text-2xl graphie text-indigo-700 ml-64">creative <br /> agency</h1>
  
        <button className="focus:outline-none text-large ml-64 text-indigo-700">
          <FontAwesomeIcon icon={faPlayCircle} />
        </button>
  
        <img className="ghost-image z-10" src="./assets/Image_1.png" alt="agency_banner" />
      </div>
    </section>
  );

  export default HeaderSection;
