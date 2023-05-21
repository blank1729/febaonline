import { FunctionalComponent } from "preact";

const Footer: FunctionalComponent = () => {
  return (
    <footer className="bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              suscipit, tortor vitae egestas consectetur, ipsum neque luctus
              augue, id pellentesque nisi tortor sed ipsum.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="text-gray-300">
              <li className="mb-2">
                <a href="#" className="hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-indigo-400">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-indigo-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <p className="text-gray-300">
              7, Commissariat Rd, Ashok Nagar
              <br />
              Bengaluru, Karnataka 560025
              <br />
              Phone: +91 6364 2521 64
              <br />
              Landline: 080 2558 4101 / 2558 5019
              <br />
              Email: info@febaonline.org
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-indigo-400">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.586 12h14.828c.49 0 .882.448.783.935l-1.272 6.364c-.098.487-.727.84-1.34.701L12 19l-5.484 1.999c-.613.139-1.242-.214-1.34-.701L.803 12.935c-.098-.487.293-.935.783-.935h14.828-14.828zM5 7h.01"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 9v6m0 0l-3-3m3 3l-3 3m3-3H4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 text-center">
          &copy; {new Date().getFullYear()} Feba Online. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
