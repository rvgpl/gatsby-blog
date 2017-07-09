import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import * as PropTypes from 'prop-types';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h1>
        {post.frontmatter.title}
      </h1>
      <div
      // eslint-disable-next-line
      dangerouslySetInnerHTML={{ __html: post.html }}  />
    </div>
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
