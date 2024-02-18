import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { FiMousePointer } from "react-icons/fi";
import img1 from "../assets/gallery/IMG20230325104956.jpg"
import img2 from "../assets/gallery/IMG20230325105037.jpg"
import img3 from "../assets/gallery/IMG20230325105048.jpg"
import img4 from "../assets/gallery/IMG20230325110308.jpg"
import img5 from "../assets/gallery/IMG20230325110323.jpg"
import img6 from "../assets/gallery/IMG20230325104958.jpg"
import img7 from "../assets/gallery/IMG20230325105041.jpg"
import img8 from "../assets/gallery/IMG20230325105647.jpg"
import img9 from "../assets/gallery/IMG20230325110310.jpg"
import img10 from "../assets/gallery/IMG20230325110325.jpg"
import img11 from "../assets/gallery/IMG20230325105000.jpg"
import img12 from "../assets/gallery/IMG20230325105042.jpg"
import img13 from "../assets/gallery/IMG20230325105648.jpg"
import img14 from "../assets/gallery/IMG20230325110314.jpg"
import img15 from "../assets/gallery/IMG20230325110326.jpg"
import img16 from "../assets/gallery/IMG20230325105002.jpg"
import img17 from "../assets/gallery/IMG20230325105047.jpg"
import img18 from "../assets/gallery/IMG20230325105651.jpg"
import img19 from "../assets/gallery/IMG20230325110316.jpg"

export const MouseTrailComponent = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19
      ]}
    >
      <div className="flex flex-col">
        <section className="grid h-[50vh] w-full place-content-center bg-gray-400">
          <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
            <FiMousePointer />
            <span>HOVER HERE</span>
          </p>
        </section>
      </div>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};