import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ number, text, icon }) => {
  const [hasLoaded, setHasLoaded] = useState(false);

  // Trigger animation on page load
  useEffect(() => {
    const timer = setTimeout(() => setHasLoaded(true), 200); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: hasLoaded ? 1 : 0, scale: hasLoaded ? 1 : 0.95 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start justify-between w-full h-32 lg:h-36"
    >
      <div className="flex items-center space-x-4 mb-3">
        <motion.h1
          className="text-4xl font-bold text-indigo-900"
        >
          {number}
        </motion.h1>

        {/* Icon */}
        {icon && (
          <div className="text-3xl text-indigo-900 ml-auto">
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <motion.p
          className="text-indigo-900 text-sm"
        >
          {text}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default StatCard;
