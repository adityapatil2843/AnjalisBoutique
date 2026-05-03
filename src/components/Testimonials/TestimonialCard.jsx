import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

const TestimonialCard = ({ testimonial }) => {
  const { theme } = useTheme();
  const { name, photo, rating, text, type } = testimonial;

  const bgGradient = theme === 'anjali-dark' 
    ? 'bg-gradient-to-br from-base-200 to-base-300 border-base-content/10'
    : 'bg-gradient-to-br from-pink-50 to-white border-pink-100';

  return (
    <div className={`min-w-[300px] max-w-[350px] p-6 rounded-2xl shadow-lg border snap-center shrink-0 flex flex-col gap-4 transition-colors duration-300 ${bgGradient}`}>
      <div className="flex items-center gap-4">
        <img 
          src={photo} 
          alt={name} 
          className="w-14 h-14 rounded-full border-2 border-primary object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-base-content text-lg">{name}</h4>
           <div className="flex text-secondary gap-1 mt-0.5">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} size={14} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-base-content/80 italic relative flex-grow leading-relaxed">
        <span className="text-primary text-4xl leading-none absolute -top-4 -left-2 opacity-20">"</span>
        {text}
      </p>
      <div className="mt-auto pt-2 text-right">
         <span className="text-xs uppercase tracking-wide font-bold text-primary/60 bg-primary/10 px-3 py-1 rounded-full">
            {type}
         </span>
      </div>
    </div>
  );
};

export default TestimonialCard;
