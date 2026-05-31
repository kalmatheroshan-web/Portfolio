import {
  Download,
  ExternalLink,
  Link as Github,
 Link as Linkedin,
  Mail,
  Phone,
  MessageCircle
} from "lucide-react";

export default function RoshanPortfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden relative">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]" />

      {/* Radial Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] bg-orange-500/10 blur-[80px] md:blur-[140px] rounded-full pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-12 md:py-20 border-b border-white/10">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">

          {/* Left Hero Column */}
          <div className="max-w-4xl flex-1">
            <p className="text-orange-500 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4 md:mb-6">
              // Full Stack Developer
            </p>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black italic uppercase leading-[0.85] tracking-tighter breakdown-words">
              Roshan
              <br />
              <span className="text-white/20">Kalmathe</span>
            </h1>

            <p className="mt-6 md:mt-10 text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
              Building scalable MERN applications, immersive interfaces,
              secure backend systems, and production-grade web experiences.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8 md:mt-10">
              <a
                href="/Roshan_Kalmathe.pdf"
                download
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                <Download
                  size={16}
                  className="group-hover:translate-y-[2px] transition-transform"
                />
                Download Resume
              </a>

              <a
                href="https://fikrishop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 border border-white/10 text-xs font-black uppercase tracking-[0.2em] hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                <ExternalLink size={16} />
                Live Projects
              </a>
            </div>
          </div>

          {/* Right Status Card */}
          <div className="w-full lg:max-w-sm h-fit border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-xl">
            <div className="mb-6 md:mb-8">
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em] mb-2.5">
                Current Status
              </p>
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <p className="font-bold uppercase text-xs md:text-sm tracking-wider">
                  Available For Work
                </p>
              </div>
            </div>

            <div className="space-y-5 text-xs md:text-sm">
              <div>
                <p className="text-gray-500 uppercase text-[9px] md:text-[10px] tracking-[0.3em] mb-1.5">
                  Stack
                </p>
                <p className="font-medium text-gray-300 leading-relaxed">
                  MERN • Next.js • Tailwind • JWT • Redux
                </p>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-[9px] md:text-[10px] tracking-[0.3em] mb-1.5">
                  Focus
                </p>
                <p className="font-medium text-gray-300 leading-relaxed">
                   Backend work, security , Authentication & Data access
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-16 md:py-24 border-b border-white/10">
        <div className="mb-10 md:mb-14">
          <p className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold mb-3">
            Tech Stack
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            Technologies
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {[
            "React", "Next.js", "Node.js", "MongoDB", "Express",
            "Redux", "Tailwind", "JWT", "Vercel", "Render"
          ].map((tech) => (
            <div
              key={tech}
              className="px-4 py-4 md:px-6 text-center border border-white/10 bg-white/[0.02] uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold hover:bg-orange-500 hover:text-black hover:border-orange-500 transition-all duration-300 cursor-pointer select-none"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT SECTION WITH RESPONSIVE IFRAME */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-16 md:py-24 border-b border-white/10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-10 mb-10 md:mb-16">
          <div>
            <p className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold mb-3">
              Featured Deployment
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase italic leading-none">
              Fikri Shop
            </h2>
          </div>
          <div className="max-w-lg">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Full-featured MERN e-commerce platform with authentication,
              Razorpay integration, responsive UI systems, Redux state
              management, and scalable backend architecture.
            </p>
          </div>
        </div>

        {/* Responsive Mock-Browser Live Preview */}
        <div className="relative border border-white/10 rounded-xl md:rounded-2xl overflow-hidden bg-white/[0.02] shadow-2xl">
          
          {/* Header Bar */}
          <div className="flex justify-between items-center px-4 md:px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
            <div className="min-w-0 pr-4">
              <p className="text-[9px] uppercase tracking-[0.3em] text-orange-500 font-bold mb-0.5">
                LIVE PREVIEW
              </p>
              <h3 className="text-xs md:text-sm font-black uppercase tracking-tight truncate text-gray-300">
                fikrishop.vercel.app
              </h3>
            </div>

            <a
              href="https://fikrishop.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white hover:text-orange-500 transition-colors"
            >
              <span>Open Site</span>
              <ExternalLink size={12} className="md:w-3.5 md:h-3.5" />
            </a>
          </div>

          {/* Clean Aspect Container or Fallback Sizing for Mobile viewports */}
          <div className="w-full relative bg-zinc-950 aspect-[4/3] md:aspect-video lg:h-[680px]">
            <iframe
              src="https://fikrishop.vercel.app/"
              title="Fikri Shop Live Project"
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0 bg-zinc-900"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-10 px-4 sm:px-8 md:px-16 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div>
            <p className="text-orange-500 uppercase tracking-[0.4em] text-xs font-bold mb-3">
              Contact
            </p>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.95]">
              Let’s Build
              <br />
              Something
              <br />
              Powerful.
            </h2>
          </div>

          <div className="space-y-4 md:space-y-5">
            {[
              {
                icon: <Mail size={18} />,
                label: "Email",
                href: "mailto:kalmatheroshan@gmail.com",
              },
              {
                icon: <Github size={18} />,
                label: "GitHub",
                href: "https://github.com/kalmatheroshan-web",
              },
              {
                icon: <Linkedin size={18} />,
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/roshan-kalmathe-7067593b8",
              },
              {
                icon: <Phone size={18} />,
                label: "Call Me",
                href: "tel:+919512898393",
              },
              {
                icon: <MessageCircle size={18} />,
                label: "WhatsApp",
                href: "https://wa.me/919512898393?text=Hi%20Roshan",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-white/10 px-5 py-4 md:px-6 md:py-5 hover:border-orange-500 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-gray-500 group-hover:text-orange-500 transition-colors">
                    {item.icon}
                  </div>
                  <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
                    {item.label}
                  </span>
                </div>
                <ExternalLink
                  size={14}
                  className="text-gray-600 group-hover:text-orange-500 transition-colors"
                />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-4 sm:px-8 md:px-16 py-8 md:py-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[10px] md:text-xs uppercase tracking-[0.25em] text-gray-600 text-center md:text-left">
        <p>© 2026 Roshan Kalmathe</p>
        <p>Designed & Developed By Roshan</p>
      </footer>

    </div>
  );
}
