import React from "react"
import App from "../components/app"
import Header from "../components/header"
import Layout from "../components/layout"
import Content from "../components/content"
import Links from "../components/links"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Contact",
  headerText: "Contact",
  introText:
    "Do you have any feedback on my website or articles please reach out to me on my email and I would get back to you as soon as possible",
  aContactLinkMetadata: [
    {
      type: "MAIL",
      url: "mailto:nmsnatesan@gmail.com?Subject=Ahoy%20Hoy",
      fontSize: "40px",
      styleClass: "cursor",
    },
  ],
  showCredits: false,
  styleClass: "contact",
}

export default () => (
  <App>
    <Layout
      pageTitle={oPageMetadata.title}
      showCredits={oPageMetadata.showCredits}
    >
      <Content
        styleClass={oPageMetadata.styleClass}
        className="w-10/12 lg:w-6/12 mx-auto"
      >
        <Header headerText={oPageMetadata.headerText} />
        <div className="pt-2 text-center">
          <p>{oPageMetadata.introText}</p>
        </div>

        <div className="pt-5 text-center flex justify-center">
          <Links links={oPageMetadata.aContactLinkMetadata}></Links>
        </div>
      </Content>
    </Layout>
  </App>
)
