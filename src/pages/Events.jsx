import React, { useState } from "react";
import Card from "../components/Card";
import event_info from "../data/events_info";
import CardSkeleton from "../components/CardSkeleton";

function Events() {
  const [showcard, setShowcard] = useState(false);
  const [eventInfoCard, setEventInfoCard] = useState({});

  const cards = event_info.map((event) => (
    <div
      onClick={() => {
        if (event.id === eventInfoCard?.id && showcard) {
          setShowcard(false);
        } else {
          setEventInfoCard(event);
          setShowcard(true);
          window.scrollTo(0, 0);
        }
      }}
    >
      <Card
        key={event.id}
        poster={event.poster}
        title={event.title}
        form_link={event.form_link}
      />
    </div>
  ));

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 m-10">
      <div className="  flex flex-col justify-center items-center gap-5 overflow-auto">
        {cards}
      </div>
      <div
      // className={`border border-white flex justify-center ${
      //   showcard ? "visible" : "hidden"
      // } h-fit`}
      >
        <CardSkeleton />
        {/* <div class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center">
          <img
            src="https://loremflickr.com/800/600/girl"
            class="shadow rounded-lg overflow-hidden border"
          />
          <div class="mt-8">
            <h4 class="font-bold text-xl">Exercises</h4>
            <p class="mt-2 text-gray-600">
              Create Exercises for any subject with the topics you and your
              students care about.
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
        </div> */}
      </div>
    </div>
  );
}

export default Events;
