import Paragraph from "./text/Paragraph";
import YouTubePreview from "./misc/YouTubePreview";
import { Link } from "react-router-dom";

const MainContent = () => {
  return (
    <div className="space-y-8 p-6 md:p-12">
      <article className="prose max-w-none">
        <Paragraph dropCap={true}>
          The NUS Seafarers are an initiative of the{" "}
          <a
            href="https://nus.edu.sg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 hover:underline transition-colors duration-300"
          >
            National University of Singapore
          </a>{" "}
          and have so far organised{" "}
          <Link
            to="/blog"
            className="text-blue-700 hover:text-blue-900 hover:underline transition-colors duration-300"
          >
            19 seafaring voyages
          </Link>{" "}
          since January 2017, spending altogether{" "}
          <strong>204 days at sea</strong>, with{" "}
          <strong>193 students and 30 alumni </strong>
          on board.
        </Paragraph>
        <Paragraph>
          The participating students and alumni have unique experiences,
          immersing themselves in the culture, nature, economy and maritime
          infrastructure of
          <strong> Indonesia, Thailand and the Philippines</strong>, and
          becoming veritable seafarers along the way. The participating alumni
          enrich the voyages with their experience and advice to current
          students.
        </Paragraph>
      </article>

			<YouTubePreview videoId="xjpVuoEg3Wk" />
    </div>
  );
};

export default MainContent;
