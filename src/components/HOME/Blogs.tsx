import { FunctionalComponent } from "preact";
import useScrollAnimationMultiple from "../../hooks/useScrollAnimationMultiple";

interface Blog {
  id: number;
  title: string;
  description: string;
}

const blogs: Blog[] = [
  {
    id: 1,
    title: "Blog 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Blog 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  // Add more blog objects as needed
];

const BlogSection: FunctionalComponent = () => {
  const [elementRefs, isVisible] = useScrollAnimationMultiple(blogs.length);
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              ref={elementRefs[index]}
              className={`bg-white shadow-lg rounded-lg opacity-0 overflow-hidden ${
                isVisible ? "animate-moveright" : ""
              }`}
            >
              <img
                src="/image.jpg"
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-medium text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600">{blog.description}</p>
                <div className="mt-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
