import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MarkdownPageTemplate({ data }) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return (
    <Layout pageTitle={frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
