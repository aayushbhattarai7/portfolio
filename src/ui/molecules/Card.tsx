import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string; 
  link: string;
  githubLink?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageSrc,
  link,
  githubLink,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full transition-transform transform hover:scale-105">
      <img
        src={imageSrc} 
        alt={title}
        className="w-full h-70 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a href={link} className="text-blue-600 hover:underline">
            Learn More
          </a>
          {githubLink && (
            <a
              href={githubLink}
              className="text-gray-600 hover:text-gray-900 flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.43 7.6.4.074.55-.174.55-.386v-1.359c-2.21.48-2.67-1.06-2.67-1.06-.36-.92-.88-1.16-.88-1.16-.72-.49.055-.48.055-.48.8.057 1.22.82 1.22.82.71 1.22 1.88.87 2.33.66.07-.51.28-.87.51-1.07-1.78-.2-3.65-.9-3.65-4.05 0-.9.32-1.64.85-2.23-.09-.2-.37-1.02.08-2.12 0 0 .69-.22 2.25.85a7.78 7.78 0 0 1 4.09 0c1.56-1.06 2.25-.85 2.25-.85.46 1.1.17 1.92.09 2.12.53.59.85 1.33.85 2.23 0 3.17-1.88 3.85-3.68 4.05.28.24.53.72.53 1.45v2.14c0 .21.14.46.55.39C13.71 14.54 16 11.54 16 8 16 3.58 12.42 0 8 0z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
