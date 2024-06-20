import cloud from "./icons/cloud.jpg";

function App() {
  return (
    <div className="App h-full flex justify-center bg-black">
    <div className="m-100 w-3/4 h-screen  bg-slate-950 border-2 border-x-gray-900">
    <div className=" w-96 h-screen bg-slate-900 ml-32 border-2  border-sky-400"> 
 <div className="flex gap-32 justify-center">
 <div>
      <button type="submit" className="text-white absolute m-1 top-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search Places</button>
      </div>
    <div >
        <input type="search" id="default-search" className="block w-full mt-2.5 p-2 ps-10 text-sm text-white border border-gray-300 bg-slate-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
    </div>
 </div>
<div className="flex items-center justify-center min-h-screen">
      <img className="w-40 h-40" src={cloud} alt="Description of the image" />
    </div>
</div>
    </div>
    </div>
  );
}

export default App;
