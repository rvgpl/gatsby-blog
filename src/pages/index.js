import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Link from 'gatsby-link';

const Home = (props) => {
  const pageLinks = [];
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.allMarkdownRemark.edges');

  posts.forEach((post) => {
    if (post.node.path !== '/404/') {
      const title = get(post, 'node.frontmatter.title') || post.node.path;

      const pageLink = (
        <li key={title}>
          <Link to={post.node.frontmatter.path}>
            {title}
          </Link>
        </li>
      );

      pageLinks.push(pageLink);
    }
  });

  return (
    <div>
      <Helmet title={siteTitle} />
      <ul>
        {pageLinks}
      </ul>
    </div>
  );
};

export default Home;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
