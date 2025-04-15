
import React, { useEffect, useState } from 'react';
import { FloatingShape } from './FloatingShape';

export const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4">
        <FloatingShape 
          type="circle" 
          color="bg-theme-imagination" 
          size="w-16 h-16" 
        />
      </div>
      <div className="absolute bottom-1/3 right-1/4">
        <FloatingShape 
          type="square" 
          color="bg-theme-education" 
          size="w-12 h-12" 
          delayClass="animate-float-delay-1"
        />
      </div>
      <div className="absolute top-1/3 right-1/5">
        <FloatingShape 
          type="triangle" 
          color="bg-theme-justice" 
          size="50px" 
          delayClass="animate-float-delay-2"
        />
      </div>
      
      <div className="text-center z-10 px-6 max-w-4xl">
        <h1 className={`text-6xl md:text-8xl font-bold mb-4 transition-all duration-700 ${
          scrolled ? 'opacity-50 scale-90' : 'opacity-100 scale-100'
        }`}>
          <span className="gradient-text gradient-imagination">Brave</span>{' '}
          <span className="gradient-text gradient-education">New</span>{' '}
          <span className="gradient-text gradient-justice">Worlds</span>
        </h1>
        
        <p className={`text-xl md:text-2xl mb-8 transition-all duration-500 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}>
          An interactive journey through imagination, education, language, justice, and fairness
        </p>
        
        <div className={`transition-all duration-700 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}>
          <a 
            href="#imagination" 
            className="inline-block px-6 py-3 bg-theme-imagination text-white rounded-full text-lg font-medium hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Begin the Journey
          </a>
        </div>
      </div>
      
      {/* Scrolldown indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
        scrolled ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="w-8 h-12 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-bounce" />
        </div>
        <p className="text-center mt-2 text-sm text-gray-600">Scroll to explore</p>
      </div>
    </div>
  );
};
