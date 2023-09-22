import { useEffect, useState } from "react";
import Job from "../Job/Job.jsx";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("./data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="text-center max-w-7xl mx-auto my-16">
      <h2 className="text-5xl font-extrabold">Featured jobs</h2>
      <p className="py-4 max-w-5xl mx-auto text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future. Come find it. Manage all your job application
        from start to finish.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-5">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn hover:opacity-80 font-extrabold text-white mb-10 mx-auto bg-gradient-to-r from-[#7E90FE] to-[#9873FF] capitalize">
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
