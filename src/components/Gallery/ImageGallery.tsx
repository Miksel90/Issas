import { useState, useEffect } from "react";
import images from "./imageData";

const ImageGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto mt-8">
      <div className="relative z-10">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full md:h-64 object-cover rounded-md shadow-lg"
        />
      </div>
      <div className="flex justify-center mt-4 space-x-2 overflow-x-hidden lg:overflow-x-visible">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative w-16 h-16 ${
              index === currentIndex ? "z-10" : ""
            } rounded-md overflow-hidden cursor-pointer transition-transform transform ${
              index === currentIndex ? "scale-110" : "scale-100"
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center z-20">
        <button
          onClick={handlePrevious}
          className="bg-white text-black text-xl font-bold p-1 rounded-full focus:outline-none bg-opacity-50"
        >
          &lt;
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center z-20">
        <button
          onClick={handleNext}
          className="bg-white text-black text-xl font-bold p-1 rounded-full focus:outline-none bg-opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
