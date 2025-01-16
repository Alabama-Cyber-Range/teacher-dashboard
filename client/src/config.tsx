import React from "react";

export const baseConfig = {
  projectLink: "/", // GitHub link in the navbar
  docsRepositoryBase: "", // base URL for the docs repository
  titleSuffix: "",
  search: true,
  header: true,
  headerText: "Logo",
  footer: true,
  footerText: (
    <>
      <span>
        © MIT {new Date().getFullYear()}, Made with ❤️ by {""}
        <a href="https://github.com/mrtzdev" target="_blank" rel="noreferrer">
          Mrtzdev
        </a>
      </span>
    </>
  ),

  logo: (
    <>
      <img
        src={process.env.PUBLIC_URL + "/logo.png"}
        alt="logo"
        width="30"
        height="22"
      />
    </>
  ),
};

/// Navigation sidebar
export const appNavs = [
  {
    eventKey: "dashboard",
    title: "Dashboard",
    to: "/",
  },

  {
    eventKey: "modules",
    title: "Modules",
    to: "/modules",
  },
  {
    eventKey: "learning_paths",
    title: "Learning Paths",
    to: "/learning-paths",
  },
  {
    eventKey: "schools",
    title: "Schools",
    to: "/schools",
  },
  {
    eventKey: "users",
    title: "Users",
    to: "/users",
  },
];
