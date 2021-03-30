import React from "react"
import App from "../components/app"
import Header from "../components/header"
import Layout from "../components/layout"
import Content from "../components/content"
import "../styles/work.css"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Work",
  experienceHeaderText: "Experience",
  aExperience: [
    {
      title: "Senior Software Engineer (User Interface) @ SAP Labs",
      description: [
        "Experience building large cloud-based enterprise software specializing in frontend technologies",
        "Hands on working experience with frameworks designed to build cross-platform, responsive, enterprise-ready, testable applications",
        "Worked on core product areas leading a team and contributing to the UI platform thereby gaining experience in making important architectural design decisions",
        "Contributed to a core metadata driven framework adopting Behaviour Driven Development focusing on both Test Driven Development and Unit Testing",
        "Granted a patent on an Enterprise Bot Framework",
        "Open to work with distributed cross-functional teams following agile processes or otherwise",
        "Go to person for accessibility, experience in working with web page performance",
        "Building interactive prototypes using Javascript with supporting UI libraries/framework is something I do outside of work",
      ],
    },
    {
      title: "Software Engineer (User Interface) @ SAP SuccessFactors",
      description: [
        "Involved in custom control development for UI library used within the organization",
        "Built a control to achieve real time rich-text (WYSIWYG) email editing with templating support",
        "Worked on some niche areas like Right-to-Left Language support, Web Font Icons implementations to enhance performace of pages",
        "Worked on small scale end-to-end enhancements in this role",
      ],
    },
  ],
  skillHeaderText: "Skills",
  aSkill: [
    "HTML | CSS | JS",
    "SAPUI5 | React",
    "Single Page Applications | Progressive Web Applications",
    "Node.js",
    "OPA | Mocha | Chai | Jest | Cypress | Cucumber",
    "AJAX | ReST",
    "GIT",
    "Design | UX Design",
    "Behaviour Driven Development | Test Driven Development | Unit Testing",
    "Browser Compatibility | Accessibility | Bi-directional Language Support",
    "Web Page Performance",
  ],
  styleClass: "work",
  projectHeaderText: "Projects",
  aProjects: [
    { name: "Portfolio", url: "https://natesan.netlify.app/" },
    { name: "Metadata Driven Portfolio", url: "https://metadata-portfolio.netlify.app/" },
    { name: "React Weather App", url: "https://react-weather-now-app.netlify.app/" },
    { name: "Timer Utility", url: "https://natlab.netlify.app/" },
    { name: "Accessibility-101", url: "https://accessibility-101.netlify.app/" },
  ],
}

export default () => (
  <App>
    <Layout pageTitle={oPageMetadata.title}>
      <Content
        styleClass={oPageMetadata.styleClass}
        className="lg:w-9/12 lg:mx-auto"
      >
        <Header headerText={oPageMetadata.experienceHeaderText} />
        {oPageMetadata.aExperience.map((oExperience, nExperienceIndex) => (
          <div className="mt-3 mb-5" key={nExperienceIndex}>
            <h5 className="text-center text-gray-800 font-semibold border-black-700 border-b pb-2">
              {oExperience.title}
            </h5>
            <ul className="mt-2">
              {oExperience &&
                oExperience.description.map(
                  (sDescription, nDescriptionIndex) => (
                    <li
                      key={nDescriptionIndex}
                      className=""
                      style={{ padding: ".25rem 1.25rem" }}
                    >
                      {sDescription}
                    </li>
                  )
                )}
            </ul>
          </div>
        ))}
      </Content>
      <Content
        styleClass={oPageMetadata.styleClass}
        className="lg:w-9/12 lg:mx-auto"
      >
        <Header headerText={oPageMetadata.skillHeaderText} />
        <div className="my-3">
          <ul className="mt-4">
            {oPageMetadata.aSkill &&
              oPageMetadata.aSkill.map((sSkill, nSkillIndex) => (
                <li
                  key={nSkillIndex}
                  className=""
                  style={{ padding: "0 1.25rem" }}
                >
                  {sSkill}
                </li>
              ))}
          </ul>
        </div>
      </Content>
      <Content
        styleClass={oPageMetadata.styleClass}
        className="lg:w-5/12 lg:mx-auto"
      >
        <Header headerText={oPageMetadata.projectHeaderText}></Header>
        <div className="my-3">
          <ul className="mt-4 text-center project-list">
            {oPageMetadata.aProjects &&
              oPageMetadata.aProjects.map((oProject, nProjectIndex) => (
                <li key={nProjectIndex} style={{ padding: "0 1.25rem" }}>
                  <a href={oProject.url} target="_blank" rel="noopener noreferrer">{oProject.name}</a>
                </li>
              ))}
          </ul>
        </div>
      </Content>
    </Layout>
  </App>
)
