
const AboutMe = () => {
  return (
    <div id="about-me" className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <h2 className="text-center font-permanentMarker text-4xl">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-12 gap-4">
          <div className="flex justify-center items-center order-2 lg:order-1">
            <p className="max-w-[450px] text-center ">
             <h2 className="mb-5 text-2xl font-semibold">I am a MERN Stack Developer.</h2>
              I enjoy designing and building complete web applications, from crafting responsive frontends with React and Tailwind CSS to developing robust backends using Node.js, Express.js, and MongoDB. I continuously strive to enhance my skills by taking on challenging projects that combine functionality, scalability, and clean code..
            </p>
          </div>
          <div className="flex justify-center order-1 lg:order-2">
            <div className="avatar ">
              <div className=" w-[240px] rounded-full ">
              <img src="/images/profile.png" alt="Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
