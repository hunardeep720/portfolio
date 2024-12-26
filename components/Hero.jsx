import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/video/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <div className="text-center text-white [&_span]:text-shadow-sm [&_span]:shadow-black/50">
          <h1 className="text-5xl font-bold mb-4">Hunardeep Singh</h1>
          <h2 className="text-3xl mb-6 px-4 sm:px-6 md:px-8 lg:px-10">
            I'm a versatile{" "}
            <span className="font-semibold text-yellow-300">Full-Stack</span>{" "}
            and{" "}
            <span className="font-semibold text-yellow-300">
              Mobile Developer
            </span>{" "}
            with a passion for transforming ideas into seamless, responsive web
            and mobile applications.From conceptualization to deployment, I
            specialize in delivering user-centric solutions that blend{" "}
            <span className="font-semibold text-yellow-300">functionality</span>
            , <span className="font-semibold text-yellow-300">scalability</span>
            , and{" "}
            <span className="font-semibold text-yellow-300">innovation</span>.
          </h2>
          <a href="#about" className="inline-block animate-bounce">
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
