"use client";
import React from "react";
import Testimonials from "./components/sliders/Testimonials";
import { motion } from "framer-motion";

const HomePage = () => {
  const b_t_animation = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div>
      {/* top portion */}
      <div className="bg-[url('/images/Mask.png')] h-[700px] bg-cover bg-no-repeat bg-bottom flex items-center justify-center p-5">
        <div className="lg:mt-[-180px] flex flex-col items-center gap-5 text-white">
          <h2 className="font-bold text-4xl">
            Discover New Real Estate Solution
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className="bg-yellow-500 py-3 px-8 rounded-md hover:bg-opacity-80">
            GET IT NOW
          </button>
        </div>
      </div>

      {/* image portion */}
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex items-center justify-center mt-[-150px] lg:mt-[-300px]"
      >
        <img src="/images/main1.png" alt="" className="h-[600px]" />
      </motion.div>

      {/* clients portion */}
      <motion.div      
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col items-center justify-center "
      >
        <h4 className="font-bold text-4xl">Joint Venture</h4>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center pb-20 mt-20">
          <img src="/images/client2.png" alt="" className="h-[80px]" />
          <img src="/images/client1.png" alt="" className="h-[80px]" />        
        </div>

      </motion.div>

      {/* Features Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-[#FBFCFE] flex flex-col items-center justify-center p-5 lg:p-20"
      >
        <h2 className="font-bold text-4xl">Features</h2>
        <p className="text-[#7E92AC] mt-5 lg:w-[500px] text-center text-sm">
          Proin rhoncus, neque sed congue commodo, orci magna tristique ipsum,
          vel egestas risus augue quis justo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
          <div className="py-10 px-10 bg-[#FFFFFF] hover:bg-white hover:shadow-lg rounded-lg flex flex-col items-start">
            <img
              src="/images/featuresicon1.png"
              alt=""
              className="h-[100px] ml-[-20px]"
            />
            <h4 className="font-bold text-xl">Customer Ledger</h4>
            <p className="mt-5 text-[#7E92AC]">
              Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec
              tempor finibus ante ac luctus. Fusce facilisis nisi tempor finibus
              ante ac luctus facilisi.
            </p>
          </div>

          <div className="py-10 px-10 bg-[#FFFFFF] hover:bg-white hover:shadow-lg rounded-lg flex flex-col items-start">
            <img
              src="/images/featuresicon2.png"
              alt=""
              className="h-[100px] ml-[-20px]"
            />
            <h4 className="font-bold text-xl">Project Webpages</h4>
            <p className="mt-5 text-[#7E92AC]">
              Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec
              tempor finibus ante ac luctus. Fusce facilisis nisi tempor finibus
              ante ac luctus facilisi.
            </p>
          </div>

          <div className="py-10 px-10 bg-[#FFFFFF] hover:bg-white hover:shadow-lg rounded-lg flex flex-col items-start">
            <img
              src="/images/featuresicon3.png"
              alt=""
              className="h-[100px] ml-[-20px]"
            />
            <h4 className="font-bold text-xl">Project Webpages</h4>
            <p className="mt-5 text-[#7E92AC]">
              Donec tempor finibus ante ac luctus. Fusce facilisis nisi. Donec
              tempor finibus ante ac luctus. Fusce facilisis nisi tempor finibus
              ante ac luctus facilisi.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Perfect Solution Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-white flex flex-col md:flex-row items-center justify-center p-5 lg:p-20 gap-10 "
      >
        <img
          src="/images/perfectSolution.PNG"
          alt=""
          className="md:w-[350px] lg:w-[600px] object-cover"
        />
        <div className=" space-y-5">
          <h4 className="text-3xl font-bold">Perfect Solution</h4>
          <p className="lg:w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dui
            orci, sodales a pellentesque vel, pharetra quis elit. In scelerisque
            lacinia diam eget egestas. Etiam non dui eu felis vestibulum.
          </p>
          <button className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80">
            GET IT NOW
          </button>
        </div>
      </motion.div>

      {/* Ready to get started section */}
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-[url('/images/Mask2.png')] h-[450px] bg-cover bg-no-repeat bg-bottom p-5"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-white mt-14">
          <h2 className="font-bold text-4xl">Ready to Get Started</h2>
          <p className="lg:w-[50%] text-center">
            Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
            tincidunt maximus. Pellentesque tempus gravida viverra.
          </p>
          <button className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80">
            GET IT NOW
          </button>
        </div>
      </motion.div>

      {/* Easily Inventory Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" py-20"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="">
            <h4 className="font-bold text-3xl mb-5">Easily Inventory</h4>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Sodales a pellentesque vel, pharetra quis elit. In scelerisque
                lacinia diam eget egestas.
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Sodales a pellentesque vel, pharetra quis elit. In scelerisque
                lacinia diam eget egestas.
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Sodales a pellentesque vel, pharetra quis elit. In scelerisque
                lacinia diam eget egestas.
              </p>
            </div>
            <button className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80">
              GET IT NOW
            </button>
          </div>
          <img
            src="/images/easilyInventory.png"
            alt=""
            className="md:w-[350px] lg:w-[600px]"
          />
        </div>
      </motion.div>

      {/* Testomonials Section */}
      {/* <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="  bg-[#FBFCFE] px-0 py-10 lg:py-20 lg:px-20"
      >
        <h4 className="font-bold text-center text-4xl mb-10">Testimonials</h4>
        <div className="mx-auto w-[95%] lg:w-[80%]">
          <Testimonials />
        </div>
      </motion.div> */}

      {/* Frequently asked Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-[#FBFCFE] flex flex-col items-center justify-center p-5 lg:p-20"
      >
        <h2 className="font-bold text-4xl">Frequently Asked Questions</h2>
        <p className="text-[#7E92AC] mt-5 lg:w-[500px] text-center text-sm">
          Donec augue lorem, mollis quis dui sed, dictum vehicula turpis.
          Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi.
          Nullam posuere nec ex in malesuada.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 md:px-10">
          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Fusce Sodales Placerat Nibh Eget ?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Duis sagittis orci non risus semper feugiat. Fusce ullamcorper
                sollicitudin velit et pretium. Ut quis orci sed dolor accumsan
                ultrices. Nunc ut ornare tellus. Nulla ut eros non lorem rhoncus
                blandit.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Fusce Sodales Placerat Nibh Eget ?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Duis sagittis orci non risus semper feugiat. Fusce ullamcorper
                sollicitudin velit et pretium. Ut quis orci sed dolor accumsan
                ultrices. Nunc ut ornare tellus. Nulla ut eros non lorem rhoncus
                blandit.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Fusce Sodales Placerat Nibh Eget ?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Duis sagittis orci non risus semper feugiat. Fusce ullamcorper
                sollicitudin velit et pretium. Ut quis orci sed dolor accumsan
                ultrices. Nunc ut ornare tellus. Nulla ut eros non lorem rhoncus
                blandit.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Fusce Sodales Placerat Nibh Eget ?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Duis sagittis orci non risus semper feugiat. Fusce ullamcorper
                sollicitudin velit et pretium. Ut quis orci sed dolor accumsan
                ultrices. Nunc ut ornare tellus. Nulla ut eros non lorem rhoncus
                blandit.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Fusce Sodales Placerat Nibh Eget ?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Duis sagittis orci non risus semper feugiat. Fusce ullamcorper
                sollicitudin velit et pretium. Ut quis orci sed dolor accumsan
                ultrices. Nunc ut ornare tellus. Nulla ut eros non lorem rhoncus
                blandit.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Fusce Sodales Placerat Nibh Eget ?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Duis sagittis orci non risus semper feugiat. Fusce ullamcorper
                sollicitudin velit et pretium. Ut quis orci sed dolor accumsan
                ultrices. Nunc ut ornare tellus. Nulla ut eros non lorem rhoncus
                blandit.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Inquiry Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="p-5 md:p-20 flex flex-col items-center justify-center gap-5"
      >
        <h4 className="font-bold text-4xl">Drop A Message For Inquiry</h4>
        <p className="text-[#7E92AC] lg:w-[480px] text-center">
          Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
          tincidunt maximus. Pellentesque tempus gravida viverra.
        </p>
        <div className="w-full md:w-[400px] lg:w-[500px] mt-5 flex flex-col gap-6 ">
          <input
            type="text"
            className="w-full outline-none border border-gray-300 py-3 px-5 rounded-md focus:border-yellow-500 bg-gray-50"
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full outline-none border border-gray-300 py-3 px-5 rounded-md focus:border-yellow-500 bg-gray-50"
            placeholder="Email"
          />
          <input
            type="number"
            className="w-full outline-none border border-gray-300 py-3 px-5 rounded-md focus:border-yellow-500 bg-gray-50"
            placeholder="Phone"
          />
          <textarea
            className="w-full outline-none border border-gray-300 py-3 px-5 rounded-md focus:border-yellow-500 bg-gray-50 h-[200px]"
            placeholder="Name"
          ></textarea>

          <button className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80 mx-auto">
            SEND MESSAGE
          </button>
        </div>
      </motion.div>

      {/* Ready to get started reverse section */}
      <motion.div
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-[url('/images/Mask3.png')] h-[450px] bg-cover bg-no-repeat bg-top p-5 flex items-end justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-white">
          <h2 className="font-bold text-4xl">Ready to Get Started</h2>
          <p className="lg:w-[50%] text-center">
            Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
            tincidunt maximus. Pellentesque tempus gravida viverra.
          </p>
          <button className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80">
            GET IT NOW
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
