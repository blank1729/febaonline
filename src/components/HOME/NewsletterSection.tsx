import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";

const NewsletterSection: FunctionalComponent = () => {
  const [email, setEmail] = useState("");
  // remove this later
  setEmail("");
  const handleSubmit = () => {};

  const handleEmailChange = () => {};

  return (
    <section className="py-10 flex justify-center">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Subscribe to Our Newsletter
        </h2>
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
