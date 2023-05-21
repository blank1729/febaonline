import { FunctionalComponent } from "preact";

const Contact: FunctionalComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        If you have any questions or inquiries, please feel free to reach out to
        us using the form below.
      </p>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border border-gray-400 rounded px-4 py-2 w-full"
            type="text"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-gray-400 rounded px-4 py-2 w-full"
            type="email"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="border border-gray-400 rounded px-4 py-2 w-full"
            id="message"
            rows={4}
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
