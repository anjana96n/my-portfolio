import { ArrowRight, Code2, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Anjana Nuwansiri
              <span className="block text-blue-600">Imagination into reality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I craft elegant solutions to complex problems using modern technologies
              and best practices. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
              {/* Background circles for design */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-full bg-blue-200 opacity-20" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-full bg-blue-400 opacity-20" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src="/img/dp.jpg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-0 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="absolute -left-4 bottom-0 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Server className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;