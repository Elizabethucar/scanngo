// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import { HiOutlineArrowUp } from "react-icons/hi";


const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on the scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 bg-slate-800 text-white p-4  rounded-full z-10 ${isVisible ? 'block' : 'hidden'}`}
    >
     < HiOutlineArrowUp />
    </button>
  );
};

export default Scroll;
