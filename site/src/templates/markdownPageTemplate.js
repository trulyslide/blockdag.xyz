import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function MarkdownPageTemplate({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark

  return (
    <Layout>
            <div className="flex-container">
        <div className="main-content">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
    }
  }
`
