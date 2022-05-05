import React, { useState } from 'react';
import { Fragment } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed z-30 flex items-center cursor-pointer right-10 top-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(false)}
          className="text-xl text-white fixed z-30 top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      <div
        className={`fixed top-0 right-0 h-full p-10 bg-sky-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        Sidebar
      </div>
    </Fragment>
  );
};

export default Sidebar;
