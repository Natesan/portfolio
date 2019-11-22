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
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className="cursor"
          />
        )

      case "GITHUB":
        return (
          <IoLogoGithub
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className="cursor"
          />
        )

      case "TWITTER":
        return (
          <IoLogoTwitter
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className="cursor"
          />
        )

      case "INSTAGRAM":
        return (
          <IoLogoInstagram
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className="cursor"
          />
        )

      case "FACEBOOK":
        return (
          <IoLogoFacebook
            onClick={() => window.open(link.url)}
            fontSize={link.fontSize ? link.fontSize : "60px"}
            className="cursor"
          />
        )

      case "MAIL":
        return (
          <a href={link.url} target="_top" className={link.styleClass}>
            <IoMdMail fontSize={link.fontSize ? link.fontSize : "60px"} />
          </a>
        )

      case "PHONE":
        return (
          <a href={link.url} target="_top" className={link.styleClass}>
            <MdPhoneInTalk fontSize={link.fontSize ? link.fontSize : "60px"} />
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
