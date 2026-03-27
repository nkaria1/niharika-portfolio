import { useState } from 'react'
import { 
  Menu, 
  X, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Music, 
  Users,
  Linkedin,
  Github,
  ExternalLink,
  ChevronDown,
  Atom,
  Brain,
  BookOpen,
  Palette,
  TreePine,
  Award,
  Mail
} from 'lucide-react'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Interests', href: '#interests' },
    { name: 'Hobbies', href: '#hobbies' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="font-serif text-xl font-semibold text-gray-900">
              NK
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-600 hover:text-primary-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary-600 font-medium mb-4">Hello, I'm</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Niharika Karia
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-6">
                Data Scientist with 10+ Years of Experience
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Passionate about leveraging data to solve complex problems. 
                Specializing in discrete optimization techniques and exploring 
                the frontiers of quantum computing.
              </p>
              <div className="flex items-center gap-2 text-gray-500 mb-8">
                <MapPin size={18} className="text-primary-500" />
                <span>Located at Boston, MA, United States</span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#about"
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-primary-500 hover:text-primary-600 transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 p-2">
                  <img 
                    src="/headshot.jpg" 
                    alt="Niharika Karia" 
                    className="w-full h-full rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Briefcase size={20} className="text-primary-500" />
                    <span className="font-semibold text-gray-900">10+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Brain size={24} className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Data Science Expert</h3>
              <p className="text-gray-600">
                A decade of experience transforming complex data into actionable insights 
                and building predictive models that drive business decisions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Atom size={24} className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Quantum Computing</h3>
              <p className="text-gray-600">
                Exploring the intersection of quantum computing and optimization, 
                pushing the boundaries of what's computationally possible.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Heart size={24} className="text-primary-600" />
              </div>
              <h3 className="font-semibold text-xl text-gray-900 mb-3">Community Driven</h3>
              <p className="text-gray-600">
                Active contributor to the data science community through Kaggle competitions, 
                mentoring, and volunteering initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">Dell Technologies</h3>
                  <p className="text-primary-600">Data Scientist</p>
                </div>
                <span className="px-4 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                  <Award size={13} /> Patent
                </span>
              </div>
              <p className="text-gray-600">
                Working on cutting-edge data science solutions for enterprise clients, 
                applying machine learning and optimization techniques to solve complex business challenges.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">Aspen Technologies (Now Emerson)</h3>
                  <p className="text-primary-600">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-600">
                Developed data-driven solutions for Asset Performance Management and 
                predictive maintenance in the industrial sector.
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-xl text-gray-900">Tata Consultancy Services</h3>
                  <p className="text-primary-600">Software Engineer</p>
                </div>
              </div>
              <p className="text-gray-600">
                Contributed innovative solutions, 
                demonstrating expertise in developing novel technological approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Master's in Data Science
                  </h3>
                  <p className="text-primary-600 mb-3">Chicago, USA</p>
                  <p className="text-gray-600">
                    Advanced studies in machine learning, statistical modeling, 
                    and data engineering with focus on practical applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    Bachelor of Engineering
                  </h3>
                  <p className="text-primary-600 mb-3">India</p>
                  <p className="text-gray-600">
                    Strong foundation in engineering principles, mathematics, 
                    and computational thinking.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} className="text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    PG Certificate in Supply Chain Management using AI
                  </h3>
                  <p className="text-primary-600 mb-3">IIT Roorkee, India</p>
                  <p className="text-gray-600">
                    Specialized training in applying artificial intelligence 
                    to optimize supply chain operations and logistics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Learning */}
          <div className="mt-12">
            <h3 className="font-semibold text-xl text-gray-900 mb-6 text-center">
              Continuous Learning
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <BookOpen size={18} className="text-primary-500" />
                <span className="text-gray-700">Coursera Certifications</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <BookOpen size={18} className="text-primary-500" />
                <span className="text-gray-700">TED Talks Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section id="interests" className="section-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Research Interests
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 p-8 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Atom size={48} className="mb-6 opacity-90" />
              <h3 className="font-semibold text-2xl mb-4">Discrete Optimization</h3>
              <p className="text-primary-100 leading-relaxed">
                Passionate about solving complex combinatorial problems using advanced 
                optimization techniques. Exploring integer programming, constraint satisfaction, 
                and heuristic algorithms to tackle real-world challenges.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-8 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <Brain size={48} className="mb-6 opacity-90" />
              <h3 className="font-semibold text-2xl mb-4">Quantum Computing</h3>
              <p className="text-purple-100 leading-relaxed">
                Exploring the revolutionary potential of quantum algorithms for optimization 
                and machine learning. Investigating how quantum computing can transform 
                data science and solve previously intractable problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section id="hobbies" className="section-padding bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Beyond Data Science
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Music */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                <Music size={24} className="text-pink-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Music & Keyboard</h3>
              <p className="text-gray-600 text-sm">
                Finding harmony in melodies, playing keyboard as a creative outlet and stress reliever.
              </p>
            </div>

            {/* Volunteering */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Users size={24} className="text-green-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Volunteering</h3>
              <p className="text-gray-600 text-sm">
                Active volunteer at Zero Gravity NGO, Strongwater Farm, and Tewksbury Cultural Council. 
                Supporting equestrian therapeutic programs.
              </p>
            </div>

            {/* Art */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Palette size={24} className="text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Painting</h3>
              <p className="text-gray-600 text-sm">
                Creating art through acrylic paintings on canvas, expressing creativity beyond code.
              </p>
            </div>

            {/* Nature */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <TreePine size={24} className="text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Nature & Wellness</h3>
              <p className="text-gray-600 text-sm">
                Nature walks, yoga practice, and visiting waterfalls to stay connected with the outdoors.
              </p>
            </div>

            {/* Learning */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Lifelong Learning</h3>
              <p className="text-gray-600 text-sm">
                Forever a student - reading books, solving Rubik's cubes, playing chess, and exploring new ideas.
              </p>
            </div>

            {/* Advocacy */}
            <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <Heart size={24} className="text-red-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Social Causes</h3>
              <p className="text-gray-600 text-sm">
                Advocating for financial literacy, empathy for endangered species, and protection of women and children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social & Contact Section */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-600 mb-6">
            Open to opportunities in data science, optimization research, and quantum computing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a 
              href="https://www.linkedin.com/in/niharika-karia/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
              <span className="font-medium">LinkedIn</span>
            </a>
            <a 
              href="https://www.kaggle.com/nkaria1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full hover:bg-cyan-600 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.071.358"/>
              </svg>
              <span className="font-medium">Kaggle</span>
            </a>
            <a 
              href="https://github.com/nkaria1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition-colors"
            >
              <Github size={18} />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-500">
            <MapPin size={16} />
            <span>Boston, MA, USA</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="font-serif text-2xl font-semibold mb-2">Niharika Karia</p>
              <p className="text-gray-400">Data Scientist | Optimization Enthusiast | Lifelong Learner</p>
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Niharika Karia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
