import { Calendar, IndianRupee, MapPin } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

function Hero({ onRegisterClick }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">SPLS Aawasiya Yojna</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Griha Awas Yojna
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-green-50">
            उत्तर प्रदेश सरकार की अफोर्डेबल नीति के अन्तर्गत
          </p>

          <p className="text-lg md:text-xl mb-8 text-green-100">
            गाजियाबाद में किफायती आवास पाने का स्वर्णिम अवसर
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-8 py-4">
              <div className="flex items-center gap-2 mb-1">
                <IndianRupee className="w-6 h-6" />
                <span className="text-sm font-medium">Starting Price</span>
              </div>
              <p className="text-3xl font-bold">28.67 Lakhs*</p>
              <p className="text-xs text-green-100 mt-1">Rs. 3700/- Per Sq. Ft.</p>
            </div>

            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl px-8 py-4">
              <div className="flex items-center gap-2 mb-1">
                <IndianRupee className="w-6 h-6" />
                <span className="text-sm font-medium">Registration Fee</span>
              </div>
              <p className="text-3xl font-bold">Rs. 25,000/-</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-3 text-left">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-green-50">
                  Jal Nigam Road, Govind Puram Extension, NH-24, Ghaziabad-201015, U.P.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="bg-red-600 rounded-lg px-6 py-3 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <div className="text-left">
                <p className="text-xs font-medium">Last Date of Registration</p>
                <p className="font-bold">23rd November 2025</p>
              </div>
            </div>

            <div className="bg-orange-600 rounded-lg px-6 py-3 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <div className="text-left">
                <p className="text-xs font-medium">Allotment By Draw</p>
                <p className="font-bold">26th November 2025</p>
              </div>
            </div>
          </div>

          <button
            onClick={onRegisterClick}
            className="bg-white text-green-700 px-12 py-4 rounded-full text-xl font-bold hover:bg-green-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center gap-2"
          >
            Register Now
            <span className="text-2xl">→</span>
          </button>

          <p className="text-sm text-green-100 mt-6">
            Limited slots available. Register before the deadline!
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path
            fill="#f0fdf4"
            fillOpacity="1"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
