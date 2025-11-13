import { Building2, Dumbbell, Waves, Baby, TreePine, Activity, BadgeCheck } from 'lucide-react';

function Features() {
  const features = [
    { icon: Building2, title: 'Club House', color: 'bg-blue-100 text-blue-600' },
    { icon: Waves, title: 'Swimming Pool', color: 'bg-cyan-100 text-cyan-600' },
    { icon: Dumbbell, title: 'Yoga Place', color: 'bg-green-100 text-green-600' },
    { icon: Baby, title: 'Kids Playing Area', color: 'bg-yellow-100 text-yellow-600' },
    { icon: Activity, title: 'Cycling Track', color: 'bg-orange-100 text-orange-600' },
    { icon: TreePine, title: 'Badminton Court', color: 'bg-emerald-100 text-emerald-600' },
  ];

  const approvals = [
    'RERA Registered',
    'Uttar Pradesh Government Approved',
    'SWAMIH Investment Fund',
    'Bank Loan Available (ICICI)',
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Premium Amenities
            </h2>
            <p className="text-xl text-gray-600">
              उत्तर प्रदेश सरकार का सपना, सबका घर हो अपना
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`${feature.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">{feature.title}</h3>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full mb-4">
                <BadgeCheck className="w-5 h-5" />
                <span className="font-semibold">Approved By</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {approvals.map((approval, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <BadgeCheck className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-800">{approval}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 font-medium">
                Bank Loan Available with ICICI Bank Home Loans
              </p>
              <p className="text-sm text-gray-600 mt-2">Khayaal Aapka</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
