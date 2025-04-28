import { Link } from "react-router-dom";
import posts from "./blog/posts";

const Sidebar = () => {
  return (
    <aside className="flex flex-col space-y-8 text-[var(--text)] text-sm sticky top-20 pl-5">
      <div className="sidebar-content p-8">
        <h2 className="text-2xl font-semibold mb-8 mt-0">Recent Voyages</h2>

        <nav className="sidebar-nav">
          <ul className="list-none m-0 p-0 space-y-6">
            {posts
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 5)
              .map((post) => (
                <li key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-[var(--text)] text-lg font-medium hover:text-[var(--highlight)] transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
