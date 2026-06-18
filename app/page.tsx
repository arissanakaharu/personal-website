"use client";

import {useState} from "react";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F5F5F0] font-sans text-gray-900">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#F5F5F0]/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center relative">
          
          {/* Sisi Kiri: Nama */}
          <span className="font-serif text-xl font-semibold">Hanunnisa Nurzahra Putri Diar</span>
          
          {/* Sisi Kanan: Tombol Menu Garis Tiga */}
          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-800 hover:text-green-800 transition-colors focus:outline-none"
              type="button"
            >
              {/* SVG Icon Garis Tiga */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Kotak Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-2xl shadow-xl py-2 z-50">
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-800/10 hover:text-green-800 transition-colors">About</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-800/10 hover:text-green-800 transition-colors">Projects</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-800/10 hover:text-green-800 transition-colors">Contact</a>
              </div>
            )}
          </div>

        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full pt-20">

          {/* Kiri: Teks */}
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">Hello, my name is</p>
            <h1 className="font-serif text-6xl font-bold leading-tight mb-6">Hanunnisa Diar</h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
              But most people call me Hanun! I'm just a student who is interested in the world of technology. Currently learning to create meaningful things.
            </p>
            <div className="flex gap-6 items-center mt-2">
              {/* Icon GitHub */}
              <a 
                href="https://github.com/arissanakaharu" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-green-800 transition-colors duration-300"
                title="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.0.069-.0.069 1.003.622 1.53 1.07 1.53.892 1.357 2.179.965 2.71.738.092-.646.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>

              {/* Icon LinkedIn */}
              <a 
                href="https://linkedin.com/in/hanunnisa-diar0402" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-green-800 transition-colors duration-300"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                </svg>
              </a>

              {/* Icon Instagram */}
              <a 
                href="https://www.instagram.com/hanundiar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-green-800 transition-colors duration-300"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Kanan: Foto */}
          <div className="relative flex justify-center">
            {/* Kotak hijau di belakang (seperti di Figma) */}
            <div className="absolute top-4 right-4 w-72 h-80 bg-green-800 rounded-2xl"></div>
            {/* Kotak foto di depan */}
            <div className="relative w-72 h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-md">
              <img
                src="/me.jpeg"
                alt="Hanun!"
                className="w-full h-full object-cover object-cover- transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About + Skills */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-8 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-serif text-3xl font-bold">About Me</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-gray-500 leading-relaxed mb-8">
              I'm a computer science student at Universitas Indonesia. I'm interested in the fields of software development, web development, data, and machine learning.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Flutterflow", "Flet","Firebase", "Docker","Tailwind CSS", " TypeScript", "Git/GitHub", "JavaScript", "React", "Next.js", "Python", "Excel/Spreadsheet"].map((skill) => (
                <span key={skill} className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-sm text-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section: Experience & Education */}
      <section className="max-w-6xl mx-auto px-8 py-16 border-t border-gray-200/60">
        
        {/* 1. Baris Pengalaman Kerja */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom Kiri: Judul */}
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Experience</h2>
          
          {/* Kolom Kanan: Detail Pengalaman */}
          <div className="md:col-span-2">
            <h3 className="font-sans text-lg font-bold text-gray-900">Redcomm Indonesia</h3>
            <p className="text-gray-600 text-sm mt-1">Data Analyst Intern</p>
            
            {/* Tag/Pill untuk mempercantik (Mirip gaya di About) */}
            <div className="flex gap-2 mt-3">
              <span className="bg-green-800/10 text-green-800 px-3 py-1 rounded-full text-xs font-medium">2026 - Present</span>
              <span className="bg-white border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-600">Internship</span>
            </div>
          </div>
        </div>

        {/* Jarak antar baris */}
        <div className="my-12 border-t border-gray-200/40"></div>

        {/* 2. Baris Pendidikan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Kolom Kiri: Judul */}
          <h2 className="font-serif text-2xl font-semibold text-gray-900">Education</h2>
          
          {/* Kolom Kanan: Detail Pendidikan */}
          <div className="md:col-span-2">
            <h3 className="font-sans text-lg font-bold text-gray-900">Universitas Indonesia</h3>
            <p className="text-gray-600 text-sm mt-1">S1 Ilmu Komputer</p>
            
            {/* Tag/Pill Penanda Tahun & Status Maba */}
            <div className="flex gap-2 mt-3">
              <span className="bg-green-800/10 text-green-800 px-3 py-1 rounded-full text-xs font-medium">2026 - Present</span>
              <span className="bg-white border border-gray-300 px-3 py-1 rounded-full text-xs text-gray-600">Undergraduate Student</span>

            </div>
          </div>
        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-8 border-t border-gray-200">
        <h2 className="font-serif text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "DIMPLE: Discouraging Impulsive Buying", 
              desc: "A mobile application that helps users manage their finances and avoid impulsive buying habits. It provides features such as budgeting, expense tracking, and personalized recommendations to promote responsible spending.", 
              tech: "FlutterFlow · Flet (Python) · Firebase",
              image: "/preview.png", // <-- Sesuaikan dengan nama screenshot kamu di folder public
              status: "On Maintenance"
            },
          ].map((project) => (
            <div key={project.title} className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition group flex flex-col justify-between">
              <div>
                {/* Bagian Gambar / Screenshot */}
                <div className="h-48 bg-green-800/10 flex items-center justify-center relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Jika file gambar belum siap, dia otomatis menyembunyikan tag img kosong
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                
                  
                  {/* Badge Status Maintenance */}
                  {project.status && (
                    <div className="absolute top-3 right-3 bg-yellow-100/90 backdrop-blur-sm text-yellow-700 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border border-yellow-200 z-10">
                      {project.status}
                    </div>
                  )}
                </div>

                {/* Bagian Detail Teks */}
                <div className="p-6">
                  <h3 className="font-serif font-semibold text-lg mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.desc}</p>
                </div>
              </div>

              {/* Bagian Tech Stack (Ditaruh paling bawah biar sejajar rapi) */}
              <div className="px-6 pb-6">
                <span className="inline-block text-xs font-medium bg-green-800/10 text-green-800 px-3 py-1 rounded-md">
                  {project.tech}
                </span>
              </div>
            </div>
          ))}

          {/* Kartu Kosong (Placeholder untuk project kamu berikutnya) */}
          <div className="bg-white rounded-2xl border border-dashed border-gray-200 flex items-center justify-center h-[380px]">
            <span className="text-gray-400 text-sm">More projects coming soon...</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 max-w-6xl mx-auto px-8 border-t border-gray-200">
        <div className="bg-green-800 rounded-3xl p-16 text-center text-white">
          <h2 className="font-serif text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-green-200 mb-8">Want to talk, collaborate, or just say hi?</p>
          <a href="mailto:hanunnisa.diar@gmail.com" className="bg-white text-green-800 px-8 py-3 rounded-full text-sm font-medium hover:bg-green-50 transition">
            email me!
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-400">
        © 2026 Hanunnisa Diar · All rights reserved.
      </footer>

    </main>
  );
}