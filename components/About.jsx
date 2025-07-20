import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-100 via-white/80 to-yellow-50"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/IMG_1884.jpeg"
              alt="Hunardeep Singh"
              width={180}
              height={180}
              className="rounded-full shadow-xl border-4 border-yellow-200 object-cover"
            />
          </div>
          <div className="w-full md:w-2/3 mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-gray-200">
            <p className="text-lg mb-4 text-gray-800">
              Hi, I'm{" "}
              <span className="font-semibold text-yellow-600">
                Hunardeep Singh
              </span>
              , a recent graduate with a diploma in Software Development. I am
              passionate about creating intuitive and responsive web
              applications and have already built several web projects during my
              studies.
            </p>
            <p className="text-lg mb-4 text-gray-800">
              My journey in software development began during my time at SAIT,
              where I honed my skills in front-end and back-end technologies. I
              am excited to continue learning and growing as I embark on my
              career in this dynamic field.
            </p>
            <p className="text-lg text-gray-800">
              When I'm not coding, I enjoy exploring new technologies,
              brainstorming project ideas, and staying inspired by the
              ever-evolving world of software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
