import { useState } from 'react';

function MovieDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-4">
      <p className={`text-sm text-gray-300 transition-all duration-300 ${isExpanded ? "" : 'line-clamp-2'}`}>
        {description}
      </p>
      <button 
        onClick={toggleExpanded}
        className="text-primary hover:text-primary/80 text-sm font-semibold mt-1 transition-colors"
      >
        {isExpanded ? 'Voir moins' : 'Voir plus'}
      </button>
    </div>
  );
}

export default MovieDescription;
