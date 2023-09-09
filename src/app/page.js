"use client";
import React from "react";
import Testimonials from "./components/sliders/Testimonials";
import { motion } from "framer-motion";
import LottieAnimation from "./components/LootieAnimations";
import CustomerNotifacations from "../../public/lootieAnimations/customer-notification.json";
import DigitalMarketing from "../../public/lootieAnimations/digital-marketing.json";
import CustomerLedger from "../../public/lootieAnimations/customer-ledger.json";
import RealEstateInventory from "../../public/lootieAnimations/real-estate-inventory.json";
import OnlinePayments from "../../public/lootieAnimations/online-payments.json";

import Link from "next/link";
import ContactForm from "./components/ContactForm";

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
    <div className="scroll-smooth">
      <div id="homeSection"></div>
      {/* top portion */}
      <div className="bg-[url('/images/Mask.png')] h-[700px] bg-cover bg-no-repeat bg-bottom flex items-center justify-center p-5">
        <div className="lg:mt-[-180px] flex flex-col items-center gap-5 text-white">
          <h2 className="font-bold text-3xl  text-center">
            RealTrack: Designed by Developers, For Developers
          </h2>
          <p className="text-center lg:w-[50%]">
            <span className="text-xl font-bold">
              Unlock the Future of Real Estate Development with RealTrack
              <br />
            </span>            
          </p>
          <p className="text-center lg:w-[50%]">
            Whether you are scaling up your real estate business or just getting
            started, the digital landscape can be overwhelming. RealTrack
            simplifies and amplifies every aspect of your real estate journey,
            bringing the world of property development to your fingertips.</p>
          <Link
            href="#inquirySection"
            className="bg-yellow-500 py-3 px-8 rounded-md hover:bg-opacity-80"
          >
            GET IT NOW
          </Link>
        </div>
      </div>

      {/* image portion */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className="flex items-center justify-center mt-[-80px] md:mt-[-150px] lg:mt-[-300px]"
      >
        <img src="/images/main1.png" alt="" className="h-[600px]" />
      </motion.div>

      {/* Joint Venture portion */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className="flex flex-col items-center justify-center "
      >
        <h4 className="text-3xl text-center">
          It is a joint effort of{" "}
          <span className="font-bold">Dayim Marketing</span> and{" "}
          <span className="font-bold">Global Business Concern</span>
        </h4>
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center pb-20 mt-20">
          <img src="/images/client2.png" alt="" className="h-[80px]" />
          <img src="/images/client1.png" alt="" className="h-[80px]" />
        </div>
      </motion.div>

      {/* Ready to get started section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className="bg-[url('/images/Mask2.png')] h-[450px] bg-cover bg-no-repeat bg-bottom p-5"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-white mt-14">
          <h2 className="font-bold text-4xl">
            Get Started with RealTrack Today!
          </h2>
          <p className="lg:w-[50%] text-center">
            Sign up for a demo or contact our expert team for more information.
            Your next big project deserves the best digital partner.
          </p>
          <Link
            href="#inquirySection"
            className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80"
          >
            GET IT NOW
          </Link>
        </div>
      </motion.div>

      {/* Features Section */}
      <div id="featuresSection"></div>
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className="bg-[#FBFCFE] flex flex-col items-center justify-center p-5 lg:p-20"
      >
        <h2 className="font-bold text-4xl">Why Choose RealTrack?</h2>
        {/* <p className="text-[#7E92AC] mt-5 lg:w-[500px] text-center text-sm">
          Below are some of the features that we are providing
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20">
          <div className="py-10 px-10 bg-[#FFFFFF] hover:bg-white hover:shadow-lg rounded-lg flex flex-col items-start">
            <img
              src="/images/featuresicon2.png"
              alt=""
              className="h-[100px] ml-[-20px]"
            />
            <h4 className="font-bold text-xl">Real Estate-Centric</h4>
            <p className="mt-5 text-[#7E92AC]">
              Unlike generic platforms, RealTrack is made specifically for
              the real estate industry. This means every tool, every feature is
              tailored to your needs.
            </p>
          </div>

          <div className="py-10 px-10 bg-[#FFFFFF] hover:bg-white hover:shadow-lg rounded-lg flex flex-col items-start">
            <img
              src="/images/featuresicon1.png"
              alt=""
              className="h-[100px] ml-[-20px]"
            />
            <h4 className="font-bold text-xl">Developed by Experts</h4>
            <p className="mt-5 text-[#7E92AC]">
              Who knows real estate developers better than fellow developers?
              We have been in your shoes, and we have designed this platform to
              address every challenge we have faced.
            </p>
          </div>

          <div className="py-10 px-10 bg-[#FFFFFF] hover:bg-white hover:shadow-lg rounded-lg flex flex-col items-start">
            <img
              src="/images/featuresicon3.png"
              alt=""
              className="h-[100px] ml-[-20px]"
            />
            <h4 className="font-bold text-xl">All-in-One Solution</h4>
            <p className="mt-5 text-[#7E92AC]">
              Why juggle multiple tools when you can have everything under one
              roof? From marketing to customer management, we have packed
              everything you need in one intuitive platform.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Perfect Solution Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className="bg-white flex flex-col md:flex-row items-center justify-center p-5 lg:p-20 gap-10 "
      >
        <img
          src="/images/perfectSolution.PNG"
          alt=""
          className="md:w-[350px] lg:w-[600px] object-cover"
        />
        <div className=" space-y-5">
          <h4 className="text-3xl font-bold">Company Website Creation</h4>
          <p className="lg:w-[450px] pb-10">
            Showcase your brand with a sleek, modern website that resonates with
            your target audience. No technical knowledge needed.
          </p>

          <Link
            href="#inquirySection"
            className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80 "
          >
            GET IT NOW
          </Link>
        </div>
      </motion.div>

      {/* Easily Inventory Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className=" py-20"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="">
            <h4 className="font-bold text-3xl mb-5">Online Payments</h4>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                <span className="font-bold">Effortless Transactions:</span>{" "}
                Simplify the payment process for real estate transactions.
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                <span className="font-bold">Secure and Fast:</span> Ensure the
                safety and speed of financial transactions.
              </p>
            </div>
            <div className="flex items-center pb-10">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                <span className="font-bold">Tailored Payment Options:</span>{" "}
                Customized payment solutions designed specifically for the real
                estate industry.
              </p>
            </div>
            <Link
              href="#inquirySection"
              className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80"
            >
              GET IT NOW
            </Link>
          </div>
          <div className="lg:w-[40%]">
            <LottieAnimation animationData={OnlinePayments} />
          </div>
        </div>
      </motion.div>

      {/* Project Webpages Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className=" py-20 bg-white"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="">
            <h4 className="font-bold text-3xl mb-5">
              Real Estate Project Pages
            </h4>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Thoroughly document each project, covering its journey from
                initial concepts to the ultimate sale.
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Utilize user-friendly layouts that make it easy for stakeholders
                to access and understand project details.
              </p>
            </div>
            <div className="flex items-center pb-10">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Enhance project descriptions with dynamic visuals, such as
                images, videos, and interactive content, to provide a richer and
                more engaging experience.
              </p>
            </div>
            <Link
              href="#inquirySection"
              className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80"
            >
              GET IT NOW
            </Link>
          </div>
          <img
            src="/images/project-webpages.png"
            alt=""
            className="md:w-[350px] lg:w-[600px]"
          />
        </div>
      </motion.div>

      {/* Customer Notifacations Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className=" py-20 bg-[#FBFCFE]"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="">
            <h4 className="font-bold text-3xl mb-5">
              Automated Customer Notifications
            </h4>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Establish effortless communication channels to interact with
                your customers.
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Implement automated notification systems to keep customers
                informed throughout the entire process.
              </p>
            </div>
            <div className="flex items-center pb-10">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Provide customers with timely updates at each stage of their
                journey, enhancing their experience and trust in your services.
              </p>
            </div>
            <Link
              href="#inquirySection"
              className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80"
            >
              GET IT NOW
            </Link>
          </div>
          <div className="lg:w-[50%]">
            <LottieAnimation animationData={CustomerNotifacations} />
          </div>
        </div>
      </motion.div>

      {/* Digital Marketing Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className=" py-20 bg-white"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="">
            <h4 className="font-bold text-3xl mb-5">Digital Marketing Tools</h4>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Boost your online presence and expand your audience with a suite
                of potent marketing tools.
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Implement effective search engine optimization strategies to
                improve your websites visibility in search results.
              </p>
            </div>
            <div className="flex items-center pb-10">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Seamlessly integrate with social media platforms to leverage
                their reach and engage with your target audience effectively.
              </p>
            </div>
            <Link
              href="#inquirySection"
              className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80"
            >
              GET IT NOW
            </Link>
          </div>
          <div className="">
            <LottieAnimation animationData={DigitalMarketing} />
          </div>
        </div>
      </motion.div>

      {/* Customers Ledger Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className=" py-20 bg-[#FBFCFE]"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="">
            <h4 className="font-bold text-3xl mb-5">
              Customer Ledger Maintenance
            </h4>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Simplify financial processes by streamlining customer
                transactions and balances.
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Keep a close eye on customer transactions, ensuring accuracy and
                transparency.
              </p>
            </div>
            <div className="flex items-center pb-10">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Easily access and manage the complete financial histories of
                your customers for better record-keeping and analysis.
              </p>
            </div>
            <Link
              href="#inquirySection"
              className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80"
            >
              GET IT NOW
            </Link>
          </div>
          <div className="lg:w-[40%]">
            <LottieAnimation animationData={CustomerLedger} />
          </div>
        </div>
      </motion.div>

      {/* Real Estate Inventory Section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className=" py-20 bg-white"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div className="">
            <h4 className="font-bold text-3xl mb-5">Inventory Management</h4>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Access up-to-the-minute updates on your property listings,
                allowing you to stay informed at all times.
              </p>
            </div>
            <div className="flex items-center">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Quickly distinguish between available, pending, and sold
                properties with a convenient at-a-glance view.
              </p>
            </div>
            <div className="flex items-center pb-10">
              <img src="/images/tick.png" alt="" />
              <p className="lg:w-[400px] mt-[-20px]">
                Enable informed decision-making by staying ahead of the curve
                with the latest property status updates.
              </p>
            </div>
            <Link
              href="#inquirySection"
              className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80"
            >
              GET IT NOW
            </Link>
          </div>
          <div className="lg:w-[40%]">
            <LottieAnimation animationData={RealEstateInventory} />
          </div>
        </div>
      </motion.div>

      {/* Testomonials Section */}
      {/* <motion.div
        initial="hide"
        whileInView="show"
 viewport={{ once: true }}
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
        viewport={{ once: true }}
        variants={b_t_animation}
        className="bg-[#FBFCFE] flex flex-col items-center justify-center p-5 lg:p-20"
      >
        <h2 className="font-bold text-4xl">Frequently Asked Questions</h2>
        {/* <p className="text-[#7E92AC] mt-5 lg:w-[500px] text-center text-sm">
          Donec augue lorem, mollis quis dui sed, dictum vehicula turpis.
          Aliquam bibendum vel mi id tempor. Sed efficitur scelerisque mi.
          Nullam posuere nec ex in malesuada.
        </p> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 md:px-10">
          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                What makes RealTrack different from other web application
                platforms?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                RealTrack is specifically tailored for the real estate industry.
                Designed by real estate developers, it integrates every tool and
                feature a developer might need, eliminating the need for
                multiple platforms or third-party tools.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Do I need any technical knowledge to set up my company website?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Absolutely not! Our platform is user-friendly, and you can
                easily set up your website with our guided process. If you ever
                run into any issues, our support team is always here to help.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                How secure is the online payment feature?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Security is our utmost priority. Our online payment gateway uses
                industry-leading encryption and security protocols to ensure
                that every transaction is protected and secure.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Can I integrate RealTrack with my existing CRM or other tools?*
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Yes, RealTrack is designed to be flexible. We offer various
                integration options with popular CRMs and other business tools.
                If you have specific integration needs, please reach out to our
                team for assistance.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                How does the customer notification system work?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Our automated customer notification system keeps your clients
                informed about every step of their real estate journey, from
                initial inquiries to final purchase details. You can customize
                the frequency and type of notifications based on your
                preferences.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Is there a limit to the number of real estate project pages I
                can create?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                There is no hard limit. Our platform is designed to grow with
                your business, allowing you to create as many project pages as
                you need.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Do you offer any digital marketing services or is it just tools?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                We have a team of marketing experts who specialize in the real
                estate industry. Please contact us for more details if you are
                interested in these services.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                How does the pricing work for RealTrack?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Our pricing is structured based on the features you need. We
                offer multiple packages to cater to different business sizes and
                needs. For a detailed breakdown, please reach out to our sales
                team.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">
                Can I get a custom demo tailored to my business needs?
              </h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Absolutely! We offer personalized demos to prospective clients.
                Sign up through our website, and one of our representatives will
                be in touch to schedule a session.
              </p>
            </div>
          </div>

          <div className="flex">
            <img src="/images/questionMark.png" alt="" className="h-[100px]" />
            <div>
              <h4 className="font-bold text-xl">Have more questions?</h4>
              <p className="text-[#7E92AC] text-sm mt-3">
                Don not hesitate to [Contact Us]! We are here to assist and ensure
                you make the most out of RealTrack.
              </p>
            </div>
          </div>
        </div>

        <Link
            href="#inquirySection"
            className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80 mt-5"
          >
            CONTACT US
          </Link>

      </motion.div>

      {/* Inquiry Section */}
      <div id="inquirySection"></div>
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className="p-5 md:p-20 flex flex-col items-center justify-center gap-5"
      >
        <h4 className="font-bold text-4xl">Drop A Message For Inquiry</h4>
        {/* <p className="text-[#7E92AC] lg:w-[480px] text-center">
          Donec tempor finibus ante ac luctus. Fusce facilisis nisi vel odio
          tincidunt maximus. Pellentesque tempus gravida viverra.
        </p> */}
        <ContactForm />
      </motion.div>

      {/* Ready to get started reverse section */}
      <motion.div
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={b_t_animation}
        className="bg-[url('/images/Mask3.png')] h-[450px] bg-cover bg-no-repeat bg-top p-5 flex items-end justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-8 text-white   ">
          <h2 className="font-bold text-4xl">Get Started with RealTrack Today!</h2>
          <p className="lg:w-[50%] text-center">
            Sign up for a demo or contact our expert team for more information. Your next big project deserves the best digital partner.
          </p>
          <Link
            href="#inquirySection"
            className="bg-yellow-500 py-3 px-8 text-white rounded-md hover:bg-opacity-80"
          >
            GET IT NOW
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;
