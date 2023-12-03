import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

const Layout = ({ children, pageTitle, includeSidebar = false }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const defaultTitle = data.site.siteMetadata.title;

  return (
    <>
      <Helmet>
        <title>{pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle}</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      {includeSidebar && <Sidebar />}
      <Footer />
    </>
  )
}

export default Layout
