import { Users, Target, Award, Zap } from 'lucide-react';
import { BookOpen, Sparkles, MessageSquare, GraduationCap, Search, FileText, GaugeCircle, CreditCard } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=400&h=400&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?w=400&h=400&fit=crop',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=400&fit=crop',
    },
    {
      name: 'David Kim',
      role: 'Head of Marketing',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=400&fit=crop',
    },
  ];

  const stats = [
    { label: 'Years in Business', value: '10+' },
    { label: 'Happy Clients', value: '10K+' },
    { label: 'Team Members', value: '150+' },
    { label: 'Projects Delivered', value: '500+' },
  ];

  // const values = [
  //   {
  //     icon: Target,
  //     title: 'Customer Focused',
  //     description: 'We prioritize your success and work closely to understand your unique needs.',
  //   },
  //   {
  //     icon: Award,
  //     title: 'Excellence',
  //     description: 'Committed to delivering the highest quality solutions every single time.',
  //   },
  //   {
  //     icon: Users,
  //     title: 'Collaboration',
  //     description: 'We believe in the power of teamwork and open communication.',
  //   },
  //   {
  //     icon: Zap,
  //     title: 'Innovation',
  //     description: 'Constantly pushing boundaries to deliver cutting-edge solutions.',
  //   },
  // ];


const values = [
  {
    title: "Previous Year Question Papers",
    description: "Access solved previous year question papers with step-by-step answers.",
    icon: BookOpen,
  },
  {
    title: "Important Questions & Model Answers",
    description: "Get curated important questions and model solutions for exam preparation.",
    icon: Sparkles,
  },
  {
    title: "24/7 Availability",
    description: "Ask doubts anytime and get instant help — available round the clock.",
    icon: MessageSquare,
  },
  {
    title: "Guidance From Professors",
    description: "Expert-reviewed content for accurate answers and better understanding.",
    icon: GraduationCap,
  },

];


  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the story behind our company and what drives us to deliver excellence every day
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
         At study tap, we believe that today’s students can build tomorrow’s nation. To fabricate tomorrow’s nation one ought to have strong assurance, incredible confidence, tenacious spirit and powerful Urge. To all the students who are starving to taste the success and want to reach higher clouds we came up with an incredible opportunity called study tap. We have seen lots of students were confronted and still facing many problems to crack entrance exams and many other competitive exams.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
           In order to disclose this problem, we came up with one tap solution.Study tap is a one tap search engine for the students who are concocting to pursue their undergraduation and other courses and to crack their competitive and entrance exams of numerous universities. Study tap is extensively designed for the students who are excited to engage in their career.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we continue to push the boundaries of what's possible, combining cutting-edge technology with
                human-centered design to create solutions that truly make a difference.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Talented individuals working together to drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
