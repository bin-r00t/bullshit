// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import SearchBar from "../components/SearchBar.jsx";
import { Form } from "react-router-dom";
import {
  FaWeixin,
  FaPhoneSquareAlt,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-10">
      <div className="subscription  bg-gray-100">
        <div className="container mx-auto py-10 px-2">
          <h2 className="text-2xl font-bold leading-relaxed">
            Subscribe to newsletter
          </h2>
          <Form className="mt-3 flex">
            <input
              type="email"
              className="w-96 rounded-lg border p-2 px-4 text-gray-500"
            />
            <button className="bg-orange-400 hover:bg-orange-500 transition ml-6 text-white text-xs uppercase tracking-wide font-bold rounded-full px-24 py-3">
              subscribe
            </button>
          </Form>
        </div>
      </div>
      <div className="container mx-auto py-10 text-center text-gray-400 flex flex-col space-y-6">
        <section className="socials mx-auto flex space-x-5">
          <FaWeixin className="text-3xl hover:text-gray-600 transition cursor-pointer" />
          <FaPhoneSquareAlt className="text-3xl  hover:text-gray-600 transition cursor-pointer" />
          <FaGithub className="text-3xl  hover:text-gray-600 transition cursor-pointer" />
          <FaEnvelope className="text-3xl  hover:text-gray-600 transition cursor-pointer" />
        </section>
        <section className="copyright">
          Copyright &copy;2023 All rights reserved |{" "}
          <a className="text-orange-300" href="mailto:some@ww.com">
            @ww
          </a>
        </section>
        <section className="terms">Terms & Conditions / Privacy Policy</section>
      </div>
    </footer>
  );
}

export default Footer;
