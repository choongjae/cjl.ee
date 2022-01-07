const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-template.js`);
  return graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
            tags
            emoji
            image
          }
          slug
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMdx.nodes;
    posts.forEach((node, index) => {
      console.log(node);
      createPage({
        path: `${"blog/" + node.slug}`,
        component: blogPostTemplate,
        context: {
          slug: node.slug,
          title: node.title,
        },
      });
    });
  });
};
