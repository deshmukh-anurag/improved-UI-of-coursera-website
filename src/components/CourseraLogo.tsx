import React from 'react';

interface CourseraLogoProps {
  className?: string;
}

const CourseraLogo: React.FC<CourseraLogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Coursera "C" Logo - Simplified version matching official design */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3"
      >
        <circle cx="18" cy="18" r="16" fill="#0056D2"/>
        <path
          d="M18 8C12.477 8 8 12.477 8 18C8 23.523 12.477 28 18 28C20.5 28 22.7 27.1 24.4 25.6L22.3 23.5C21.1 24.6 19.6 25.2 18 25.2C14.1 25.2 11 22.1 11 18.2C11 14.3 14.1 11.2 18 11.2C19.6 11.2 21.1 11.8 22.3 12.9L24.4 10.8C22.7 9.3 20.5 8.4 18 8.4V8Z"
          fill="white"
        />
      </svg>
      {/* Coursera Text */}
      <span 
        className="text-2xl font-bold text-primary-light dark:text-primary-dark" 
        style={{ fontFamily: 'Source Sans Pro, sans-serif', fontWeight: 700 }}
      >
        Coursera
      </span>
    </div>
  );
};

export default CourseraLogo;
