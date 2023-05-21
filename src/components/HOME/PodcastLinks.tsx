const PodcastLinks = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Listen to us on
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap">
          <div className="flex items-center justify-center mb-4 lg:w-1/4">
            <a href="#" className="text-gray-700 hover:text-indigo-500">
              <img src="/itunes-podcasts.svg" alt="iTunes" className="h-8" />
            </a>
          </div>
          <div className="flex items-center justify-center mb-4 lg:w-1/4">
            <a href="#" className="text-gray-700 hover:text-indigo-500">
              <img
                src="/google-podcasts.svg"
                alt="Google Podcasts"
                className="h-8"
              />
            </a>
          </div>
          <div className="flex items-center justify-center mb-4 lg:w-1/4">
            <a href="#" className="text-gray-700 hover:text-indigo-500">
              <img src="/spotify.svg" alt="Spotify" className="h-8" />
            </a>
          </div>
          <div className="flex items-center justify-center mb-4 lg:w-1/4">
            <a href="#" className="text-gray-700 hover:text-indigo-500">
              <img src="/rss.svg" alt="RSS" className="h-8" />
            </a>
          </div>
          {/* Add more hosting sites as needed */}
        </div>
      </div>
    </section>
  );
};

export default PodcastLinks;
