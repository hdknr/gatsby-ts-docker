import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type Props = PageProps<GatsbyTypes.Page404Query>


const NotFoundPage = ({ data, location }: Props) => {
  const siteTitle = data.site!.siteMetadata!.title!

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query Page404{
    site {
      siteMetadata {
        title
      }
    }
  }
`
