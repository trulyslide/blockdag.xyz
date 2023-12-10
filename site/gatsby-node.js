const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allFile(filter: {extension: {in: ["js", "ts"]}}) {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `)

  result.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: node.relativePath,
      component: path.resolve(`./src/pages/${node.relativePath}`),
    })
  })
}