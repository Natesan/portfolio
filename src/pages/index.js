import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"
import Container from "../components/container"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
} from "react-icons/io"

export default () => (
  <Container>
    <Layout>
      <div className="jumbotron text-center my-3">
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
        <IoLogoLinkedin
          onClick={() =>
            window.open("https://www.linkedin.com/in/natesansivagnanam")
          }
          fontSize="60px"
          className="cursor"
        />
        <IoLogoGithub
          onClick={() => window.open("https://github.com/Natesan")}
          fontSize="60px"
          className="cursor"
        />
        <IoLogoTwitter
          onClick={() => window.open("https://www.twitter.com/NatesanSiv")}
          fontSize="60px"
          className="cursor"
        />
        <IoLogoInstagram
          onClick={() =>
            window.open("https://www.instagram.com/natesan.sivagnanam")
          }
          fontSize="60px"
          className="cursor"
        />
        <IoLogoFacebook
          onClick={() =>
            window.open("https://www.facebook.com/Natesan.Sivagnanam")
          }
          fontSize="60px"
          className="cursor"
        />
      </div>
    </Layout>
  </Container>
)
