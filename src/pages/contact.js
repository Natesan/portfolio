import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"

import { IoMdMail, IoLogoTwitter } from "react-icons/io"
import { MdPhoneInTalk } from "react-icons/md"

export default () => (
  <Container>
    <Layout>
      <Header headerText="Don't Be Shy, Say Hi!" />
      <div className="panel panel-default pt-2 text-center">
        <p>Go on come on!</p>
      </div>
      <div className="panel panel-default pt-5 text-center d-flex justify-content-around">
        <a href="mailto:nmsnatesan@gmail.com?Subject=Ahoy%20Hoy" target="_top">
          <IoMdMail fontSize="40px" />
        </a>
        <a href="tel:+919742398411">
          <MdPhoneInTalk fontSize="40px" />
        </a>
        <a
          href="https://www.twitter.com/NatesanSiv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoTwitter fontSize="40px" />
        </a>
      </div>
    </Layout>
  </Container>
)
