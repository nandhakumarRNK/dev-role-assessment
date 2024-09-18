import React from "react";
import Button from "../UI/Button";

function ChooseUsComponent() {
  return (
    <div>
      <div className=" mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <div className="mt-2 border-t-2 border-gray-500 w-24 mx-auto"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8">
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <img
                className="w-full md:w-1/2 h-48 rounded-lg"
                src="https://placehold.co/300x300"
                alt="Customized business solutions with technology and strategy"
              />
              <div className="md:ml-6 mt-4 md:mt-0">
                <h2 className="text-xl text-white font-bold">
                  Solutions Tailored Specifically to Your Business Needs
                </h2>
                <p className="mt-4 text-gray-300">
                  We provide customized solutions for your business needs,
                  ensuring relevance and success.
                </p>
                <Button text="Read More" className="mt-8 h-[56px] w-[149px]" />
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex flex-col md:flex-row-reverse">
              <img
                className="w-full md:w-1/2 h-48 rounded-lg"
                src="https://placehold.co/300x300"
                alt="Creative team working on innovative projects"
              />
              <div className="md:ml-6 mt-4 md:mt-0">
                <h2 className="text-xl text-white font-bold">
                  Creative Excellence Elevates Every Project
                </h2>
                <p className="mt-4 text-gray-300">
                  Creative excellence drives our work. From concept to
                  execution, we aim for exceptional results.
                </p>
                <Button text="Read More" className="mt-8 h-[56px] w-[149px]" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <img
                className="w-full md:w-1/2 h-48 rounded-lg"
                src="https://placehold.co/300x300"
                alt="Customized business solutions with technology and strategy"
              />
              <div className="md:ml-6 mt-4 md:mt-0">
                <h2 className="text-xl text-white font-bold">
                  Solutions Tailored Specifically to Your Business Needs
                </h2>
                <p className="mt-4 text-gray-300">
                  We provide customized solutions for your business needs,
                  ensuring relevance and success.
                </p>
                <Button text="Read More" className="mt-8 h-[56px] w-[149px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUsComponent;
