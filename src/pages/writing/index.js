import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";
import Link from "gatsby-link";
import styled from "styled-components";
import Container from "../../styled/container";

const Writing = props => {
  const pageLinks = [];
  const posts = get(props, "data.allMarkdownRemark.edges");

  posts.forEach(post => {
    if (post.node.path !== "/404/") {
      const title = get(post, "node.frontmatter.title") || post.node.path;
      const date = get(post, "node.frontmatter.date");

      const pageLink = (
        <BlogListItem key={title}>
          <PostTitle>
            <Link to={post.node.frontmatter.path}>{title}</Link>
          </PostTitle>
          <PostDate>{date}</PostDate>
        </BlogListItem>
      );

      pageLinks.push(pageLink);
    }
  });

  return (
    <Container>
      <Helmet title={Writing} />
      <BlogList>{pageLinks}</BlogList>
    </Container>
  );
};

export default Writing;

export const pageQuery = graphql`
  query allPosts {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            path
            title
            intro
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const BlogList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 6.4rem auto;
`;

const BlogListItem = styled.li`
  padding: 1.6rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostTitle = styled.h3`
  font-size: 2.4rem;
  font-family: ${props => props.theme.primaryTypeface};
  border-bottom: 0.4rem solid;
  border-color: ${props => props.theme.primary};
  margin: 0;
`;

const PostDate = styled.time`
  font-size: 1.4rem;
  color: #777;
`;
