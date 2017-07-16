import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../styled/container';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <Container>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <Title>
        {post.frontmatter.title}
      </Title>
      <Article
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: post.html }}  />
    </Container>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape,
  }).isRequired,
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 4rem;
`;
const Article = styled.article`
  font-size: 1.8rem;
  line-height: 1.5;
  padding-bottom: 5rem;
  
  blockquote {
    border-left: 0.5rem solid black;
    margin-left: 0;
    padding-left: 1rem;
  }
`;
