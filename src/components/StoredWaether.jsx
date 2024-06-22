import React from 'react'

export default function StoredWaether() {
  return (
    <div className="bg-slate-950 border-2 border-x-gray-900 p-4 rounded-lg h-full">
      <div className="w-full h-auto">
        <div className='flex justify-end gap-10'>
        <div>
        <button
            type="submit"
            className="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            C
          </button>
            </div>
            <div>
            <button
            type="submit"
            className="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            f
          </button>
        </div>
        </div>
        <div className='flex gap-4 m-10'>
        
<a href="#" class="block w-32 h-20 bg-slate-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class=" text-center text-xs text-white mb-10">Tomorrow</h5>
<div className='flex justify-between text-xs text-white'>
  <p>
  temp1
  </p>
  <p>
  temp2
  </p>
</div>

</a>        

<a href="#" class="block w-32 h-20 bg-slate-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class=" text-center text-xs text-white mb-10">Sun</h5>
<div className='flex justify-between text-xs text-white'>
  <p>
  temp1
  </p>
  <p>
  temp2
  </p>
</div>

</a>        
<a href="#" class="block w-32 h-20 bg-slate-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class=" text-center text-xs text-white mb-10">Mon</h5>
<div className='flex justify-between text-xs text-white'>
  <p>
  temp1
  </p>
  <p>
  temp2
  </p>
</div>

</a>        \
<a href="#" class="block w-32 h-20 bg-slate-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class=" text-center text-xs text-white mb-10">Tue</h5>
<div className='flex justify-between text-xs text-white'>
  <p>
  temp1
  </p>
  <p>
  temp2
  </p>
</div>

</a>        
<a href="#" class="block w-32 h-20 bg-slate-900 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class=" text-center text-xs text-white mb-10">Wed</h5>
<div className='flex justify-between text-xs text-white'>
  <p>
  temp1
  </p>
  <p>
  temp2
  </p>
</div>

</a>        

</div>

<div className="flex justify-center text-white font-bold">
       <p>
       Favourite Cities
       </p>
    </div>
    <div>
    <div  className="relative w-20 h-6 inline-block bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Parbhani
          <button 
            // onClick={() => removeCity(city)} 
            className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full w-4 h-4 flex items-center justify-center focus:outline-none"
          >
            &times;
          </button>
        </div>
    </div>
    </div>
  </div>
  )
}
