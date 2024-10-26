import React from "react";

type BlogPost = {
  id: number;
  title: string;
  preview: string;
  image: string;
  date: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 Gadgets to Watch in 2024",
    preview: "Discover the top gadgets expected to hit the market in 2024 and what makes them stand out.",
    image: "/playstation-sm.png",
    date: "October 15, 2024",
  },
  {
    id: 2,
    title: "How to Choose the Best Smartphone for You",
    preview: "With so many smartphones out there, find out what factors to consider before making a purchase.",
    image: "/airpods-pro-sm.png",
    date: "September 30, 2024",
  },
  {
    id: 3,
    title: "The Future of Wearable Technology",
    preview: "Learn about the latest trends in wearable tech and how they are changing our lives.",
    image: "/vision-pro-lg.png",
    date: "September 10, 2024",
  },
];

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Blogs</h1>
        <p className="text-center text-gray-600 text-lg mb-12">
          Stay up-to-date with the latest in technology, gadget reviews, and more!
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 pt-2 object-contain" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.preview}</p>
                <a
                  href={`/blog/`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
