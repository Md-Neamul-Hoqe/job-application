import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
const Job = ({ job, classNames }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;

  return (
    <div
      className={`card card-compact bg-base-100 border rounded-lg text-start items-start ${
        classNames ? classNames.container : ""
      }`}>
      <figure className={`my-5 mx-3 ${classNames ? classNames.image : ""}`}>
        <img src={logo} alt={job_title} />
      </figure>

      <div
        className={`card-body ${classNames ? classNames.middleContainer : ""}`}>
        <h2 className="card-title text-2xl xl:whitespace-nowrap">
          {job_title}
        </h2>
        <h2 className="font-semibold text-xl text-gray-500 xl:whitespace-nowrap">
          {company_name}
        </h2>
        <div className="card-actions justify-start gap-5">
          <button className="btn btn-outline text-violet-500 capitalize font-extrabold border-violet-500 hover:bg-violet-500 hover:border-violet-500">
            {remote_or_onsite}
          </button>
          <button className="btn btn-outline text-violet-500 capitalize font-extrabold border-violet-500 hover:bg-violet-500 hover:border-violet-500">
            {job_type}
          </button>
        </div>
        <div className="flex gap-4 text-gray-500 my-4">
          <h2 className="flex gap-2">
            <MdOutlineLocationOn className="text-2xl"></MdOutlineLocationOn>
            {location}
          </h2>
          <h2 className="flex gap-2">
            <HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>
            {salary}
          </h2>
        </div>
      </div>

      <div className="card-actions mx-3">
        <Link to={`/job/${id}`}>
          <button className="btn hover:opacity-80 text-white capitalize font-extrabold bg-gradient-to-r from-blue-400 to-violet-600">
            View details
          </button>
        </Link>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
  classNames: PropTypes.object,
};

export default Job;
