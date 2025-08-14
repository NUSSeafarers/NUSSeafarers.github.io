import React from "react";

interface BlogCardProps {
  slug: string;
  thumbnail: string;
  title: string;
  summary: string; // Used as subtitle (e.g. category or short description)
}

const BlogCard = ({ slug, thumbnail, title, summary }: BlogCardProps) => {
  return (
    <a
      href={`/blog/${slug}`}
      className="block w-full group"
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* Text content */}
      <div className="mt-4 space-y-1">
        <h3 className="text-xl font-semibold text-neutral-900 group-hover:opacity-90 transition-opacity">
          {title}
        </h3>
        <p className="text-sm text-neutral-500">{summary}</p>
      </div>
    </a>
  );
};

export default BlogCard;
