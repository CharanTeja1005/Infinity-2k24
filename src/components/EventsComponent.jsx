// EventsComponent.js
import React from 'react';

const EventsComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-black">
      <div className="flex flex-col md:flex-row items-center justify-center p-8">
        <p className="text-6xl mb-8 md:mb-0 md:mr-4 text-white">Want to participate in events..?</p>
        <a href='/events'>
            <button className="text-lg px-8 py-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white font-bold shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out hover:from-blue-500 hover:to-blue-700 hover:scale-105">
                Know More
            </button>
        </a>
      </div>
    </div>
  );
}

export default EventsComponent;
