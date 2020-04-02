import React from "react"
import App from "../components/app"
import Layout from "../components/layout"
import Content from "../components/content"
import Links from "../components/links"
import Thumbnail from "../components/thumbnail"

const oPageMetadata = {
  title: "Natesan Sivagnanam",
  headerText: "Natesan Sivagnanam",
  subtitles: ["Frontend Engineer", "Design Enthusiast", "Travel & Photography"],
  introText: `Computer Science graduate from Coonoor. Living in Bangalore, Product 
  User Interface development is what I do for large scale enterprise applications. 
  I think of design of things and love to travel, photograph, trek & read. 
  I play a whole lot of games and follow a bunch of sports.`,
  homePageLinks: [
    {
      type: "LINKEDIN",
      url: "https://www.linkedin.com/in/natesans",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "GITHUB",
      url: "https://github.com/Natesan",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "TWITTER",
      url: "https://www.twitter.com/NatesanSiv",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "INSTAGRAM",
      url: "https://www.instagram.com/natesan.sivagnanam",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
    {
      type: "FACEBOOK",
      url: "https://www.facebook.com/Natesan.Sivagnanam",
      styleClass: "cursor-pointer mx-1 lg:mx-2 my-2",
    },
  ],
  styleClass: "index",
}

export default () => (
  <App>
    <Layout pageTitle={oPageMetadata.title}>
      <Content>
        <div className="text-4xl text-black-800 text-center my-3">
          <h3>{oPageMetadata.headerText}</h3>
        </div>

        {/* <div className="panel panel-default text-center my-3">
          <p>{oPageMetadata.introText}</p>
        </div> */}

        <div className="text-lg text-black-700 text-center my-3">
          {oPageMetadata.subtitles.map(subtitle => (
            <div key="{subtitle}" className="">
              {subtitle}
            </div>
          ))}
        </div>

        <div className="text-center flex justify-center px-5 ">
          <Thumbnail></Thumbnail>
        </div>

        <div className="text-center flex flex-wrap justify-center my-5">
          <Links links={oPageMetadata.homePageLinks}></Links>
        </div>
      </Content>
    </Layout>
  </App>
)
