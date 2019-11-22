import React from "react"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import Links from "../components/links"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

var aHomeLinkMetadata = [
  { type: "LINKEDIN", url: "https://www.linkedin.com/in/natesansivagnanam" },
  { type: "GITHUB", url: "https://github.com/Natesan" },
  { type: "TWITTER", url: "https://www.twitter.com/NatesanSiv" },
  { type: "INSTAGRAM", url: "https://www.instagram.com/natesan.sivagnanam" },
  { type: "FACEBOOK", url: "https://www.facebook.com/Natesan.Sivagnanam" },
]

export default () => (
  <Container>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Natesan Sivagnanam</title>
      <link rel="canonical" href="https://natesan.netlify.com/" />
    </Helmet>

    <Layout>
      <div className="jumbotron text-center my-2">
        <Header headerText="Hello! I'm Natesan"></Header>
      </div>
      <div className="panel panel-default pt-2 text-center">
        <p>
          Computer Science graduate from Coonoor. Living in Bangalore, Product
          UI development is what I do. Love to travel, photograph, trek and
          read. I play a whole lot of games and follow a bunch of sports.
        </p>
      </div>
      <div className="panel panel-default pt-5 text-center d-flex justify-content-around">
        <Links links={aHomeLinkMetadata}></Links>
      </div>
    </Layout>
  </Container>
)
