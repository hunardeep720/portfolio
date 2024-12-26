import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* <div className="w-full md:w-1/3">
            <Image
              src="/images/profile/IMG_2240.jpeg"
              alt="John Doe"
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </div> */}
          <div className="w-full md:w-2/3 mx-auto">
            <p className="text-lg mb-4">
              Hi, I'm Hunardeep Singh, a recent graduate with a diploma in
              Software Development. I am passionate about creating intuitive and
              responsive web applications and have already built several web
              projects during my studies.
            </p>
            <p className="text-lg mb-4">
              My journey in software development began during my time at SAIT,
              where I honed my skills in front-end and back-end technologies. I
              am excited to continue learning and growing as I embark on my
              career in this dynamic field.
            </p>
            <p className="text-lg">
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
