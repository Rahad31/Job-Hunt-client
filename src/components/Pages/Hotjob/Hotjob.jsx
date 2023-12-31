import React from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router-dom";
import Jobcart from "../Jobcart/Jobcart";
import { useState, useEffect } from "react";
const Employer = () => {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    fetch("https://job-server-beryl.vercel.app/job")
      .then((res) => res.json())
      .then((data) => setjobs(data));
  }, []);
  return (
    <div className="container mx-auto text-center my-20">
      <h1 className="text-4xl font-bold  mb-4 text-[#EAA334]">HOT JOB</h1>
      <hr className="mb-6"></hr>

      <Marquee>
        <div className="flex  pr-2 gap-4">
          {jobs.map((job) => (
            <Jobcart job={job}></Jobcart>
          ))}
        </div>
      </Marquee>

      <hr className="mt-6"></hr>
    </div>
  );
};

export default Employer;
