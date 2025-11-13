import { useState, useEffect } from 'react';
import { X, Home } from 'lucide-react';
import ContactForm from './components/ContactForm';
import ImageGallery from './components/ImageGallery';
import Hero from './components/Hero';
import Features from './components/Features';
import Contact from './components/Contact';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-all duration-300 shadow-lg hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Home className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
                Get Your Dream Home!
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Register now for Griha Awas Yojna
              </p>
              <ContactForm onClose={() => setShowModal(false)} />
            </div>
          </div>
        </div>
      )}

      <Hero onRegisterClick={() => setShowModal(true)} />
      <Features />
      <ImageGallery />
      <Contact />

      <footer className="bg-green-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Home className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">Griha Awas Yojna</span>
          </div>
          <p className="text-green-100">
            Making homeownership affordable for everyone
          </p>
          <p className="text-sm text-green-200 mt-4">
            © 2025 Griha Awas Yojna. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
