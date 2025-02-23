// import React from 'react'

const Card = ({ image, name }) => {
  return (
    <div className="flex flex-col w-[200px] h-[300px] items-center justify-center">
      <div className="mt-10 w-[300px] h-[200px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="w-[300px] text-center">
        <h1 className="font-extrabold text-lg pt-4">{name}</h1>
      </div>
    </div>
  );
};

export default Card;
