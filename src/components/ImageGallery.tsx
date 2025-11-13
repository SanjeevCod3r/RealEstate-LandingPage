import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    '/WhatsApp Image 2025-11-13 at 12.18.08_ff8495fb.jpg',
    '/WhatsApp Image 2025-11-13 at 12.18.09_9f35a241.jpg',
    '/WhatsApp Image 2025-11-13 at 12.18.07_0dd4f280.jpg',
    '/WhatsApp Image 2025-11-13 at 12.18.06_535253c2.jpg',
    '/WhatsApp Image 2025-11-13 at 12.18.07_21fefbae.jpg',
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Property Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Take a look at your future home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`Property view ${index + 1}`}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg">
                    View Full Size
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-10 h-10" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <img
            src={images[selectedImage]}
            alt={`Property view ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
          />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {selectedImage + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageGallery;
