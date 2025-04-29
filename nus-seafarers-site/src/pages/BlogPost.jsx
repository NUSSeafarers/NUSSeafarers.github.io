import { useParams } from "react-router-dom";
import posts from "../components/blog/posts";
import BlogTemplate from "../components/blog/BlogTemplate";
import { useEffect, useState } from "react";

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      fetch(post.content)
        .then((res) => res.text())
        .then((text) => setContent(text));
    }
  }, [post]);

  if (!post) return <div>Post not found.</div>;
  if (!content) return <div className="text-center mt-10">Loading blog post...</div>;

  return (
    <BlogTemplate
      title={post.title}
      date={post.date}
      content={content}
      author={post.author}
    />
  );
};

export default BlogPost;
