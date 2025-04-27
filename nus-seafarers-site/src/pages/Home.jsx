import HeroImage from "../components/HeroImage";
import LatestBlogPosts from "../components/LatestBlogPosts";

const Home = () => {
  return (
    <div className="m-4">
			<HeroImage />
			<div className="flex">
				<div>
					<h1 className="text-3xl font-bold mb-4">Welcome to NUS Seafarers</h1>
					<p>
						This is your home page. You can feature your mission, events, or
						adventures here.
					</p>
				</div>
				<div className="w-32">
					<LatestBlogPosts />
				</div>
			</div>
    </div>
  );
};

export default Home;
