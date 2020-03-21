/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const FooterSection = () => {
    return (
        <section className="bg-purple-100 footer_bg">
            <div className="mx-auto w-9/12 container pt-40 pb-40">

                <div class="flex">
                    <div class="flex-1 Poppins text-purple-600 px-4 py-2 m-2">
                        <h3 className="text-2xl text-indigo-800 title-logo font-black">agency</h3>
                        <br />
                        <p>A design agency shaping ideas into products. We help startups and enterprises invent, build and launch</p>
                    </div>

                    <div class="flex-1 text-gray-700 px-4 py-2 m-2">
                        <h1 className="text-xl text-indigo-800 Poppins">Services</h1>
                        <br />
                        <ul class="flex-col">
                            <li class="mr-10 mb-6">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Web Design</a>
                            </li>
                            <li class="mr-10 mb-6">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">App Design</a>
                            </li>
                            <li class="mr-10 mb-6">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Photography</a>
                            </li>
                            <li class="mr-10 mb-6">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Videography</a>
                            </li>
                        </ul>
                    </div>

                    <div class="flex-1 text-gray-700 px-4 py-2 m-2">
                        <h1 className="text-xl text-indigo-800 Poppins">Support</h1>
                        <br />
                        <ul class="flex-col">
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Get Support</a>
                            </li>
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Conatct</a>
                            </li>
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">My Blog</a>
                            </li>
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Privacy Policy</a>
                            </li>
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>


                    <div class="flex-1 text-gray-700 px-4 py-2 m-2">
                        <h1 className="text-xl text-indigo-800 Poppins">Social</h1>
                        <br />
                        <ul class="flex-col">
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">
                                    Facebook
                  </a>
                            </li>
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Twitter</a>
                            </li>
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">Dribble</a>
                            </li>
                            <li class="mr-10 mb-4">
                                <a class="text-purple-600 text-xl hover:text-indigo-500" href="#">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-center p-10">© Creative Agency | All rights Reserved 2020 </p>
            </div>
        </section>
    );
};

export default FooterSection;
