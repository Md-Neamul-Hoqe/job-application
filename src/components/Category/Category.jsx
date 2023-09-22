import PropTypes from "prop-types";
const Category = ({ category }) => {
  const { availability, category_name, logo } = category;

  return (
    <div className="flex-1 card card-compact rounded-lg text-left bg-gradient-to-r from-[#7E90FE]/5 to-[#9873FF]/5">
      <div className="card-body">
        <figure className="mr-auto card rounded-lg bg-gradient-to-r from-[#7E90FE]/10 to-[#9873FF]/10">
          <img src={logo} alt={category_name} />
        </figure>
        <h3 className="card-title font-extrabold mt-5 text-xl whitespace-nowrap">
          {category_name}
        </h3>
        <h5 className="text-gray-500 font-medium">{availability}</h5>
      </div>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
