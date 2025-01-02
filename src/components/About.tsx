
import { Code2, Rocket, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I'm specializing in full-stack development and AI/ML projects. Passionate about solving real-world problems and driving business growth, I aim to leverage my skills to develop cutting-edge technology. Let's connect to collaborate on innovative solutions that push the boundaries of tech.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code2 className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-600">
              Writing maintainable, scalable, and efficient code is my top priority.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Rocket className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              Always exploring new technologies and approaches to solve problems.
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              Strong team player with excellent communication skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;