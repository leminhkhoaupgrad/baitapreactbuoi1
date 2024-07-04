import React from "react";

const Item = ({ title, description }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <img
        className="w-full h-48 object-cover mb-4"
        src="http://placehold.it/500x325"
        alt=""
      />
      <h4 className="text-xl mb-2">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">
        Find Out More!
      </a>
    </div>
  );
};

export default Item;
