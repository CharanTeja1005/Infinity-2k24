import React from "react";

function Card({ poster, title, description, form_link }) {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-gray-900 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-slate-800 transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <span className="grid h-50 w-50 place-items-center rounded-md bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
          <img className="rounded-md" src={poster} />
        </span>
        <div className="space-y-6 pt-5 text-2xl font-bold leading-7 text-gray-500 transition-all duration-300 group-hover:text-white/90">
          <h2>{title}</h2>
        </div>
        <div className="pt-5 text-base font-semibold leading-7">
          <p>
            <a
              href="#"
              className="text-sky-500 transition-all duration-300 group-hover:text-white"
            >
              Read the docs &rarr;
            </a>
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Card;
