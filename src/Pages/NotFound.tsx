import { FunctionalComponent } from "preact";
import { Link } from "preact-router";

const NotFound: FunctionalComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)]">
      <h1 className="text-4xl mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-4">The requested page could not be found.</p>
      <Link className="text-blue-500 hover:underline" href="/">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
