import { ArrowRight } from 'lucide-react';

interface Branch {
  id: string;
  name: string;
  shortName: string;
  fullDescription: string;
  description: string;
  image: string;
}

const branches: Branch[] = [
  {
    id: 'cse',
    name: 'Computer Science Engineering',
    shortName: 'CSE',
    fullDescription: 'Computer Science Engineering',
    description: 'Students pursuing Computer Science Engineering and having trouble finding previous year question papers online can get them here easily. We have uploaded the Previous year\'s question papers with answers and important questions in Study Tap. In addition, you can download semester-wise and, more specifically, subject-wise question papers from our app.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'eee',
    name: 'Electrical and Electronics Engineering',
    shortName: 'EEE',
    fullDescription: 'Electrical and Electronics Engineering',
    description: 'If you are a student in the Electrical and Electronics Engineering branch, you must find it tough to code with your studies. So, to make your learning easy, we have come up with the Previous years\' question papers and all important questions with answers available on Study Tap. You can download the PDF files and make learning easy, we have come up with the Previous years\' question papers with answers and important questions available on Study Tap for download.',
    image: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'civil',
    name: 'Civil Engineering',
    shortName: 'CIVIL',
    fullDescription: 'Civil Engineering',
    description: 'Make your preparation for your Civil Engineering semester exams effective with the previous year\'s question papers of R18, R22, R19 and R20, R23 JNTUK we have provided here. In addition, we made the Previous years\' question papers with answers and important questions available on Study Tap for easy access and download.',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'mech',
    name: 'Mechanical Engineering',
    shortName: 'MECH',
    fullDescription: 'Mechanical Engineering',
    description: 'Here is a way for the Mechanical Engineering students who are willing to gain top marks in the Mechanical R18, R22 semester exams. Get on the Mechanical Engineering previous year\'s question paper and instantly download the papers with solutions. Students can cover the entire syllabus by solving and practicing the previous year\'s question papers.',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'it',
    name: 'Information Technology',
    shortName: 'IT',
    fullDescription: 'Information Technology',
    description: 'Aspiring IT students can study better with the help of the previous year\'s question papers. With that in mind, we have compiled a PDF file consisting of the previous question papers with answers and important questions and put them up on Study Tap for download. Check them now!',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'ece',
    name: 'Electronics and Communications Engineering',
    shortName: 'ECE',
    fullDescription: 'Electronics and Communications Engineering',
    description: 'Electronics and Communications Engineering (ECE) is one of the most in-demand engineering courses, and the majority of the students opt for bachelor\'s in ECE only. However, if you are an ECE student searching for previous year\'s question papers, we covered you. You can access the previous year\'s question papers and important answers of all eight semesters of Engineering on our application.',
    image: 'https://images.pexels.com/photos/3862630/pexels-photo-3862630.jpeg?auto=compress&cs=tinysrgb&w=800',
  },

];

export default function Branches() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            All Engineering <span className="text-blue-500">Branches Covered</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete question paper coverage for all major engineering disciplines. Choose your branch to access previous year papers with detailed answers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {branches.map((branch) => (
            <div key={branch.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                  <span className="text-sm font-bold text-blue-600">{branch.shortName}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {branch.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {branch.description}
                </p>
                <a
                  href=" https://play.google.com/store/apps/details?id=com.studytap"
                  className="text-blue-500 font-medium flex items-center gap-2 hover:gap-3 transition"
                >
                  View Question Papers
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>


    <div className="bg-blue-50 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            +8 other braches are available 
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            We're constantly expanding our coverage. Contact us to request your branch.
          </p>
  
          <a
  href="https://wa.me/6304702631" 
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-blue-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition">
    Contact Us
  </button>
</a>
        </div>

    


      </div>
    </div>
  );
}
