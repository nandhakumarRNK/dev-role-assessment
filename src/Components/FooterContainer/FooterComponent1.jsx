import React from "react";
import { CiBasketball } from "react-icons/ci";
import { FaCircleArrowRight, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import Button from "../UI/Button";
//import "./index.css";

const Footer = () => {
  const commonLinks = [
    { href: "#services", text: "Services" },
    { href: "#chooseUs", text: "Why Choose Us" },
    { href: "#testimonal", text: "Testimonal" },
    { href: "#pricing", text: "pricing" },
  ];
  return (
    <div className="footer-section" id="contact-section">
      <div className="first-sec"></div>
      <div className="second-sec">
        <div className="sec-container">
          <div className="section-one">
            <p className="text-3xl font-bold">
              Click<span className="text-primary">It</span>
            </p>
            <p className="pt-8 font-light md:max-w-[311px]">
              Click It - is a leading digital marketing agency dedicated to
              driving success for businesses online. With expertise in SEO, PPC,
              social media, content creation, and more, we offer tailored
              solutions to maximize ROI. In the USA, UK, and Canada working with
              top-tier clients, from start-ups to enterprise
            </p>
          </div>
          <div className="section-two">
            <h4>Our Services</h4>
            <p>SEO Marketing</p>
            <p>Research Topic Trends</p>
            <p>Email Marketing</p>
            <p>Google PPC</p>
          </div>
          <div className="section-three">
            <h4>Our Location</h4>
            <p>USA</p>
            <p>UK</p>
            <p>Canada</p>
            <p>Virtual</p>
          </div>
          <div className="section-four">
            <h4>Contact us</h4>
            <div>
              <p>info@kronix.com</p>
            </div>
            <div>
              <p>(001) 1231 3435</p>
            </div>
            <div className="social-icons">
              <IoLogoFacebook />
              <LuInstagram />
              <FaLinkedinIn />
              <CiBasketball />
            </div>
          </div>
        </div>
        <hr className="mx-auto mt-20 h-px w-11/12 border-0 bg-[#404040] md:w-full" />
        <div className="footer-links">
          <div className="links">
            {commonLinks.map((link, index) => (
              <p key={link.href}>{link.text}</p>
            ))}
          </div>
          <p className="copyright">© 2024 RajaramanR3- All Right Reserved</p>
        </div>
      </div>
      <div className="relative foot-label p-4 md:p-6 lg:p-8">
        <p className="main-text text-lg md:text-xl lg:text-2xl text-center">
          “Stand out online and make an impact”
        </p>
        <p className="customer-text text-sm md:text-base lg:text-lg text-center mt-2">
          David Smith, CEO of a Tech Startup
        </p>
        <p className="sub-text text-xs md:text-sm lg:text-base text-center mt-4">
          Jump on a membership and start requesting designs right away!
        </p>
        <Button
          text={
            <>
              See Pricing <FaCircleArrowRight className="ml-2" />
            </>
          }
          className="mx-auto mt-6 h-12 w-[160px] md:h-14 md:w-[185px]"
        />
      </div>
    </div>
  );
};

export default Footer;
