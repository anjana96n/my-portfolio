import React from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            <a href="#home">AN.</a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map(item => (
              <a 
                key={item.href} 
                href={item.href} 
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex space-x-4">
            <a href="https://github.com/anjana96n" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/anjananuwansiri/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <a 
                key={item.href}
                href={item.href} 
                className="block px-3 py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;