import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Central Finance Company plc",
      period: "2023 March - Present",
      description: [
        "Built a scalable vehicle rental app using Spring Boot and Angular.",
        "Delivered flexible options like PAYG and premium services like CF Vitz.",
        " Ensured quality through requirement gathering, testing, and version control"
      ]
    },
    {
      role: "Intern Software Engineer",
      company: "Nuclei technologies (private) limited",
      period: "2022 March - 2023 Feb",
      description: [
        "Contributed to Migration Center CRM and LMS projects using Next.js and Directus.",
        "Maintained code quality and collaboration with GitHub version control.",
        "Played a key role in delivering project success through active teamwork and innovation."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-xl text-gray-600">Professional Journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.role} className="bg-white rounded-lg p-6 flex gap-4">
              <div className="flex-shrink-0">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-600 mt-1">{exp.period}</p>
                <ul className="mt-4 space-y-2">
                  {exp.description.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;