import React from "react"
import App from "../components/app"
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
  <App>
    <Layout pageTitle={oPageMetadata.title}>
      <Content styleClass={oPageMetadata.styleClass} className="w-9/12 mx-auto">
        <Header headerText={oPageMetadata.headerText} />
        <div className="flex flex-row flex-wrap justify-center">
          {oPageMetadata.aTweet &&
            oPageMetadata.aTweet.map((sTweetID, nTweetIndex) => (
              <div className="twitterWidget mx-2" key={nTweetIndex}>
                <TwitterTweetEmbed tweetId={sTweetID} />
              </div>
            ))}
        </div>
        <div className="mt-5 flex justify-center">
          <TwitterFollowButton screenName={oPageMetadata.screenName} />
        </div>
      </Content>
    </Layout>
  </App>
)
