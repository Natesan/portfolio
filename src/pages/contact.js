import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import Links from "../components/links"
import "../styles/contact.css"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Contact",
  headerText: "Don't Be Shy, Say Hi!",
  introText: "Got something to chat about! Go on!",
  aContactLinkMetadata: [
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
  ],
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      <div className="panel panel-default pt-2 text-center">
        <p>{oPageMetadata.introText}</p>
      </div>
      <div className="panel panel-default pt-5 text-center d-flex justify-content-center">
        <Links links={oPageMetadata.aContactLinkMetadata}></Links>
      </div>
    </Layout>
  </Container>
)
