import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Container from '../styled/container';

const Home = (props) => {
  const pageLinks = [];
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.allMarkdownRemark.edges');

  posts.forEach((post) => {
    if (post.node.path !== '/404/') {
      const title = get(post, 'node.frontmatter.title') || post.node.path;

      const pageLink = (
        <BlogListItem key={title}>
          <Link to={post.node.frontmatter.path}>
            {title}
          </Link>
        </BlogListItem>
      );

      pageLinks.push(pageLink);
    }
  });

  return (
    <Container>
      <Helmet title={siteTitle} />
      <BlogList>
        {pageLinks}
      </BlogList>
    </Container>
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

const BlogList = styled.ul`
  padding: 0;
  list-style: none;
`;

const BlogListItem = styled.li`
  padding: 1.6rem 1rem;
  font-size: 2rem;
  border-bottom: 1px solid #666;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: black;
    color: white;
  }
`;
