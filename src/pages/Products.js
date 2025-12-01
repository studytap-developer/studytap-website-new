import { Star } from 'lucide-react';

interface Card {
  title: string;
  price: string;
}

const pricingCards: Card[] = [
  { title: '1st year 1st semester', price: '1.1' },
  { title: '1st year 2nd semester', price: '1.2' },
  { title: '2nd year 1st semester', price: '2.1' },
  { title: '2nd year 2nd semester', price: '2.2' },
  { title: '3rd year 1st semester', price: '3.1' },
  { title: '3rd year 2nd semester', price: '3.2' },
  { title: '4th year 1st semester', price: '4.1' },
  { title: '4th year 2nd semester', price: '4.2' },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm mb-4">
            We are available in six branches of engineering
          </p>
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-gray-900">CIVIL CSE (All branches are available) </span>
            <span className="text-gray-900">EEE ECE IT ME and 8+ Other branches</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We would love to expand our wings to more branches in R18, R22, R25, JNTUK ,R19 , R20, R23 batches 
            IMPORTANT QUESTIONS WITH ANSWERS 
          </p>
        </div>

        <div className="text-center mb-16 mt-20">
          <h3 className="text-4xl font-bold mb-4">Our Pricing</h3>
          <p className="text-gray-600 text-lg">
            We have planned for an affordable pricing range to which every student could get access.
          </p>
        </div>

        <div className="flex gap-6 justify-center mb-16 flex-wrap lg:flex-nowrap">
                      <a href="https://play.google.com/store/apps/details?id=com.studytap " target="_blank" rel="noopener noreferrer">

          <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">GET IT ON</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </button>
          </a>
          <a href="https://apps.apple.com/in/app/studytap/id6443762838 " target="_blank" rel="noopener noreferrer">

          <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </button>
          </a>
        </div> 
     

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingCards.map((card, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-md transition text-center">
              <p className="text-gray-600 text-sm mb-4">{card.title}</p>
              <h4 className="text-3xl font-bold text-gray-900">
                {card.price} - <span className="text-blue-500">₹300/-</span>
              </h4>
              <p>for 2 months</p>
            </div>
          ))}
        </div>

    
        <div className="bg-gray-900 text-white rounded-3xl p-8 text-center mb-20">
          <h3 className="text-2xl font-bold mb-2">
            We got all the test paper answers referred in different text books
          </h3>
          <p className="text-gray-400">StudyTap - Hyderabad, Telangana</p>
        </div>
      </div>
    </div>
  );
}

