import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      scroller.scrollTo(hash.substring(1), {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -80, // Adjust this based on your header height
      });
    }
  }, [location]);

  return null;
};

export default ScrollManager;
