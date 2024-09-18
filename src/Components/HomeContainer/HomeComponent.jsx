import Button from "../UI/Button";

export default function HomeComponent() {
  return (
    <>
      <div className="relative mt-20">
        <div className="z-10 flex flex-col items-center justify-center text-center text-white">
          <h2 className="z-10 text-4xl font-bold md:leading-[5rem] lg:text-7xl">
            <span className="font-jarkarta text-primary">Boost</span> Your Brand
            With <br />
            Innovative{" "}
            <span className="font-jarkarta text-primary">
              Digital Marketing
            </span>
          </h2>
          <p className="opacity-8 mt-4 w-3/4 font-[250] md:max-w-[500px]">
            Drive Engagement and Conversions with Advanced Digital Marketing
            Strategies
          </p>
          <Button text="Start Now" className="mt-8 h-[56px] w-[149px]" />

          {/* Glow effect background */}
          <div className="glow absolute opacity-35">
            {/* background image goes heee */}
            <img src="./assets/background.jpg" alt="LOGI" className="size-80" />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="inline-flex w-full items-center justify-center">
          <div className="quote">
            <p>Trusted By Thousand Companies</p>
          </div>
        </div>
        <div
          className="mx-7 mt-8 flex overflow-hidden justify-evenly rounded-2xl bg-bgCard py-7"
          style={{ opacity: "1" }}
        >
          <div className="flex justify-evenly gap-[5.5rem]">
            <div className="flex w-auto flex-shrink-0 list-none items-center gap-3 md:gap-5">
              <img
                src="./assets/brands/brand01.svg"
                alt="Layers"
                className="size-8"
              />
              <span className="text-xl font-semibold text-lightGray md:text-2xl">
                Layers
              </span>
            </div>
            <div className="flex w-auto flex-shrink-0 list-none items-center gap-3 md:gap-5">
              <img
                src="./assets/brands/brand02.svg"
                alt="Quotient"
                className="size-8"
              />
              <span className="text-xl font-semibold text-lightGray md:text-2xl">
                Quotient
              </span>
            </div>
            <div className="flex w-auto flex-shrink-0 list-none items-center gap-3 md:gap-5">
              <img
                src="./assets/brands/brand03.svg"
                alt="Circooles"
                className="size-8"
              />
              <span className="text-xl font-semibold text-lightGray md:text-2xl">
                Circooles
              </span>
            </div>
            <div className="flex w-auto flex-shrink-0 list-none items-center gap-3 md:gap-5">
              <img
                src="./assets/brands/brand04.svg"
                alt="Hooglass"
                className="size-8"
              />
              <span className="text-xl font-semibold text-lightGray md:text-2xl">
                Hooglass
              </span>
            </div>
            <div className="flex w-auto flex-shrink-0 list-none items-center gap-3 md:gap-5">
              <img
                src="./assets/brands/brand05.svg"
                alt="Command+R"
                className="size-8"
              />
              <span className="text-xl font-semibold text-lightGray md:text-2xl">
                Command+R
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
