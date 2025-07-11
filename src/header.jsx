import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "./assets/trekarios-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => setShowServices(!showServices);
  const closeServices = () => setShowServices(false);

  return (
    <main>
      <nav className="bg-hbg shadow-md p-4 left-0 right-0 z-50 w-full relative">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Menu icon - Mobile only */}
          <div className="block md:hidden">
            <button className="cursor-pointer" onClick={() => setIsOpen(true)}>
              <Menu className="text-trek1" size={24} />
            </button>
          </div>

          {/* Logo & Text */}
          <Link to="/" className="text-lg mr-5 sm:mr-20">
            <header>
              <div className="flex gap-1 mt-[-10px]">
                <img src={logo} alt="Trekarios Logo" className="w-10" />
                <div className="mt-[-3px]">
                  <h1 className="text-trek1 font-bold text-2xl mt-1">Trekarios</h1>
                  <p className="text-trek2 leading-5">Veterinary Clinic & Pharmacy</p>
                </div>
              </div>
            </header>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-trek1 text-lg items-center relative z-50">
            <Link to="/" className="hover:text-red-500">Home</Link>

            {/* Services Dropdown */}
            <div className="relative">
              <div
                onClick={toggleServices}
                className="flex items-center cursor-pointer hover:text-red-500"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`ml-1 transition-transform ${showServices ? "rotate-180" : "rotate-0"}`}
                />
              </div>
              {showServices && (
                <div className="absolute bg-white shadow-md mt-2 w-[300px] z-50 rounded-md p-4 space-y-2 text-sm text-gray-700">
                  <Link to="/animal-treatments" className="block hover:text-red-500">Animals treatment</Link>
                  <Link to="/drug-section" className="block hover:text-red-500">Sales of Veterinary drugs and poultry vaccines</Link>
                  <Link to="/pet-accessories" className="block hover:text-red-500">Pet Accessories & Dog Food</Link>
                  <Link to="/dog-care" className="block hover:text-red-500">Dogs Retainership and Boarding Services</Link>
                  <Link to="/chick-booking" className="block hover:text-red-500">Day Old Booking</Link>
                  <Link to="/agrochemicals" className="block hover:text-red-500">AgroChemicals and Input</Link>
                  <Link to="/consultancy" className="block hover:text-red-500">General Veterinary Consultancy</Link>
                </div>
              )}
            </div>

            <Link to="/about" className="hover:text-red-500">About</Link>
            <Link to="/contact" className="hover:text-red-500">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Blur Background Overlay for Desktop Dropdown */}
      <AnimatePresence>
        {showServices && (
          <motion.div
            className="hidden lg:block fixed inset-0 bg-white/30 backdrop-blur-[1px] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeServices}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Overlay - Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-bold text-red-600">Menu</div>
                <button onClick={() => setIsOpen(false)}>
                  <X className="cursor-pointer" size={24} />
                </button>
              </div>

              <nav>
                <ul className="space-y-6 text-gray-800 text-lg">
                  <li className="border-b-2 border-gray-300 hover:text-red-500">
                    <Link to="/">Home</Link>
                  </li>

                  {/* Services Dropdown */}
                  <div className="relative">
                    <p
                      onClick={toggleServices}
                      className="cursor-pointer border-b-2 border-gray-300 hover:text-red-500 flex items-center"
                    >
                      Services
                      <ChevronDown
                        size={20}
                        className={`ml-1 transition-transform ${showServices ? "rotate-180" : "rotate-0"}`}
                      />
                    </p>
                    {showServices && (
                      <ul className="mt-2 space-y-2 pl-4 text-sm">
                        <Link to="/animal-treatments" className="block hover:text-red-500">Animals treatment</Link>
                        <Link to="/drug-section" className="block hover:text-red-500">Sales of Veterinary drugs and poultry vaccines</Link>
                        <Link to="/pet-accessories" className="block hover:text-red-500">Pet Accessories & Dog Food</Link>
                        <Link to="/dog-care" className="block hover:text-red-500">Dogs Retainership and Boarding Services</Link>
                        <Link to="/chick-booking" className="block hover:text-red-500">Day Old Booking</Link>
                        <Link to="/agrochemicals" className="block hover:text-red-500">AgroChemicals and Input</Link>
                        <Link to="/consultancy" className="block hover:text-red-500">General Veterinary Consultancy</Link>
                      </ul>
                    )}
                  </div>

                  <li className="border-b-2 border-gray-300 hover:text-red-500">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="border-b-2 border-gray-300 hover:text-red-500">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Navbar;
