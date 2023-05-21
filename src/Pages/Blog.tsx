import { FunctionalComponent } from "preact";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Blog Post 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "May 1, 2023",
    author: "John Doe",
    tags: ["JavaScript", "Preact", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Blog Post 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "May 5, 2023",
    author: "Jane Smith",
    tags: ["React", "TypeScript", "CSS"],
  },
  {
    id: 3,
    title: "Blog Post 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "May 10, 2023",
    author: "James Johnson",
    tags: ["Web Development", "Frontend", "Design"],
  },
];

const Blog: FunctionalComponent = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <div className="grid gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded">
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p>{blog.content}</p>
            <div className="text-gray-500 mt-2">
              <span>{blog.date}</span> | <span>{blog.author}</span>
            </div>
            {/* Render tags here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
