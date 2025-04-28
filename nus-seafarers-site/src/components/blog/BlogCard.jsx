import { Link } from "react-router-dom";

const BlogCard = ({ slug, thumbnail, title, summary, meta, date }) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md max-w-[350px] transition-transform duration-200 hover:-translate-y-1 cursor-pointer text-[var(--text)] no-underline"
    >
      {/* Image */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-[180px] object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="text-sm text-[var(--subtle)] leading-relaxed">{summary}</p>
        <div className="text-xs text-gray-400 flex gap-2 pt-2">
          <span>{meta}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
