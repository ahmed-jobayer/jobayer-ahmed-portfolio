import profileImage from '../../../assets/profile.png'

const AboutMe = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto">
        <h2 className="text-center font-permanentMarker text-4xl">About Me</h2>
        <div className="grid grid-cols-2 my-12">
          <div className="flex justify-center items-center">
            <p className="max-w-[450px] text-center ">
              <span className="block mb-5">I am a JavaScript Developer.</span>I
              enjoy learning about technology and helping others use it to
              improve their lives and be more productive. I built this site with
              React, React Bootstrap, Redux, and the GitHub REST API.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="avatar ">
              <div className=" w-[240px] rounded-full ">
                <img src={profileImage} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
