import PropTypes from "prop-types";
import bannerLeftBottom from "../../assets/images/bg1.png";
const Banner = ({ bannerTitle }) => {
  return (
    <div className="mb-10 relative bg-gradient-to-r from-[#7E90FE]/5 to-[#9873FF]/5">
      <img className="h-56 w-80" src={bannerLeftBottom} alt="" />
      <h2 className="absolute top-1/3 left-1/2 text-2xl font-extrabold">
        {bannerTitle}
      </h2>
    </div>
  );
};

Banner.propTypes = {
  bannerTitle: PropTypes.string,
};
export default Banner;
