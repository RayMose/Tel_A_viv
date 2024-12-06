import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-bold">{testimonial.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {testimonial.role}
          </p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        "{testimonial.content}"
      </p>
    </div>
  );
};

export default TestimonialCard;