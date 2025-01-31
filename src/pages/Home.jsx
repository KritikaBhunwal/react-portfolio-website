import { useEffect } from 'react';
import gsap from 'gsap';

const Home = () => {
  useEffect(() => {
    gsap.from(".animate", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold animate">Welcome to My Portfolio</h1>
    </div>
  );
};

export default Home;
