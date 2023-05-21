import { FunctionComponent } from "preact";
const HeroSection: FunctionComponent = () => {
  return (
    <div className="py-20 min-h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:text-center items-center">
          <div className="text-left animate-moveright">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl mb-6">
              FebaOnline
            </h1>
            <h2 className="text-2xl font-semibold mb-2">
              Spreading love and gospel through the power of{" "}
              <b className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Radio
              </b>
            </h2>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="bg-blue-800 p-1 translate-x-4 -translate-y-4 animate-moveup">
              <img
                src="/image.jpg"
                alt="Podcast Image"
                className="h-48 -translate-x-4 translate-y-4 mx-auto lg:h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
