import { FunctionComponent } from "preact";
const HeroSectionTwo: FunctionComponent = () => {
  return (
    <div className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:text-center items-center">
          <div className="text-left animate-moveright">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
              FebaOnline
            </h1>
            <h2 className="text-xl text-indigo-400 font-semibold mb-2">
              Spreading love and gospel through the power of gospel
            </h2>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="bg-blue-800 py-4 px-6 lg:py-8 lg:px-10 animate-moveup">
              <img
                src="/image.jpg" // Replace with your image source
                alt="Podcast Image"
                className="h-48 mx-auto lg:h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
