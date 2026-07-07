import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.jsx";

function Footer() {
  return (
    <footer className="bg-gray-900 mt-auto">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2 flex flex-col justify-between space-y-4">
            <div>
              <div className="inline-flex items-center">
                <Logo width="110px" />
              </div>
              <p className="mt-4 text-sm text-gray-400 max-w-xs leading-relaxed">
                A modern platform for sharing insightful stories, tutorials, and
                developer experiences.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Legals
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Blogspace. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 text-center sm:text-right">
            Designed with care by{" "}
            <a href="#" className="hover:text-gray-300 underline">
              Roshan Polai
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
