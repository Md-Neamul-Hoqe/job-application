import Categories from "../Categories/Categories";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import Banner from "../homeBanner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
