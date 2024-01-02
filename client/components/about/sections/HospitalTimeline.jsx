import React from "react";

export default function HospitalTimeline() {
  return (
    <ol className="items-center sm:flex">
      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-20 w-[3.5rem] h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg1.svg"
              alt="flag"
            />
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
        </div>
        <div className="mt-3 sm:pe-8">
          {" "}
          <p className="font-semibold pt-2 lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">
            Founded
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Founded on a legacy of healing, Cura Hospital has been delivering
            compassionate healthcare since its establishment on 1990.
          </p>
        </div>
      </li>

      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-20 w-[3.5rem] h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <img
              className="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg2.svg"
              alt="note"
            />
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
        </div>
        <div className="mt-3 sm:pe-8">
          {" "}
          <p className="font-semibold pt-2 lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 ">
            Experience
          </p>
          <p className="font-normal text-base leading-6 text-gray-600">
            {" "}
            With decades of dedicated service, Cura Hospital boasts a wealth of
            experience in providing top-notch medical care, ensuring the
            well-being of every patient entrusted to our expert team.{" "}
          </p>
        </div>
      </li>

      <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
          <div className="z-20 w-[3.5rem] h-12 bg-gray-800 rounded-full flex justify-center items-center">
            <img
              className="z-20"
              src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-us-3-svg3.svg"
              alt="users"
            />
          </div>
          <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700" />
        </div>
        <div className="mt-3 sm:pe-8">
          {" "}
          <p className="font-semibold pt-2 lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 ">
            Over 10M
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            Cura Hospital takes pride in its rich history of serving over 10
            million individuals, a testament to our commitment to making a
            positive impact on the health and lives of our community.
          </p>
        </div>
      </li>
    </ol>
  );
}
