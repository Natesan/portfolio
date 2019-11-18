import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Layout from "../components/layout"
import { TwitterFollowButton, TwitterTweetEmbed } from "react-twitter-embed"

var aTweet = ["947028575437377537", "815277249943441408", "814169531669217280"]

export default () => (
  <Container>
    <Layout>
      <Header headerText="Journals" />
      <div class="d-flex flex-column align-items-center">
        {aTweet &&
          aTweet.map(sTweetID => <TwitterTweetEmbed tweetId={sTweetID} />)}
        <div class="mt-5">
          <TwitterFollowButton screenName={"natesansiv"} />
        </div>
      </div>
    </Layout>
  </Container>
)
