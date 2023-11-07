import { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1631898039954-72eb4133d235?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Slide 1",
    },
    {
      src: "https://images.unsplash.com/photo-1594610352113-ad218529cfb7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Slide 2",
    },
    {
      src: "https://images.unsplash.com/photo-1591465001609-ded6360ecaab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlra2ElMjBtYXNhbGF8ZW58MHx8MHx8fDA%3D",
      caption: "Slide 3",
    },
    {
      src: "https://images.unsplash.com/photo-1519624014191-508652cbd7b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGJlZWYlMjBmb29kfGVufDB8fDB8fHww",
      caption: "Slide 4",
    },
    {
      src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVlZiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      caption: "Slide 5",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative border-slate-100 bg-white">
      <div className="flex h-96 items-center justify-center bg-gradient-to-r from-gray-50 via-slate-300 to-gray-50">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute flex h-full w-full items-center justify-center transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              className="h-96"
            />
          </div>
        ))}
      </div>
      <div className="bg mt-4 flex justify-center bg-white">
        <button
          className="rounded-l bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
          onClick={goToPrevSlide}
        >
          Previous
        </button>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 ${
              index === currentSlide ? "bg-gray-900" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="rounded-r bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;