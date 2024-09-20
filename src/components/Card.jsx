import React from 'react';
import GitHubProfile from './GitHubProfile'; // Assuming this fetches and displays your GitHub avatar.

export default function Card() {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <a href="/" className="block relative overflow-hidden">
        {/* GitHub avatar component */}
        <GitHubProfile />
      </a>
      <div className="p-6">
        <a href="/">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500 transition-colors duration-300">
            Muhammad Shakeel - Full Stack Developer
          </h5>
        </a>
        <p className="mt-3 text-gray-700 dark:text-gray-400">
          Passionate about building modern web applications using React,
          Node.js, and Tailwind CSS.
        </p>
        <div className="flex items-center mt-4 mb-6">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="w-5 h-5 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Available for Hire
          </span>
          <a
            href="https://github.com/Muhammad-Shakeel123"
            className="text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 ease-in-out dark:focus:ring-blue-800 dark:bg-gradient-to-r dark:from-blue-700 dark:to-blue-500 dark:hover:from-blue-600 dark:hover:to-blue-400"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}
