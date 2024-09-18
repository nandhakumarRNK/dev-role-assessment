import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaDribbble, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { TiSocialFacebook } from "react-icons/ti";
import Button from "../UI/Button";

const footerLinks = [
  { href: "#services", text: "Services" },
  { href: "#chooseUs", text: "Choose Us" },
  { href: "#testimonal", text: "Testimonal" },
  { href: "#pricing", text: "Pricing" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    icon: (
      <TiSocialFacebook
        size={20}
        className="cursor-pointer rounded-full bg-primary p-0.5 text-background transition-all hover:opacity-60"
      />
    ),
  },
  {
    href: "https://instagram.com",
    icon: (
      <FaInstagram
        size={20}
        className="cursor-pointer transition-all hover:opacity-60"
      />
    ),
  },
  {
    href: "https://linkedin.com",
    icon: (
      <FaLinkedinIn
        size={20}
        className="cursor-pointer transition-all hover:opacity-60"
      />
    ),
  },
  {
    href: "https://dribbble.com",
    icon: (
      <FaDribbble
        size={20}
        className="cursor-pointer transition-all hover:opacity-60"
      />
    ),
  },
];

export default function Footer() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [300, -100]);

  return (
    <div>
      <motion.div
        className="z-50 rounded-[2rem] bg-background text-center text-white"
        ref={containerRef}
        style={{ translateY }}
      >
        <div className="relative bg-gray-900 p-10 rounded-lg pt-10 text-center">
          <h1 className="mx-auto pt-16 text-4xl font-bold tracking-tighter md:text-7xl">
            "Stand out online and make
            <br /> an impact"
          </h1>
          <div className="glow absolute left-1/2 z-10 opacity-20"></div>
          <p className="pt-4 md:pt-8 md:text-lg">
            David Smith - CEO of a Tech Startup
          </p>
          <p className="md:pt-8 md:text-lg">
            Jump on a membership and start requesting designs right away!
          </p>
          <a href="#pricing" className="flex items-center">
            <Button
              text={
                <>
                  See Pricing <FaCircleArrowRight className="ml-3" />
                </>
              }
              className="mx-auto mt-12 h-14 w-[185px]"
            />
          </a>
        </div>
      </motion.div>
      <div className="mx-8 text-white">
        <div className="mt-72">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="flex-col">
              <p className="text-3xl font-bold">
                Click<span className="text-primary">It</span>
              </p>
              {/* <FadeOnScroll delay={0.2}> */}
              <p className="pt-8 font-light md:max-w-[311px]">
                Click It - the leading digital agency based Dedicated to driving
                success for business. Online with expertise in SEO,PPC online.
                With expertise in SEO, PPC, social media, content creation, and
                more, we offer
              </p>
              {/* </FadeOnScroll> */}
            </div>
            <div className="flex flex-col gap-4 font-light">
              {/* <FadeOnScroll delay={0.3}> */}
              <a
                href="mailto:info@kronix.com"
                className="flex items-center gap-4"
              >
                <HiOutlineMail size={20} /> info@kronix.com
              </a>
              {/* </FadeOnScroll> */}
              {/* <FadeOnScroll delay={0.4}> */}
              <a href="tel:(001) 1231 3435" className="flex items-center gap-4">
                <HiOutlinePhone size={20} /> (001) 1231 3435
              </a>
              <li className="flex items-center gap-5">
                {socialLinks.map((social, index) => (
                  <a href={social.href} key={index}>
                    {social.icon}
                  </a>
                ))}
              </li>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-auto mt-20 h-px w-11/12 border-0 bg-[#404040] md:w-full" />
      <div className="mx-8 flex flex-col justify-between gap-10 py-8 font-light text-white md:flex-row">
        <div className="flex flex-wrap gap-5 md:gap-10">
          {footerLinks.map((link, index) => (
            <a
              href={link.href}
              className="transition-colors hover:text-gray-300"
            >
              {link.text}
            </a>
          ))}
        </div>
        <a href="#">© 2023 rajaram - All Right Reserved</a>
      </div>
    </div>
  );
}
