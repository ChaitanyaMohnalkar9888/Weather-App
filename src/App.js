import cloud from "./icons/cloud.jpg";

function App() {
  return (
    <div className="App h-full flex justify-center bg-black">
    <div className="m-100 w-3/4 h-screen  bg-slate-950 border-2 border-x-gray-900">
    <div className=" w-96 h-screen bg-slate-900 ml-32 border-2  border-sky-400"> 
    <div className="flex gap-4">
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
        <div className="flex items-center justify-center h-full">
          <img
            className="w-40 h-40"
            src={cloud}
            alt="Description of the image"
          />
        </div>
</div>
    </div>
    </div>
  );
}

export default App;
