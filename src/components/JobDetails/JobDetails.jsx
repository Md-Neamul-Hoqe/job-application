import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import {
  MdCall,
  MdOutlineEventNote,
  MdOutlineLocationOn,
  MdOutlineMail,
} from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();

  const { id } = useParams();

  const job = jobs.find((job) => job.id == id);

  // console.log(job);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    job_title,
    salary,
    contact_information,
  } = job;

  const handleAppliedSuccessFull = () => {
    const isStored = saveJobApplication(id);
    isStored
      ? toast("You have applied successfully.")
      : toast("You have already applied, so try another one.");
  };

  return (
    <div>
      <div>
        <Banner bannerTitle="Job Details"></Banner>
      </div>
      <div className="grid grid-flow-col md:gird-cols-4 gap-4 max-w-7xl mx-auto my-36">
        <aside className="md:col-span-3 text-start space-y-5">
          <p className=" first-line:leading-[3rem]">
            <b>Job Description: </b>
            {job_description}
          </p>
          <p className=" first-line:leading-[3rem]">
            <b>Job Responsibility: </b>
            {job_responsibility}
          </p>
          <p className=" first-line:leading-[3rem]">
            <b>Educational Requirements: </b>
            {educational_requirements}
          </p>
          <p className=" first-line:leading-[3rem]">
            <b>Experiences: </b>
            {experiences}
          </p>
        </aside>

        <aside className="text-xl text-start">
          <div className="bg-violet-600/5 rounded-lg p-5 mb-5 border">
            <h3 className="font-extrabold text-xl ">Job Details</h3>
            <hr className="my-5" />
            <h4 className="flex gap-2 py-1.5 items-center">
              <HiOutlineCurrencyDollar className="text-2xl"></HiOutlineCurrencyDollar>
              <b className="font-semibold">Salary: </b>
              {salary} (Per Month)
            </h4>
            <h4 className="flex gap-2 py-1.5 items-center">
              <MdOutlineEventNote className="text-2xl"></MdOutlineEventNote>
              <b className="font-semibold">Job Title: </b>
              {job_title}
            </h4>
            <h3 className="font-extrabold mt-10">Contact Information</h3>
            <hr className="my-5" />
            <h4 className="flex gap-2 py-1.5 items-center">
              <MdCall className="text-2xl"></MdCall>
              <b className="font-semibold">Phone: </b>
              {contact_information["phone"]}
            </h4>
            <h4 className="flex gap-2 py-1.5 items-center">
              <MdOutlineMail className="text-2xl"></MdOutlineMail>
              <b className="font-semibold">Email: </b>
              {contact_information["email"]}
            </h4>

            <h4 className="flex gap-2 py-1.5 items-center">
              <MdOutlineLocationOn className="text-5xl"></MdOutlineLocationOn>
              <b className="font-semibold">Address: </b>
              {contact_information["address"]}
            </h4>
          </div>

          <button
            onClick={handleAppliedSuccessFull}
            className="btn hover:opacity-80 capitalize font-extrabold text-white bg-gradient-to-r from-blue-400 to-violet-600 w-full">
            Apply Now
          </button>
          <ToastContainer />
        </aside>
      </div>
    </div>
  );
};
export default JobDetails;
