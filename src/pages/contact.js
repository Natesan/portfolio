import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Links from "../components/links"
import "../styles/contact.css"

var aContactLinkMetadata = [
  {
    type: "MAIL",
    url: "mailto:nmsnatesan@gmail.com?Subject=Ahoy%20Hoy",
    fontSize: "40px",
    styleClass: "contactLink",
  },
  {
    type: "PHONE",
    url: "tel:+919742398411",
    fontSize: "40px",
    styleClass: "contactLink",
  },
]

export default () => (
  <Container>
    <Layout>
      <Header headerText="Don't Be Shy, Say Hi!" />
      <div className="panel panel-default pt-2 text-center">
        <p>Got something to chat about! Go on!</p>
      </div>
      <div className="panel panel-default pt-5 text-center d-flex justify-content-center">
        <Links links={aContactLinkMetadata}></Links>
      </div>
    </Layout>
  </Container>
)
