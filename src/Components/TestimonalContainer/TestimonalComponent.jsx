import React, { useRef, useState } from "react";

// Sample data
const reviews = [
  {
    name: "Customer 1",
    username: "@cust1",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    img: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg",
  },
  {
    name: "Customer 2",
    username: "@cust2",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    img: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Customer 3",
    username: "@cust3",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Customer 4",
    username: "@cust4",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Customer 5",
    username: "@cust5",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    img: "https://plus.unsplash.com/premium_photo-1661778906556-82ec2021c533?q=80&w=1740&auto=format&fit=crop",
  },
  {
    name: "Customer 6",
    username: "@cust6",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    img: "https://images.unsplash.com/photo-1614890107637-fe96d74acf4b?q=80&w=1740&auto=format&fit=crop",
  },
];

export default function TestimonialCarousel() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollAmount = 1;
  const totalItems = reviews.length;

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.clientWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % totalItems;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  return (
    <section className="w-full max-w-4xl px-4 py-8 mx-auto text-center">
      <h3 className="text-sm text-gray-500 uppercase mb-2">Testimonial</h3>
      <h2 className="text-4xl font-bold mb-4">
        Customer is Our Top <br /> Priority
      </h2>
      <p className="text-gray-600 mb-8">
        We survey all of our clients, the results of which go directly
        <br /> to our CEO.
      </p>

      <div className="relative">
        <button
          aria-label="Previous testimonial"
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div className="flex justify-center overflow-hidden py-4">
          <div className="flex-none w-full max-w-md bg-white shadow-lg rounded-lg p-6 mx-auto">
            <div className="flex items-center justify-center mb-4">
              <img
                src={reviews[currentIndex].img}
                alt={`Testimonial from ${reviews[currentIndex].name}`}
                className="w-20 h-20 object-cover rounded-full mr-4"
              />
            </div>
            <h4 className="text-xl font-bold mb-2">
              {reviews[currentIndex].name}
            </h4>
            <p className="text-gray-600 mb-4">{reviews[currentIndex].body}</p>
            <p className="text-gray-500 text-sm">
              {reviews[currentIndex].username}
            </p>
          </div>
        </div>

        <button
          aria-label="Next testimonial"
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
