import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Link } from "preact-router/match";
import { Links } from "../../Constants/Links";

const Navbar: FunctionalComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <img className="h-10 w-auto" src="/logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {Links.map((link) => {
                return (
                  <Link
                    onClick={() => setIsOpen(false)}
                    href={link.path}
                    key={link.path}
                    activeClassName="text-white bg-blue-600"
                    className="hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:bg-blue-800 focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {Links.map((link) => {
              return (
                <Link
                  onClick={() => setIsOpen(false)}
                  href={link.path}
                  key={link.path}
                  activeClassName="bg-blue-800"
                  className="block text-gray-300 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
