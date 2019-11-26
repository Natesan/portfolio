import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import { TwitterFollowButton, TwitterTweetEmbed } from "react-twitter-embed"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Journals",
  headerText: "Journals",
  aTweet: ["947028575437377537", "815277249943441408", "814169531669217280"],
  screenName: "natesansiv",
}

export default () => (
  <Container>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      <div className="d-flex flex-column align-items-center">
        {oPageMetadata.aTweet &&
          oPageMetadata.aTweet.map(sTweetID => (
            <TwitterTweetEmbed tweetId={sTweetID} />
          ))}
        <div className="mt-5">
          <TwitterFollowButton screenName={oPageMetadata.screenName} />
        </div>
      </div>
    </Layout>
  </Container>
)
