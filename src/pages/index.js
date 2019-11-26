import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import Links from "../components/links"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

const oPageMetadata = {
  title: "Natesan Sivagnanam",
  headerText: "Hello! I'm Natesan",
  introText: `Computer Science graduate from Coonoor. Living in Bangalore, Product 
  UI development is what I do. Love to travel, photograph, trek and
  read. I play a whole lot of games and follow a bunch of sports.`,
  homePageLinks: [
    { type: "LINKEDIN", url: "https://www.linkedin.com/in/natesansivagnanam" },
    { type: "GITHUB", url: "https://github.com/Natesan" },
    { type: "TWITTER", url: "https://www.twitter.com/NatesanSiv" },
    { type: "INSTAGRAM", url: "https://www.instagram.com/natesan.sivagnanam" },
    { type: "FACEBOOK", url: "https://www.facebook.com/Natesan.Sivagnanam" },
  ],
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <div className="jumbotron text-center my-2">
        <Header headerText={oPageMetadata.headerText}></Header>
      </div>
      <div className="panel panel-default pt-2 text-center">
        <p>{oPageMetadata.introText}</p>
      </div>
      <div className="panel panel-default pt-5 text-center d-flex justify-content-around">
        <Links links={oPageMetadata.homePageLinks}></Links>
      </div>
    </Layout>
  </Container>
)
