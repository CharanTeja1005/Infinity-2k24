import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeleton() {
  return (
    <div class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
      <Skeleton height={200} width={400} />
      <div class="mt-8">
        <h4 class="font-bold text-xl">
          <Skeleton width={250} />
        </h4>
        <p class="mt-2 text-gray-600">
          <Skeleton width={400} count={5} />
        </p>
        <div class="mt-5">
          <button
            type="button"
            class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900"
          >
            Start Creating
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
