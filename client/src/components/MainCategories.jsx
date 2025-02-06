import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
  return (
    <div className="bg-white hidden md:flex rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 ">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          className="bg-blue-800 text-white rounded-full px-5 py-2"
          to="/posts"
        >
          All Posts
        </Link>
        <Link
          className="hover:bg-blue-50 rounded-full px-5 py-2"
          to="/posts?cat=web-design"
        >
          Web Design
        </Link>
        <Link
          className="hover:bg-blue-50 rounded-full px-5 py-2"
          to="/posts?cat=development"
        >
          Development
        </Link>
        <Link
          className="hover:bg-blue-50 rounded-full px-5 py-2"
          to="/posts?cat=databases"
        >
          Databases
        </Link>
        <Link
          className="hover:bg-blue-50 rounded-full px-5 py-2"
          to="/posts?cat=seo"
        >
          Search Engines
        </Link>
        <Link
          className="hover:bg-blue-50 rounded-full px-5 py-2"
          to="/posts?cat=marketing"
        >
          Marketing
        </Link>
        <span className="text-xl font-medium">|</span>
        {/* <Search /> */}
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
};

export default MainCategories;
