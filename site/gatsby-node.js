const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
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
  `);

  result.data.allFile.edges.forEach(({ node }) => {
    // Remove the file extension from the path
    const pathWithoutExtension = node.relativePath.replace(/\.[^/.]+$/, "");

    createPage({
      path: pathWithoutExtension, // Use the modified path
      component: path.resolve(`./src/pages/${node.relativePath}`),
      // Include additional context if needed
    });
  });
};
