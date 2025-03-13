import React from "react";
import contactInfo from "@/components/Content/ContactInfo.json";
import { GrUserWorker } from "react-icons/gr";
import { FaRegThumbsUp } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Affordable = () => {
  return (
    <div className="bg-gray-100 px-6 py-12 ">
      <div className="mx-auto flex h-full max-w-7xl flex-col items-center justify-center gap-10 text-center lg:flex-row">
        <div className="lg:w-[40%]">
          <h2 className="text-3xl font-bold text-gray-800">
            Trusted Plumbing Services for Your Home and Business
          </h2>
          <p className="mt-4 text-gray-600">
            Need reliable plumbing solutions? Santa Maria Plumbing offers fast,
            professional, and affordable plumbing services. Whether it’s a leak
            repair, drain cleaning, or a full plumbing installation, we’ve got
            you covered. Call now for expert service you can trust!
          </p>
          <a id="cta-id" href={`tel:${contactInfo.tel}`}>
            <button
              id="cta-id"
              className="mt-8 rounded-lg bg-minor px-6 py-3 text-white transition duration-700 ease-in hover:bg-main"
            >
              Call Now
            </button>
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-6 lg:flex-row ">
          {/* Affordable Pricing */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md ">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20 ">
              <GiReceiveMoney className=" text-xl" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Affordable Plumbing Solutions
            </h3>
            <p className="mt-2 text-gray-600">
              We offer cost-effective plumbing services tailored to your budget,
              ensuring high-quality workmanship at competitive prices.
            </p>
          </div>
          {/* Various Services */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg border border-main bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <GrUserWorker className="text-xl text-main" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Comprehensive Plumbing Services
            </h3>
            <p className="mt-2 text-gray-600">
              From minor repairs to major installations, we provide a full
              range of plumbing services to meet all your needs.
            </p>
          </div>
          {/* Timely Service */}
          <div className="flex w-full max-w-sm flex-col items-center rounded-lg bg-white p-6 shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
              <FaRegThumbsUp className=" text-xl" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              Prompt & Reliable Service
            </h3>
            <p className="mt-2 text-gray-600">
              Our team ensures quick response times and efficient service,
              keeping your plumbing system running smoothly without delays.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Affordable;
