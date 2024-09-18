import { useState } from "react";
import Button from "../UI/Button";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const toggleBurger = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  const commonLinks = [
    { href: "services", text: "Services" },
    { href: "chooseUs", text: "Why Choose Us" },
    { href: "testimonal", text: "Testimonal" },
    { href: "pricing", text: "pricing" },
  ];

  return (
    <div className="relative" id="header">
      <div className="mx-7 flex items-center justify-between rounded-3xl py-7 text-text">
        {/* Header Image part */}
        <div className="cursor-pointer">
          <p className="text-3xl font-bold">
            Click<span className="text-primary">It</span>
          </p>
        </div>
        <div className="hidden items-center gap-20 lg:flex">
          <div className="flex flex-row gap-10 font-normal">
            {commonLinks.map((link, index) => (
              <a
                href={`#${link.href}`}
                key={link.href}
                className="cursor-pointer transition-all hover:text-gray-300"
              >
                {link.text}
              </a>
            ))}
          </div>
          <Button text="Get Started" className="h-[56px] w-[149px]" />
        </div>
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              toggleBurger();
            }}
            className="relative flex h-20 w-20 items-center justify-center"
          >
            <div className="relative w-full">
              <div
                className={`absolute left-1/2 h-[1px] w-[40%] -translate-x-1/2 transform bg-white transition-all duration-500 ${
                  isBurgerActive ? "top-0 rotate-45" : "-top-1.5"
                }`}
              ></div>
              <div
                className={`absolute left-1/2 h-[1px] w-[40%] -translate-x-1/2 transform bg-white transition-all duration-500 ${
                  isBurgerActive ? "top-0 -rotate-45" : "top-1.5"
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`top-18 fixed right-0 z-50 h-screen w-full bg-background text-2xl text-white transition-transform duration-500 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4"></div>
        <ul className="mx-8 flex flex-col items-start gap-8 font-normal">
          {commonLinks.map((link, index) => (
            <a
              href={`#${link.href}`}
              key={link.href}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                toggleBurger();
              }}
              className="w-full cursor-pointer underline underline-offset-8 transition-all hover:text-primary"
            >
              {link.text}
            </a>
          ))}
          <Button
            text="Get Started"
            className="h-[56px] w-full text-base font-extralight"
          />
        </ul>
      </div>
    </div>
  );
}
