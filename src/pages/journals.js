import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import "../styles/journal.css"
import { TwitterFollowButton, TwitterTweetEmbed } from "react-twitter-embed"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Journals",
  headerText: "Journals",
  aTweet: ["1211300402727026688", "1213127033364062211", "947028575437377537", "815277249943441408"],
  screenName: "natesansiv",
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      <div className="d-flex flex-column align-items-center">
        {oPageMetadata.aTweet &&
          oPageMetadata.aTweet.map((sTweetID, nTweetIndex) => (
            <div className="twitterWidget" key={nTweetIndex}>
              <TwitterTweetEmbed tweetId={sTweetID} />
            </div>
          ))}
        <div className="mt-5">
          <TwitterFollowButton screenName={oPageMetadata.screenName} />
        </div>
      </div>
    </Layout>
  </Container>
)
