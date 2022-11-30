import React from "react";

const Foldable = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <button className="group border-t border-r border-l border-black focus:outline-none">
          <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
            <span className="truncate">Title</span>
            <svg
              className="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-40">
            {/*ITEM */}
          </div>
        </button>
      </div>
      {/* Component End  */}
    </>
  );
};

export default Foldable;
