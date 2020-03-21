import React from 'react';

const TeamSection = () => {
    return (
        <section className="bg-white-100">
            <img className="opacity-25 absolute right-0 -mr-64 below-all" src="./assets/point_grid.svg" alt="point-grid" />
            <div className="mx-auto w-9/12 container text-center pt-40 pb-40 z-40">
                <h1 className="text-gray-500">Meet the team</h1>
                <p className="text-5xl text-purple-500">great outcome always relay <br /> on the great foundation</p>

                <div className="flex">
                    <div className="flex-col w-8/12">
                        <img className="" src="./assets/pexels_photo_846741_removebg_p.png" alt="" />

                        <div className="flex-col mt-10">
                            <h1 className="text-purple-500 font-black">Jam Patrick</h1>
                            <small className="text-gray-500">Standard screen generation and design for all</small>
                        </div>
                    </div>

                    <div className="flex-col w-8/12">
                        <img className="" src="./assets/pexels_photo_1036623_removebg_.png" alt="" />

                        <div className="flex-col mt-10">
                            <h1 className="text-purple-500 font-black">ema jonas</h1>
                            <small className="text-gray-500">Standard screen generation and design for all</small>
                        </div>
                    </div>

                    <div className="flex-col w-8/12">
                        <img className="" src="./assets/pexels_photo_846741_removebg_p.png" alt="" />

                        <div className="flex-col mt-10">
                            <h1 className="text-purple-500 font-black">mike pens</h1>
                            <small className="text-gray-500">Standard screen generation and design for all</small>
                        </div>
                    </div>
                </div>

                <button className="shadow-xl bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-4 px-16 mt-20 rounded-full">
                    LETS CATCH ALL
          </button>


                <form className="mt-20 w-full formline_bg">
                    <h1 className="text-gray-500">Contact Us</h1>
                    <p className="text-5xl text-purple-500">Have an awesome idea in your mind? <br /> we would love to hear</p>

                    <div class="md:flex md:items-center mt-6 mb-6 justify-center">
                        <div class="md:w-1/3">
                            <input class="appearance-none border-2 border-purple-200 rounded-full w-full py-6 px-10 text-purple-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Enter your Email" />
                        </div>
                        <button className="ml-10 shadow-xl bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-6 px-10 rounded-full">
                            Start
              </button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default TeamSection;
