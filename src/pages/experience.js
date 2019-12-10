import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Experience",
  headerText: "Experience",
  aExperience: [
    {
      title: "Senior Software Engineer (User Interface) @ SAP Labs",
      description: [
        "Experience building large cloud-based enterprise software specializing in frontend technologies",
        "Hands on working experience with frameworks designed to build cross-platform, responsive, enterprise-ready, testable applications",
        "Worked on core product areas leading a team and contributing to the UI platform thereby gaining experience in making important architectural design decisions",
        "Open to work with distributed cross-functional teams following agile processes or otherwise",
        "Contributed to patent filing on various bot based implementations",
        "Go to person for accessibility, experience in working with web page performance",
        "Building interactive prototypes using Javascript with supporting UI libraries/framework is something I do outside of work",
      ],
    },
    {
      title:
        "Software Development Engineer (User Interface) @ SAP SuccessFactors",
      description: [
        "Involved in custom control development for UI library used within the organization",
        "Built a control to achieve real time rich-text (WYSIWYG) email editing with templating support",
        "Worked on some niche areas like Right-to-Left Language support, Web Font Icons implementations to enhance performace of pages",
        "Worked on small scale end-to-end enhancements in this role",
      ],
    },
  ],
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      {oPageMetadata.aExperience.map((oExperience, nExperienceIndex) => (
        <div className="my-3" key={nExperienceIndex}>
          <h5>{oExperience.title}</h5>
          <ul className="list-group list-group-flush mt-2">
            {oExperience &&
              oExperience.description.map((sDescription, nDescriptionIndex) => (
                <li
                  key={nDescriptionIndex}
                  className="list-group-item"
                  style={{ padding: ".25rem 1.25rem" }}
                >
                  {sDescription}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </Layout>
  </Container>
)
