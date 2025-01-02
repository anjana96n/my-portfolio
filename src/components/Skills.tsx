
import SkillCard from './skills/SkillCard';
import { skillsData } from './skills/SkillsData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </div>

        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    icon={skill.icon}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;