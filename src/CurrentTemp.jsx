import React from 'react';
import cloud from './icons/cloud.jpg';

export default function CurrentTemp() {
  return (
    <div className="bg-slate-950 border-2 border-x-gray-900 p-4 rounded-lg h-full">
      <div className="w-96 h-full bg-slate-900 border-2 border-sky-400 ">
        <div className="flex gap-4 p-2">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search Places
          </button>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 text-sm text-white border border-gray-300 bg-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
        <div className="flex justify-center gap-x-6">
          <p className="text-white text-6xl">15°</p>
          <p className="text-white text-4xl">C</p>
        </div>
        <div className="flex justify-center gap-x-6">
          <p className="text-white text-2xl m-6">Shower</p>
        </div>
        <div className="flex justify-center gap-x-6 mb-10">
          <p className="text-white text-xl">date</p>
        </div>
        <div className='flex justify-center'>
        <button
            type="submit"
            className="m-2  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Add To Favourites
          </button>
        </div>
      </div>
    </div>
  );
}
