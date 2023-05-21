import { FunctionalComponent } from "preact";

const AboutSection: FunctionalComponent = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">About Us</h2>
        <div className="grid gap-6">
          <div className="flex items-center justify-center mx-auto">
            <div className="">
              <h3 className="text-xl font-medium text-gray-800 mb-4">
                Presenting Christ By Radio & Allied Media
              </h3>
              <p className="text-gray-600">
                FEBA India is a non-denominational mission which exists to
                broadcast the Gospel through the medium of radio and allied
                media. FEBA – India has sought to meet the most important needs
                of mankind in the sub-continent – Peace, Love and Hope. It has
                strengthened, guided, comforted and brought joy to millions
                around the world for more than 5 decades. FEBA India has
                endeavoured to bring hope and a healing balm to the people torn
                with hatred, strife, pain and suffering. We continue to present
                Christ to the world.
              </p>
            </div>
          </div>
          <div>{/* Add your calendar component or any other content */}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
