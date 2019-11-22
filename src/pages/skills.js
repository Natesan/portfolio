import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"

var aSkill = [
  "HTML | CSS",
  "Object Oriented Javascript | jQuery",
  "SAPUI5 | React",
  "Node.js",
  "OPA | Mocha | Chai | Jest | Cypress",
  "AJAX | ReST",
  "Design | UX Design",
  "Browser Compatibility | Accessibility | Bi-directional Language Support",
]

export default () => (
  <Container>
    <Layout>
      <Header headerText="Skills" />
      <div className="my-3">
        <ul className="list-group list-group-flush mt-4 d-flex flex-column justify-content-between">
          {aSkill &&
            aSkill.map(sSkill => (
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
