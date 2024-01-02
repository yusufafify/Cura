import React from "react";

function ProfileCard() {
  return (
    <div className="flex flex-col max-w-xl items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl h-fit mt-12  ">
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900">
          Good Evening,<span className="text-blue-500"> Dr. Youssef</span>
        </h5>
        <p className="text-gray-500">first name, second name</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          As you wind down this evening, consider reviewing your profile to
          identify tasks and priorities. Take a moment to check what needs your
          attention and make note of any todos that require action.
        </p>{" "}
      </div>
    </div>
  );
}

export default ProfileCard;
