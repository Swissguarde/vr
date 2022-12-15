import React, { useState } from "react";
import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";
import Seo from "./Seo";

import House from "../assets/house.jpg";
import google from "../assets/google.svg";
import insider from "../assets/insider.svg";
import forbes from "../assets/forbes.svg";
import nbc from "../assets/nbc.svg";
import { FaCoins } from "react-icons/fa";
import { AiFillTag, AiOutlineFieldTime } from "react-icons/ai";
import { BsPersonCheck } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import Modal from "./Modal";

const Landing = () => {
  const images = [
    {
      image: google,
      id: 1,
    },
    {
      image: insider,
      id: 2,
    },
    {
      image: forbes,
      id: 3,
    },

    {
      image: nbc,
      id: 4,
    },
  ];

  const carouselInfo = [
    { address: "Oakwood Lane, London W14", coc: "12.27%", price: "56.24" },
    { address: "Notting Hill Gate, London W11", coc: "4.5%", price: "50.03" },
    {
      address: "Chester Street, Belgravia, London SW1X",
      coc: "23.14%",
      price: "52.23",
    },
    { address: "Fernshaw Road, London SW10", coc: "8.9%", price: "56.24" },
    {
      address: "Bedford Gardens, Kensington, London W8",
      coc: "8.7%",
      price: "53.24",
    },
  ];

  const gridInfo = [
    {
      header: "Daily rental income",
      para: "Earn rental income daily and withdraw anytime",
      icon: FaCoins,
    },
    {
      header: "Property appreciation",
      para: "Your ownership stake appreciates in value as the property appreciates",
      icon: AiFillTag,
    },
    {
      header: "Tax advantages",
      para: "Benefit from favorable real estate tax deductions like depreciation",
      icon: RiMoneyDollarBoxLine,
    },
    {
      header: "No Lock-up Period",
      para: "List your ownership stake for sale in our marketplace anytime",
      icon: BiBuildings,
    },
    {
      header: "Empowered Ownership",
      para: "Vote on all key property decisions, from repairs to rent changes",
      icon: BsPersonCheck,
    },
    {
      header: "Save time & Energy",
      para: "A property manager executes all vote decisions and handles the rest",
      icon: AiOutlineFieldTime,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pb-20 transition duration-200">
      <Seo
        title="HOME | VR BRICKS"
        description="HOME | VR BRICKS"
        name="VR BRICKS"
        type="Home"
      />
      <div>
        <div className="px-6 md:px-8 pb-56 pt-40 sm:pt-56 landingbg">
          <div className="max-w-xl">
            <h1 className="text-white text-4xl pt-12 w-fit rounded-md font-[900] sm:text-3xl md:text-7xl">
              Future of real estate investing
            </h1>
          </div>

          <div className="flex items-center space-x-4 mt-6">
            <Link
              to="/marketplace"
              className="rounded-3xl text-center bg-blue-700 p-2 text-sm text-white md:p-4 md:text-xl"
            >
              View Marketplace
            </Link>
            {/* <Link
              to="/about"
              className="rounded-3xl text-center border border-blue-700 p-2 text-sm text-white md:p-4 md:text-xl"
            >
              About VR BRICKS
            </Link> */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-3xl text-center border bg-white/60 p-2 text-sm text-blue-700 md:p-4 md:text-xl"
            >
              About VR BRICKS
            </button>
          </div>
        </div>
        {/* <video
          src={guide}
          autoPlay
          loop
          muted
          className="mt-24 sm:mt-0 top-0 right-0 max-w-full min-w-full"
        ></video> */}
        {/* {isOpen && <Modal />} */}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-between p-7 cursor-pointer w-full">
          {images.map((image) => (
            <div className="mx-auto">
              <img
                src={image.image}
                key={image.id}
                alt="brand_logo"
                className="h-10 object-cover text-center"
              />
            </div>
          ))}
        </div>

        <div className="marquee bg-blue-700 text-white">
          <div className="maylike-products-container track">
            {carouselInfo.map((info) => (
              <div className="text-sm sm:text-xl flex justify-center items-center pt-6">
                <span className="text-blue-800 font-bold mr-2"> |</span>{" "}
                {info.address}{" "}
                <span className="text-green-500 mx-2">{info.coc}</span>
                <span>BUSD{info.price}</span>{" "}
                <span className="text-blue-800 font-bold ml-2">|</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pb-24 pt-10 text-blue-700">
          <div className="grid grid-cols-1 items-center justify-center space-x-0 p-3 md:grid-cols-2 md:space-x-12 md:p-12">
            <div className="relative order-2 mt-10 flex h-[250px] w-64 items-center mx-auto sm:order-1 md:h-[400px] md:w-96">
              <img
                src={House}
                alt=""
                className="absolute rounded-[40px] object-cover"
              />
            </div>

            <div className="order-1">
              <h2 className="bg-gradient-to-r from-blue-400 to-gray-700 bg-clip-text pt-4 text-2xl font-[900] text-transparent md:text-6xl">
                Investing in real estate has never been easier
              </h2>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-blue-700 text-white p-6 text-3xl">
                  1
                </div>
                <div className="mb-2">
                  <h1 className="mb-2 text-2xl">Browse Properties</h1>
                  <p>
                    View detailed financial data, inspection reports, and more.
                    All property documents are publicly available
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex h-8 w-8 items-center justify-center text-white rounded-[50%] bg-blue-700 p-6 text-3xl">
                  2
                </div>
                <div className="mb-2">
                  <h1 className="mb-2 text-2xl">Select property</h1>
                  <p>
                    Purchase fractions of rental properties and become a direct
                    owner.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex h-8 w-8 text-white items-center justify-center rounded-[50%] bg-blue-700 p-6 text-3xl">
                  3
                </div>
                <div className="mb-2">
                  <h1 className="mb-2 text-2xl">Earn Rent and Appreciation</h1>
                  <p>
                    Receive rental income daily and withdraw anytime. Watch as
                    your ownership stake appreciates too, and enjoy flexibility
                    without a lock-up period.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 p-6 md:p-8">
          <Testimonials />
        </div>

        <div className="p-4 md:p-12 grid grid-cols-1 md:grid-cols-3 justify-between items-center gap-6 md:gap-12">
          {gridInfo.map((grid) => (
            <div className="text-center w-full">
              <div className="flex bg-slate-300 justify-center mx-auto  w-fit p-3 md:p-4 border-blue-700 rounded-full">
                {" "}
                {React.createElement(grid.icon, { size: "40" })}
              </div>
              <div className="text-xl my-4 text-blue-700">{grid.header}</div>
              <div className="text-sm">{grid.para}</div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center items-center w-full">
          <Link
            to="/about"
            className="rounded-3xl text-center bg-blue-700 p-2 text-sm text-white md:p-4 md:text-xl"
          >
            Learn More
          </Link>
        </div>

        <div className="mt-20 p-6 md:p-8">
          <div className="text-3xl md:text-5xl text-blue-700 font-bold">
            How our <br /> marketplace works
          </div>

          <div className="flex flex-col md:flex-row mx-auto justify-between items-center gap-6 mt-12 text-center text-white">
            <div className="grid grid-cols-1 justify-center items-center w-full gap-6">
              <div className="bg-blue-800 p-3 rounded">
                <p className="text-[gray] flex items-center justify-center">
                  Step 1{" "}
                  <span>
                    <GoVerified className="text-green-500 ml-2" />
                  </span>
                </p>
                <h2>Property submitted</h2>
              </div>
              <div className="bg-blue-800 p-3 rounded">
                <p className="text-[gray] flex items-center justify-center">
                  Step 2{" "}
                  <span>
                    <GoVerified className="text-green-500 ml-2" />
                  </span>
                </p>
                <h2>Property put under contract</h2>
              </div>
              <div className="bg-blue-800 p-3 rounded">
                <p className="text-[gray] flex items-center justify-center">
                  Step 3{" "}
                  <span>
                    <GoVerified className="text-green-500 ml-2" />
                  </span>
                </p>
                <h2>Property inspected</h2>
              </div>
              <div className="bg-blue-800 p-3 rounded">
                <p className="text-[gray] flex items-center justify-center">
                  Step 4{" "}
                  <span>
                    <GoVerified className="text-green-500 ml-2" />
                  </span>
                </p>
                <h2>Property listed</h2>
              </div>
            </div>
            <div className="max-w-2xl mx-auto w-full">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
