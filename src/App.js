import React from 'react';
// import CurrentTemp from './CurrentTemp';
import CurrentTemp from './components/CurrentTemp';
import StoredWaether from './components/StoredWaether';

function App() {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="flex w-full justify-center max-w-6xl gap-10">
        <div className='p-8 w-full h-full rounded-2xl' >
          <CurrentTemp />
        </div>
        {/* <div className="w-1/2">
          <StoredWaether />
        </div> */}
      </div>
    </div>
  );
}

export default App;
