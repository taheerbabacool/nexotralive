import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 lg:px-8">
      <div className="container mx-auto flex  justify-evenly sm:flex-2 md:flex-4 lg:flex-6 gap-16">

        {/* Company */}
        <div>
          <h1 className="font-bold mb-4">Links</h1>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:text-gray-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/company" className="hover:text-gray-300">
                Company
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-300">
                Blogs
              </Link>
            </li>
             
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 className="font-bold mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/services/cloud-integration" className="hover:text-gray-300">
                Business Consulting
              </Link>
            </li>
            <li>
              <Link to="/services/Talent-Hiring" className="hover:text-gray-300">
                Talent-Hiring
              </Link>
            </li>
            <li>
              <Link to="/services/full-stack" className="hover:text-gray-300">
                Web-Development
              </Link>
            </li>
            <li>
              <Link to="/services/mobile-development" className="hover:text-gray-300">
                Mobile-Development
              </Link>
            </li>
            <li>
              <Link to="/services/AI&ML" className="hover:text-gray-300">
               AI & ML
              </Link>
            </li>
            

             <li>
              <Link to="/services/cybersecurity" className="hover:text-gray-300">
               Cybersecurity
              </Link>
            </li>
          </ul>
        </div>

        {/* Reach Us */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2">
          <h4 className="font-bold mb-4">Reach Us</h4>
          <p className="mb-2">India - Andhra Pradesh , Anantapur</p>
          <li>
              <Link to="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </li>
        </div>
      </div>

      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p>&copy; All Rights Reserved @ Nexotra Technologies 2025</p>
        <div className="mt-2 space-x-4">
          <Link to="/privacy" className="hover:text-gray-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-300">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
