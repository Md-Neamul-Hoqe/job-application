import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-8xl font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
        Oops!!
      </h1>
      <p className="mt-5 font-semibold">Sorry! Not Found.</p>
      <Link
        className="btn hover:opacity-80 text-white font-extrabold my-20 bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
        to="./">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
