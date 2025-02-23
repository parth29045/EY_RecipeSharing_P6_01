// import React from 'react'

const Search = () => {
  return (
    <div className="flex relative w-[300px] m-auto items-center justify-center h-[70vh] flex-col">
      <input
        type="text"
        id="search-bar"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full block w-full pl-10 p-2"
        placeholder="Search..."
      />
      <p className="text-white text-center pt-6">
        Cook, Share, Savor - Recipes, Made for Everyone
      </p>
    </div>
  );
};

export default Search;
