import BlogList from "../components/blog/BlogList";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p>Documenting our Voyages.</p>
        <BlogList />
      </div>
    </div>
  );
};

export default Blog;
