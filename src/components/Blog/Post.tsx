import { FunctionalComponent } from "preact";

interface BlogPostProps {
  image: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

const BlogPost: FunctionalComponent<BlogPostProps> = ({
  image,
  title,
  date,
  author,
  tags,
  content,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <article className="bg-white p-6">
        <img
          src={image}
          alt="Blog Post"
          className="rounded-lg mb-4 object-cover w-full max-h-[40vh] object-top"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <div className="flex items-center text-gray-600 text-sm mb-4">
          <span className="mr-2">{date}</span>
          <span>By {author}</span>
        </div>
        <div className="flex flex-wrap mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="text-gray-700 leading-relaxed text-xl">{content}</div>
      </article>
    </div>
  );
};

export default BlogPost;
