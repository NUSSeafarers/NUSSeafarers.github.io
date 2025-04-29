import ReactMarkdown from "react-markdown";
import Quote from "../text/Quote";
import Paragraph from "../text/Paragraph";
import ImageWithCaption from "./ImageWithCaption";
import PublishedText from "./PublishedText";

const BlogTemplate = ({ title, date, content, author }) => (
  <article className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold my-16">{title}</h1>
    <PublishedText date={date} author={author} />
    <div className="prose prose-lg max-w-none">

      <ReactMarkdown
        components={{
          blockquote: ({ node, children }) => {
            const fullText = getPlainText(children);
            const [quoteText, authorText] = splitQuoteAndAuthor(fullText);
            return <Quote quoteText={quoteText} author={authorText} />;
          },
          p: ({ node, children }) => {
            return <Paragraph>{children}</Paragraph>;
          },
          img: ({ node, ...props }) => (
            <ImageWithCaption
              src={props.src}
              alt={props.alt}
              caption={props.alt} // use alt text as caption
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  </article>
);

function getPlainText(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getPlainText).join("");
  if (children?.props?.children) return getPlainText(children.props.children);
  return "";
}

function splitQuoteAndAuthor(text) {
  const parts = text.split("—").map((s) => s.trim());
  return [parts[0] || "", parts[1] || "Unknown"];
}

export default BlogTemplate;
