import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Skills",
  headerText: "Skills",
  aSkill: [
    "HTML | CSS",
    "Object Oriented Javascript | jQuery",
    "SAPUI5 | React",
    "Node.js",
    "OPA | Mocha | Chai | Jest | Cypress",
    "AJAX | ReST",
    "Design | UX Design",
    "Browser Compatibility | Accessibility | Bi-directional Language Support",
  ],
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      <div className="my-3">
        <ul className="list-group list-group-flush mt-4 d-flex flex-column justify-content-between">
          {oPageMetadata.aSkill &&
            oPageMetadata.aSkill.map(sSkill => (
              <li
                className="list-group-item"
                style={{ padding: ".25rem 1.25rem" }}
              >
                {sSkill}
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  </Container>
)
