import React from "react"
import App from "../components/app"
import Layout from "../components/layout"
import Content from "../components/content"
import { Link } from "gatsby"
import Thumbnail from "../components/thumbnail"

const linkStyle = {
  textDecoration: `none`,
}

const oPageMetadata = {
  title: "Natesan Sivagnanam",
  headerText: "Natesan Sivagnanam",
  subtitles: ["Frontend Engineer", "Design Enthusiast", "Travel & Photography"],
  introText: `Computer Science graduate from Coonoor. Living in Bangalore, Product 
  User Interface development is what I do for large scale enterprise applications. 
  I think of design of things and love to travel, photograph, trek & read. 
  I play a whole lot of games and follow a bunch of sports.`,
  homePageLinks: [
    {
      type: "LINKEDIN",
      url: "https://www.linkedin.com/in/natesans",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "GITHUB",
      url: "https://github.com/Natesan",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "TWITTER",
      url: "https://www.twitter.com/NatesanSiv",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "INSTAGRAM",
      url: "https://www.instagram.com/natesan.sivagnanam",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "FACEBOOK",
      url: "https://www.facebook.com/Natesan.Sivagnanam",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "PATENT",
      url: "https://patents.google.com/patent/US10902323B2",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
  ],

  styleClass: "index",
}

const copyPortfolioLinkToClipboard = () => {
  var dummy = document.createElement("input"),
    text = window.location.href

  document.body.appendChild(dummy)
  dummy.value = text
  dummy.select()
  document.execCommand("copy")
  document.body.removeChild(dummy)
}
export default () => (
  <App>
    <Layout pageTitle={oPageMetadata.title}>
      <Content>
        <div className="max-w-4xl flex items-center justify-center h-auto flex-wrap mx-auto my-10 md:my-12 lg:py-2">
          <div
            id="profile"
            className="bg-background-primary text-color-primary bg-animation w-full md:w-3/5 lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-lg shadow-2xl opacity-75 mx-6 lg:mx-0"
          >
            <div className="p-4 md:p-12 text-center lg:text-left">
              <h1 className="text-3xl font-bold pt-6 lg:pt-0">
                Natesan Sivagnanam
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-gray-500 opacity-25"></div>
              <p className="pt-4 text-base font-bold flex items-center sm:justify-center md:justify-center lg:justify-start">
                <svg
                  className="h-4 text-white-400 pr-4 w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Job Role</title>
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                Frontend Engineer
              </p>
              <p className="pt-2 text-color-secondary text-xs lg:text-sm flex items-center sm:justify-center md:justify-center lg:justify-start">
                <svg
                  className="h-4 text-white-400 pr-4 w-10"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title>Location</title>
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Bangalore
              </p>
              <p className="pt-8 text-sm">
                Builds user interfaces for large scale enterprise applications.
              </p>
              <div className="py-4 flex flex-wrap justify-evenly justify-items-center content-around h-40 md:h-16 lg:h-16 md:pt-12 md:pb-8 lg:pt-12 lg:pb-8">
                <Link style={linkStyle} to="/contact">
                  <button
                    tabIndex="-1"
                    className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-full contactButton"
                  >
                    <span>Get In Touch</span>
                  </button>
                </Link>
                <div className="flex flex-no-wrap">
                  <button
                    id="shareButton"
                    className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-full shareButton"
                    onClick={copyPortfolioLinkToClipboard}
                  >
                    <span>Share Portfolio</span>
                    <svg
                      id="copyConfirmed"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 opacity-1"
                    >
                      <title>Copied to Clipboard</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="social-links mt-6 pb-8 md:pb-12 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  href="https://www.linkedin.com/in/natesans"
                  data-tippy-content="@linkedin_handle"
                >
                  <svg
                    className="h-6 lg:h-8 text-white-600 hover:text-gray-500"
                    role="img"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  href="https://patents.google.com/?inventor=Natesan+Sivagnanam"
                  data-tippy-content="@patent_handle"
                >
                  <svg
                    className="h-6 lg:h-8 text-white-600 hover:text-gray-500"
                    role="img"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Patents</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  href="https://github.com/Natesan"
                  data-tippy-content="@github_handle"
                >
                  <svg
                    className="h-6 lg:h-8 text-white-600 hover:text-gray-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>GitHub</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  href="https://www.twitter.com/NatesanSiv"
                  data-tippy-content="@twitter_handle"
                >
                  <svg
                    className="h-6 lg:h-8 text-white-600 hover:text-gray-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Twitter</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </a>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  href="https://www.instagram.com/natesan.sivagnanam"
                  data-tippy-content="@instagram_handle"
                >
                  <svg
                    className="h-6 lg:h-8 text-white-600 hover:text-gray-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Instagram</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                  href="https://www.facebook.com/Natesan.Sivagnanam"
                  data-tippy-content="@facebook_handle"
                >
                  <svg
                    className="h-6 lg:h-8 text-white-600 hover:text-gray-500"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <title>Facebook</title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full my-4 lg:w-2/5 text-center lg:text-left">
            <Thumbnail></Thumbnail>
          </div>
        </div>
      </Content>
    </Layout>
  </App>
)
