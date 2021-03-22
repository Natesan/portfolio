import React from "react"
import App from "../components/app"
import Header from "../components/header"
import Layout from "../components/layout"
import Content from "../components/content"
import "../styles/books.css"

const oPageMetadata = {
  title: "Natesan Sivagnanam - Books",
  headerText: "Books",
  topics: [
    "Non Fiction",
    "Adventure",
    "Technology",
    "History",
    "Business",
    "Sports",
    "Travel",
  ],
  styleClass: "books",
}

export default () => (
  <App>
    <Layout pageTitle={oPageMetadata.title}>
      <Header headerText={oPageMetadata.headerText} />
      <Content
        styleClass={oPageMetadata.styleClass}
        className="lg:w-9/12 mx-auto"
      >
        <div className="flex flex-wrap justify-center lg:pb-3">
          {oPageMetadata.topics.map(sTopic => (
            <span
              key={sTopic}
              className="bg-gray-100 border-t border-gray-500 text-gray-700 px-4 py-1 mt-3 mx-2 font-bold text-xs"
            >
              {sTopic}
            </span>
          ))}
        </div>

        <div id="gr_grid_widget_1616422216">
          <div className="gr_grid_container flex flex-row flex-wrap p-2 bd-highlight justify-center lg:justify-evenly items-stretch self-stretch">
            <div className="gr_grid_book_container">
              <a
                title="Eleven Rings: The Soul of Success"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/16158522-eleven-rings"
              >
                <img
                  alt="Eleven Rings: The Soul of Success"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366559771l/16158522._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/44525305-the-ride-of-a-lifetime"
              >
                <img
                  alt="The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1556036622l/44525305._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Titanic"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/11497008-titanic"
              >
                <img
                  alt="Titanic"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405019444l/11497008._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Go Like Hell: Ford, Ferrari, and Their Battle for Speed and Glory at Le Mans"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/6052977-go-like-hell"
              >
                <img
                  alt="Go Like Hell: Ford, Ferrari, and Their Battle for Speed and Glory at Le Mans"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347688661l/6052977._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Fluid: The Approach Applied by Geniuses Over Centuries"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/41815475-fluid"
              >
                <img
                  alt="Fluid: The Approach Applied by Geniuses Over Centuries"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1578755150l/41815475._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="IC 814 Hijacked"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/24288631-ic-814-hijacked"
              >
                <img
                  alt="IC 814 Hijacked"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1420371105l/24288631._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Midnight in Chernobyl: The Untold Story of the World's Greatest Nuclear Disaster"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/40538681-midnight-in-chernobyl"
              >
                <img
                  alt="Midnight in Chernobyl: The Untold Story of the World's Greatest Nuclear Disaster"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1545577007l/40538681._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="The Tattooist of Auschwitz (The Tattooist of Auschwitz, #1)"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/38359036-the-tattooist-of-auschwitz"
              >
                <img
                  alt="The Tattooist of Auschwitz"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1525962117l/38359036._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="When: The Scientific Secrets of Perfect Timing"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/35412097-when"
              >
                <img
                  alt="When: The Scientific Secrets of Perfect Timing"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502223427l/35412097._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Total Competition: Lessons in Strategy from Formula One"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/31125170-total-competition"
              >
                <img
                  alt="Total Competition: Lessons in Strategy from Formula One"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1468558842l/31125170._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Rocket Men: The Daring Odyssey of Apollo 8 and the Astronauts Who Made Man's First Journey to the Moon"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/35414997-rocket-men"
              >
                <img
                  alt="Rocket Men: The Daring Odyssey of Apollo 8 and the Astronauts Who Made Man's First Journey to the Moon"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1502143372l/35414997._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="The Stranger in the Woods: The Extraordinary Story of the Last True Hermit"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/30689330-the-stranger-in-the-woods"
              >
                <img
                  alt="The Stranger in the Woods: The Extraordinary Story of the Last True Hermit"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1471283634l/30689330._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="City of Thieves"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/1971304.City_of_Thieves"
              >
                <img
                  alt="City of Thieves"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1392015757l/1971304._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Grit: The Power of Passion and Perseverance"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/27213329-grit"
              >
                <img
                  alt="Grit: The Power of Passion and Perseverance"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457889762l/27213329._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="The Brain: The Story of You"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/25776132-the-brain"
              >
                <img
                  alt="The Brain: The Story of You"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442830952l/25776132._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Man's Search for Meaning"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/4069.Man_s_Search_for_Meaning"
              >
                <img
                  alt="Man's Search for Meaning"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535419394l/4069._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="The Tattooist of Auschwitz"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/36582334-the-tattooist-of-auschwitz"
              >
                <img
                  alt="The Tattooist of Auschwitz"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1510503308l/36582334._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/34890015-factfulness"
              >
                <img
                  alt="Factfulness: Ten Reasons We're Wrong About the World – and Why Things Are Better Than You Think"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1544963815l/34890015._SX98_.jpg"
                />
              </a>
            </div>
            <div className="gr_grid_book_container">
              <a
                title="The Boy in the Striped Pajamas"
                rel="nofollow"
                href="https://www.goodreads.com/book/show/39999.The_Boy_in_the_Striped_Pajamas"
              >
                <img
                  alt="The Boy in the Striped Pajamas"
                  border="0"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1366228171l/39999._SX98_.jpg"
                />
              </a>
            </div>
            <noscript>
              <br />
              Share{" "}
              <a rel="nofollow" href="/">
                book reviews
              </a>{" "}
              and ratings with Natesan, and even join a{" "}
              <a rel="nofollow" href="/group">
                book club
              </a>{" "}
              on Goodreads.
            </noscript>
          </div>
        </div>
        <script
          src="https://www.goodreads.com/review/grid_widget/17359687.Natesan's%20bookshelf:%20read?cover_size=medium&hide_link=true&hide_title=true&num_books=20&order=d&shelf=read&sort=date_added&widget_id=1616422216"
          type="text/javascript"
          charSet="utf-8"
        ></script>
      </Content>
    </Layout>
  </App>
)
