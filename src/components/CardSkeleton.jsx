import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
  return (
    <div className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
      <div className="w-full h-64 rounded-lg bg-gray-300"></div>
      <div className="mt-8">
        <h4 className="font-bold text-xl">
          <Skeleton />
        </h4>
        <p className="mt-2 text-gray-600">
          <Skeleton count={2} width={300} />
        </p>
        <div className="mt-5">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
          >
            <Skeleton />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
