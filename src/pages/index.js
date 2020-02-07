import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import Links from "../components/links"
import Thumbnail from "../components/thumbnail"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

const oPageMetadata = {
  title: "Natesan Sivagnanam",
  headerText: "Hello! I'm Natesan",
  introText: `Computer Science graduate from Coonoor. Living in Bangalore, Product 
  User Interface development is what I do for large scale enterprise applications. 
  I think of design of things and love to travel, photograph, trek & read. 
  I play a whole lot of games and follow a bunch of sports.`,
  homePageLinks: [
    { type: "LINKEDIN", url: "https://www.linkedin.com/in/natesans" },
    { type: "GITHUB", url: "https://github.com/Natesan" },
    { type: "TWITTER", url: "https://www.twitter.com/NatesanSiv" },
    { type: "INSTAGRAM", url: "https://www.instagram.com/natesan.sivagnanam" },
    { type: "FACEBOOK", url: "https://www.facebook.com/Natesan.Sivagnanam" },
  ],
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <div className="text-center">
        <Header headerText={oPageMetadata.headerText}></Header>
      </div>
      <div className="text-center d-flex justify-content-around px-5">
        <Thumbnail></Thumbnail>
      </div>
      <div className="panel panel-default text-center my-3">
        <p>{oPageMetadata.introText}</p>
      </div>
      <div className="panel panel-default text-center d-flex justify-content-around my-3">
        <Links links={oPageMetadata.homePageLinks}></Links>
      </div>
    </Layout>
  </Container>
)
