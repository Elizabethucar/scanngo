import { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1551807501-1577675640e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBpZXxlbnwwfHwwfHx8MA%3D%3D",
      caption: "Slide 1",
    },
    {
      src: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFndWV0dGVzfGVufDB8fDB8fHww",
      caption: "Slide 2",
    },
    {
      src: "https://images.unsplash.com/photo-1591465001609-ded6360ecaab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGlra2ElMjBtYXNhbGF8ZW58MHx8MHx8fDA%3D",
      caption: "Slide 3",
    },
    {
      src: "https://images.unsplash.com/photo-1595786802424-d6efbc413db5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNhbGFkc3xlbnwwfHwwfHx8MA%3D%3D",
      caption: "Slide 4",
    },
    {
      src: "https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Slide 5",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  });

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
    <div className="relative border-slate-100 bg-white ">
      <div className="flex h-96 items-center justify-center bg-gradient-to-r from-gray-50 via-slate-300 to-gray-50">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute flex h-full w-full items-center justify-center transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.src} alt={slide.caption} className="h-96" />
          </div>
        ))}
      </div>
      <div className="bg mt-4 flex justify-center bg-white">
        <button
          className="rounded-l bg-green-600 px-4 py-2 font-bold text-white hover:bg-gray-700"
          onClick={goToPrevSlide}
        >
          Previous
        </button>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`bg-green-600 px-4 py-2 font-bold text-white hover:bg-gray-700 ${
              index === currentSlide ? "bg-green-700" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="rounded-r bg-green-600 px-4 py-2 font-bold text-white hover:bg-gray-700"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
