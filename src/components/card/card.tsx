import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col w-fit mx-auto mt-4">
      <h2 className="font-semibold text-">{title}</h2>
      <img
        src={imgSrc}
        alt={`image of a ${title}`}
        className="w-[1000px] h-[150px] md:w-[380px] md:h-[250px] object-fit mb-2 rounded-md border-2 border-black"
      />

      <p className="text-clip w-[1000px] md:w-sm border-t-2 border-black">
        {description}
      </p>
    </div>
  );
};

export default Card;
