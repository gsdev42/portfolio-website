import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Globe, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Aditya Kumar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Software Engineering Student • B.Tech 2nd Year
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Passionate about building scalable applications and exploring new technologies
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition">
                Get in Touch
              </a>
              <a href="#projects" className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50" id="skills">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-gray-700/50 backdrop-blur-sm">
              <Code2 className="w-12 h-12 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Programming</h3>
              <p className="text-gray-400">Java, Python, JavaScript, TypeScript</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-700/50 backdrop-blur-sm">
              <Globe className="w-12 h-12 mb-4 text-emerald-400" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-400">React, Node.js, HTML/CSS, Tailwind</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-700/50 backdrop-blur-sm">
              <Database className="w-12 h-12 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-2">Databases</h3>
              <p className="text-gray-400">MySQL, MongoDB, PostgreSQL</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-700/50 backdrop-blur-sm">
              <Cpu className="w-12 h-12 mb-4 text-red-400" />
              <h3 className="text-xl font-semibold mb-2">Tools & Technologies</h3>
              <p className="text-gray-400">Git, Docker, AWS, Linux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" id="projects">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden bg-gray-700/30 backdrop-blur-sm">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Smart Campus App</h3>
                <p className="text-gray-400 mb-4">A mobile application for campus navigation and event management using React Native and Firebase.</p>
                <div className="flex gap-2">
                  <a href="#" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-gray-700/30 backdrop-blur-sm">
              <div className="h-48 bg-[url('https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI Study Assistant</h3>
                <p className="text-gray-400 mb-4">An AI-powered study tool that helps students organize and understand complex topics using Python and OpenAI.</p>
                <div className="flex gap-2">
                  <a href="#" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300">
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a href="#" className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800/50" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <a href="mailto:aditya@example.com" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition">
                <Mail className="w-5 h-5" />
                aditya@example.com
              </a>
              <a href="https://github.com" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition">
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a href="https://linkedin.com" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-400 focus:outline-none" />
              </div>
              <div>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-400 focus:outline-none" />
              </div>
              <div>
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-400 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Aditya Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;