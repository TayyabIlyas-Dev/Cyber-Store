import React from "react";
import { FaTwitter, FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
       

        {/* Services and Assistance Sections */}
        <div className="mt-8 grid grid-cols-1  gap-8">

          <div className="flex flex-wrap justify-center  gap-10">
            {/* Logo and Description */}
        <div>
        <h2 className="text-2xl font-bold text-white text-center sm:text-start">Made By Tayyab</h2>
        <p className="mt-2 text-sm text-[#CFCFCF]">
          We are a residential interior design firm located in Portland. 
        </p>
        </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-xs text-[#CFCFCF]">
              <li>Bonus program</li>
              <li>Gift cards</li>
              <li>Credit and payment</li>
              <li>Service contracts</li>
              <li>Non-cash account</li>
              <li>Payment</li>
            </ul>
          </div>

          {/* Assistance Section */}
          <div>
            <h3 className="text-lg font-semibold text-white">Assistance to the buyer</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#CFCFCF]">
              <li>Find an order</li>
              <li>Terms of delivery</li>
              <li>Exchange and return of goods</li>
              <li>Guarantee</li>
              <li>Frequently asked questions</li>
              <li>Terms of use of the site</li>
            </ul>
          </div>
          </div>

        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <FaTwitter className="text-2xl hover:text-gray-400 transition-colors cursor-pointer" />
          <FaFacebookF className="text-2xl hover:text-gray-400 transition-colors cursor-pointer" />
          <FaTiktok className="text-2xl hover:text-gray-400 transition-colors cursor-pointer" />
          <FaInstagram className="text-2xl hover:text-gray-400 transition-colors cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
