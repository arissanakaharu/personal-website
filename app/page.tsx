export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] font-sans text-gray-900">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#F5F5F0]/90 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
          <span className="font-serif text-xl font-semibold">Hanunnisa Nurzahra Putri Diar</span>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#about" className="hover:text-green-800 transition">About</a>
            <a href="#projects" className="hover:text-green-800 transition">Projects</a>
            <a href="#contact" className="hover:text-green-800 transition">Contact</a>
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
            <div className="flex gap-4">
              <a href="#projects" className="bg-green-800 text-white px-6 py-3 rounded-full text-sm hover:bg-green-900 transition">
                Lihat Projects
              </a>
              <a href="#contact" className="border border-gray-300 px-6 py-3 rounded-full text-sm hover:border-green-800 hover:text-green-800 transition">
                Hubungi Saya
              </a>
            </div>
          </div>

          {/* Kanan: Foto */}
          <div className="relative flex justify-center">
            {/* Kotak hijau di belakang (seperti di Figma) */}
            <div className="absolute top-4 right-4 w-72 h-80 bg-green-800 rounded-2xl"></div>
            {/* Kotak foto di depan */}
            <div className="relative w-72 h-80 bg-gray-200 rounded-2xl overflow-hidden flex items-center justify-center">
              <span className="text-gray-400 text-sm">📷 Foto kamu di sini</span>
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
              I'm a computer science student at Universitas Indonesia. I'm interested in the fields of data, machine learning, and software development.
            </p>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "React", "Next.js", "Python", "Figma"].map((skill) => (
                <span key={skill} className="bg-white border border-gray-200 px-4 py-1.5 rounded-full text-sm text-gray-600">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-8 border-t border-gray-200">
        <h2 className="font-serif text-3xl font-bold mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Project 1", desc: "Deskripsi singkat project ini.", tech: "Next.js · Tailwind" },
            { title: "Project 2", desc: "Deskripsi singkat project ini.", tech: "Python · Flask" },
            { title: "Project 3", desc: "Deskripsi singkat project ini.", tech: "React · Firebase" },
          ].map((project) => (
            <div key={project.title} className="bg-white rounded-2xl overflow-hidden hover:shadow-md transition">
              <div className="h-48 bg-green-800/10 flex items-center justify-center">
                <span className="text-gray-300 text-sm">🖼 Screenshot project</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.desc}</p>
                <span className="text-xs text-green-700">{project.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 max-w-6xl mx-auto px-8 border-t border-gray-200">
        <div className="bg-green-800 rounded-3xl p-16 text-center text-white">
          <h2 className="font-serif text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-green-200 mb-8">Want to talk, collaborate, or just say hi?</p>
          <a href="hanunnisa.diar@gmail.com" className="bg-white text-green-800 px-8 py-3 rounded-full text-sm font-medium hover:bg-green-50 transition">
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