import Mera from './Mera'
import AOS from "aos";
import "aos/dist/aos.css"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Services = () => {

  useEffect(()=>{
    AOS.init({duration:1500})
  })

  return (
    <>
    <section className="w-full px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-32 md:mb-48">
      <div>
        <span className="block mb-4 text-md md:text-xl text-green-600 font-medium">
        Scan´n Go
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
        Våra tjänster
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-6 mb-16 md:my-6">
        Låt oss tänka på maten så att ni slipper, spara tid och pengar med våra nyttiga matlådor på jobbet!
        </p>
        <a
          className="bg-green-700 hover:bg-gradient-to-r from-green-800 via-green-500 to-green-800 shadow-lg text-white w-[200px] mt-32 rounded-md font-medium my-6 mx-auto px-6 py-3 z-0"
          href="/contact"
            >
              Kontakta oss
            </a>
      </div>
      <ShuffleGrid />
    </section>
      <Mera />
      </>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !==0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdGF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1598720290281-9f26ae6d6f81?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhc3RhfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1612966893103-790e549a2ab1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBhc3RhfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3JhcCUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1603048719539-9ecb4aa395e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdGF0b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600688685721-852c38f6e8a6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvdGF0byUyMGFuZCUyMG1lYXRiYWxsc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 9,
    src: "https://plus.unsplash.com/premium_photo-1682147727994-a100b6e2e6ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhbmQlMjBvdmVyJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtwbGFjZSUyMGVhdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1541693948735-0509c9133c35?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRyaW5rcyUyMGZyaWRnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1629115916087-7e8c114a24ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhc2FnbmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1593001869807-9b07543c8688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFsYWZlbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVhdGJhbGxzfGVufDB8fDB8fHww",
  },
  {
    id: 15,
    src: "https://plus.unsplash.com/premium_photo-1683141331591-ab69e2c72a74?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNvZGF8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvZGF8ZW58MHx8MHx8fDA%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1 mt-12">
      {squares.map((sq) => sq)}
    </div>

  );
};


export default Services;