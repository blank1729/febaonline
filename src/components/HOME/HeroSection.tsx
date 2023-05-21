const HeroSection = () => {
  return (
    <div className="bg-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Welcome to</span>{" "}
            <span className="block text-indigo-400 xl:inline">
              Your Podcast
            </span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            A platform to create and share your podcasts with the world.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-500 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
