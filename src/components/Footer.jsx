import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Links */}
        <div className="flex flex-wrap md:flex-nowrap justify-between mb-6">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <div className="w-[100px]">
              <img src={logo} alt="logo" className="w-full" />
            </div>
            <div className="text-center flex items-center justify-between md:text-left">
              <p > © 2024 <br /> Mehta Pvt. Ltd</p>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul>
              <li>
                <a href="#about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#team" className="hover:underline">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Services</h3>
            <ul>
              <li>
                <a href="#swiggy-one" className="hover:underline">
                  Swiggy One
                </a>
              </li>
              <li>
                <a href="#swiggy-instamart" className="hover:underline">
                  Swiggy Instamart
                </a>
              </li>
              <li>
                <a href="#swiggy-genie" className="hover:underline">
                  Swiggy Genie
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <ul>
              <li>
                <a href="#contact-us" className="hover:underline">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#help-support" className="hover:underline">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#partner-with-us" className="hover:underline">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="#ride-with-us" className="hover:underline">
                  Ride with us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Legal</h3>
            <ul>
              <li>
                <a href="#terms-conditions" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#cookie-policy" className="hover:underline">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#privacy-policy" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Delivery Areas */}
        <div className="border-t border-gray-700 pt-6">
          <div className="text-center">
            <h4 className="text-lg font-bold mb-2">We deliver to:</h4>
            <ul className="flex flex-wrap justify-center gap-4">
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
