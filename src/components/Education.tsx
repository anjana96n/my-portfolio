
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of the Science of Engineering",
      school: "University of Jaffna",
      year: "2018 september - 2023 september",
      description: "Specialized in Computer Engineering with a strong foundation in Computer Science, focusing on Artificial Intelligence and Machine Learning to drive innovative solutions."
    } 
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600">Academic Background</p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.degree} className="bg-gray-50 rounded-lg p-6 flex gap-4">
              <div className="flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-600 font-medium">{edu.school}</p>
                <p className="text-gray-600 mt-1">{edu.year}</p>
                <p className="text-gray-700 mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;