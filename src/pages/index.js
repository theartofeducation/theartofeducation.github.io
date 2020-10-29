import React from "react"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExternalLink } from "../components/external-link"
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
                  <ExternalLink url="https://theartofeducation.edu">
                    {intl.formatMessage({ id: "pages.index.site-link-text" })}
                  </ExternalLink>
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
                    <ExternalLink url="https://github.com/theartofeducation/react-component-library">
                      <Svg symbolId="github-icon" className="link-icon" />
                    </ExternalLink>
                  </ListItem>
                  <ListItem>
                    <ExternalLink url="https://theartofeducation.github.io/react-component-library">
                      <Svg symbolId="external-link-icon" className="link-icon" />
                    </ExternalLink>
                  </ListItem>
                </List>
              </footer>
            </Card>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default IndexPage
