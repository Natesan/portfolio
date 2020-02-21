import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import Content from "../components/content"
import Header from "../components/header"
import "../styles/journal.css"
import { TwitterFollowButton, TwitterTweetEmbed } from "react-twitter-embed"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Journals",
  headerText: "Journals",
  aTweet: [
    "1211300402727026688",
    "1213127033364062211",
    "947028575437377537",
    "815277249943441408",
  ],
  screenName: "natesansiv",
  styleClass: "journals",
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Content styleClass={oPageMetadata.styleClass}>
        <Header headerText={oPageMetadata.headerText} />
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {oPageMetadata.aTweet &&
            oPageMetadata.aTweet.map((sTweetID, nTweetIndex) => (
              <div
                className="twitterWidget mx-2 align-items-stretch"
                key={nTweetIndex}
              >
                <TwitterTweetEmbed tweetId={sTweetID} />
              </div>
            ))}
        </div>
        <div className="mt-5 text-center">
          <TwitterFollowButton screenName={oPageMetadata.screenName} />
        </div>
      </Content>
    </Layout>
  </Container>
)
