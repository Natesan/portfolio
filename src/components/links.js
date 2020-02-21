import React, { Component } from "react"
import {
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoInstagram,
  IoMdMail,
} from "react-icons/io"

import { MdPhoneInTalk } from "react-icons/md"

export default class Links extends Component {
  constructor() {
    super()
    this.getLinkComponent = this.getLinkComponent.bind(this)
  }

  getLinkComponent(link) {
    switch (link.type) {
      case "LINKEDIN":
        return (
          <IoLogoLinkedin
            key={link.type}
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className={link.styleClass ? link.styleClass : ""}
          />
        )

      case "GITHUB":
        return (
          <IoLogoGithub
            key={link.type}
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className={link.styleClass ? link.styleClass : ""}
          />
        )

      case "TWITTER":
        return (
          <IoLogoTwitter
            key={link.type}
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className={link.styleClass ? link.styleClass : ""}
          />
        )

      case "INSTAGRAM":
        return (
          <IoLogoInstagram
            key={link.type}
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className={link.styleClass ? link.styleClass : ""}
          />
        )

      case "FACEBOOK":
        return (
          <IoLogoFacebook
            key={link.type}
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className={link.styleClass ? link.styleClass : ""}
          />
        )

      case "MAIL":
        return (
          <a href={link.url} target="_top" className={link.styleClass}>
            <IoMdMail
              key={link.type}
              fontSize={link.fontSize ? link.fontSize : "60px"}
            />
          </a>
        )

      case "PHONE":
        return (
          <a href={link.url} target="_top" className={link.styleClass}>
            <MdPhoneInTalk
              key={link.type}
              fontSize={link.fontSize ? link.fontSize : "60px"}
            />
          </a>
        )

      default:
        return <div>Link type not available!</div>
    }
  }

  render() {
    return this.props.links.map(link => this.getLinkComponent(link))
  }
}
