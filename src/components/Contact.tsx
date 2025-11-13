import { Phone, Mail, MapPin, Clock } from 'lucide-react';

function Contact() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600">
              We're here to help you find your dream home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Phone</h3>
              <a
                href="tel:+919953555853"
                className="text-green-700 font-semibold text-lg hover:text-green-800 transition-colors"
              >
                +91 9953555853
              </a>
              <p className="text-gray-600 mt-2 text-sm">
                Call us for immediate assistance
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
              <a
                href="mailto:sravinderpal1980@gmail.com"
                className="text-blue-700 font-semibold hover:text-blue-800 transition-colors break-all"
              >
                sravinderpal1980@gmail.com
              </a>
              <p className="text-gray-600 mt-2 text-sm">
                Send us your queries anytime
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Location</h3>
              <p className="text-gray-700 font-medium">
                Jal Nigam Road, Govind Puram Extension
              </p>
              <p className="text-gray-600 mt-1">
                NH-24, Ghaziabad-201015, U.P.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 md:p-12 text-white text-center">
            <Clock className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">Don't Miss Out!</h3>
            <p className="text-xl mb-2">Registration closes on 23rd November 2025</p>
            <p className="text-green-100">
              Allotment by draw on 26th November 2025
            </p>
            <div className="mt-8 inline-block bg-white text-green-700 px-8 py-3 rounded-full font-bold text-lg">
              Limited Slots Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
