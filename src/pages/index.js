import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { Container } from "../components/container"
import { List, ListItem } from "../components/list"
import { Svg } from "../components/svgs"
import { Card } from "../components/card"
import "./home.scss"

const IndexPage = () => {
  const intl = useIntl()

  return (
    <Layout>
      <SEO title={ intl.formatMessage({ id: "pages.index.title" })} />
      <Container>
        <section className="intro">
          <p>
            <FormattedMessage
              id="pages.index.intro-paragraph-1"
              values={{
                siteLink: (
                  <a href="https://theartofeducation.edu" target="_blank" rel="noreferrer">
                    {intl.formatMessage({ id: "pages.index.site-link-text" })}
                  </a>
                )
              }} />
          </p>
          <p><FormattedMessage id="pages.index.intro-paragraph-2" /></p>
        </section>
        <h2><FormattedMessage id="pages.index.resources-heading" /></h2>
        <List orientation="centered" className="resource-list">
          <ListItem>
            <Card className="resource-card" linkTo="https://github.com/theartofeducation">
              <header><FormattedMessage id="pages.index.style-guide-header" /></header>
              <article><FormattedMessage id="pages.index.style-guide-content" /></article>
              <footer>
                <List orientation="right">
                  <ListItem>
                    <a href="https://github.com/theartofeducation/aoeu-react-components" target="_blank" rel="noreferrer">
                      <Svg symbolId="github-icon" className="link-icon" />
                    </a>
                  </ListItem>
                  <ListItem>
                    <a href="https://theartofeducation.github.io/aoeu-react-components" target="_blank" rel="noreferrer">
                      <Svg symbolId="external-link-icon" className="link-icon" />
                    </a>
                  </ListItem>
                </List>
              </footer>
            </Card>
          </ListItem>
        </List>
      </Container>
      {/*
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      */}
    </Layout>
  )
}

export default IndexPage
