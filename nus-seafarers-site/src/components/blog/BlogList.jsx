import posts from "./posts";
import BlogCard from "./BlogCard";

const BlogList = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-8 justify-center">
        {posts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            thumbnail={post.thumbnail}
            title={post.title}
            summary={post.summary}
            meta={post.meta}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
