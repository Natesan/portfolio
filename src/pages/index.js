import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import Content from "../components/content"
import Header from "../components/header"
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
    {
      type: "LINKEDIN",
      url: "https://www.linkedin.com/in/natesans",
      styleClass: "cursor mx-2",
    },
    {
      type: "GITHUB",
      url: "https://github.com/Natesan",
      styleClass: "cursor mx-2",
    },
    {
      type: "TWITTER",
      url: "https://www.twitter.com/NatesanSiv",
      styleClass: "cursor mx-2",
    },
    {
      type: "INSTAGRAM",
      url: "https://www.instagram.com/natesan.sivagnanam",
      styleClass: "cursor mx-2",
    },
    {
      type: "FACEBOOK",
      url: "https://www.facebook.com/Natesan.Sivagnanam",
      styleClass: "cursor mx-2",
    },
  ],
  styleClass: "index",
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Content styleClass={oPageMetadata.styleClass}>
        <div className="text-center">
          <Header headerText={oPageMetadata.headerText}></Header>
        </div>
        <div className="text-center d-flex justify-content-center px-5">
          <Thumbnail></Thumbnail>
        </div>
        <div className="panel panel-default text-center my-3">
          <p>{oPageMetadata.introText}</p>
        </div>
        <div className="panel panel-default text-center d-flex justify-content-center my-3">
          <Links links={oPageMetadata.homePageLinks}></Links>
        </div>
      </Content>
    </Layout>
  </Container>
)
