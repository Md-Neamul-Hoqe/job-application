import { Link } from "react-router-dom";
import userImage from "../../assets/images/user.png";

const Banner = () => {
  return (
    <div className="min-h-[300px] bg-gradient-to-r from-[#7E90FE]/5 to-[#9873FF]/5">
      <div className="flex flex-col-reverse md:flex-row px-5 xl:px-0 items-center max-w-7xl mx-auto">
        <div className="text-start space-y-4 my-14">
          <h2 className="text-5xl font-extrabold leading-tight">
            One Step <br /> Closer To Your <br />{" "}
            <span className="dreamJob">Dream Job</span>
          </h2>
          <p className="text-gray-500">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <div>
            <Link className="btn hover:opacity-80 font-extrabold capitalize text-white text-xl bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
              Get Started
            </Link>
          </div>
        </div>
        <div>
          <img src={userImage} alt={userImage} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
