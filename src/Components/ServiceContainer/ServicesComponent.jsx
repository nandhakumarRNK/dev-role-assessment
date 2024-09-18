import React from "react";

// Define a list of services
const services = [
  { name: "SEO Marketing", image: "https://placehold.co/100x100" },
  { name: "Content Marketing", image: "https://placehold.co/100x100" },
  { name: "Social Media Management", image: "https://placehold.co/100x100" },
  { name: "PPC", image: "https://placehold.co/100x100" },
  { name: "Email Marketing", image: "https://placehold.co/100x100" },
  { name: "Email Marketing 1", image: "https://placehold.co/100x100" },
];

function ServicesComponent() {
  return (
    <div className="relative mt-20">
      <div className="text-center">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Services
          </h2>
          <div className="mt-2 border-t-2 border-gray-500 w-24 mx-auto"></div>
        </div>
        <p className="text-gray-400 mb-8">
          Strategic services drive digital success with tailored, comprehensive
          approaches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8 lg:mx-0">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-lime-400 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-lime-300 transition"
              aria-label={service.name}
            >
              <img
                src={service.image}
                alt={`${service.name} icon`}
                className="mb-4"
                role="img"
              />
              <h2 className="text-black font-semibold">{service.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
