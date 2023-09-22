import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import Job from "../Job/Job";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const [collapse, setCollapse] = useState(false);
  const classNames = {
    container: "flex flex-row items-center justify-between",
    image: "w-[240px] h-[240px] rounded-lg",
    middleContainer: "flex-1",
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length) {
      const jobsApplied = jobs.filter((job) =>
        storedJobIds.find((id) => id == job.id)
      );
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleDisplayData = (jobType) => {
    console.log(jobType);

    if (jobType === "all") {
      setDisplayJobs(appliedJobs);
    } else if (jobType === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  const handleDropDown = () => {
    const changeCollapse = !collapse;
    setCollapse(changeCollapse);
  };
  return (
    <div className="mt-40">
      <details className="dropdown absolute right-[200px] top-[280px]">
        <summary className="m-1 btn capitalize" onClick={handleDropDown}>
          Filter By{" "}
          {collapse ? (
            <MdOutlineKeyboardArrowUp></MdOutlineKeyboardArrowUp>
          ) : (
            <MdOutlineKeyboardArrowDown></MdOutlineKeyboardArrowDown>
          )}
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleDisplayData("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleDisplayData("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleDisplayData("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ol className="text-start flex flex-col gap-6 max-w-7xl mx-auto my-10">
        {displayJobs.map((job) => (
          <Job key={job.id} job={job} classNames={classNames}></Job>
        ))}
      </ol>
    </div>
  );
};

export default AppliedJobs;
