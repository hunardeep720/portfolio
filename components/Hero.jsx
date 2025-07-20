import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 via-white/80 to-yellow-50">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-white/10 to-transparent"></div>
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="max-w-2xl mx-auto text-center text-gray-900 px-4 py-10 rounded-3xl backdrop-blur-lg bg-white/80 shadow-2xl border border-gray-200">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg text-yellow-600">
            Hunardeep Singh
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">
            <span className="font-semibold text-blue-500">Full-Stack</span>{" "}
            &nbsp;|&nbsp;
            <span className="font-semibold text-yellow-500">
              Mobile Developer
            </span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            I build scalable web & mobile apps with modern technologies.
            <br />
            From concept to deployment, I deliver user-centric solutions that
            blend{" "}
            <span className="text-blue-500 font-semibold">
              functionality
            </span>,{" "}
            <span className="text-yellow-500 font-semibold">scalability</span>,
            and <span className="text-blue-500 font-semibold">innovation</span>.
          </p>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://github.com/hunardeep720"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-yellow-100 text-blue-600 rounded-full px-4 py-2 transition-colors shadow-lg border border-gray-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/hunardeep-singh-9a5785269/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 hover:bg-yellow-100 text-blue-600 rounded-full px-4 py-2 transition-colors shadow-lg border border-gray-300"
            >
              LinkedIn
            </a>
            <a
              href="/resume"
              className="bg-yellow-400 text-gray-900 font-semibold rounded-full px-4 py-2 transition-colors shadow-lg hover:bg-yellow-500 border border-yellow-300"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 flex animate-bounce w-full justify-center">
        <a href="#about" aria-label="Scroll to About">
          <ArrowDown
            size={48}
            strokeWidth={3}
            stroke={"#facc15"}
            className="text-yellow-400 drop-shadow-lg"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
