import React from 'react';
import Helmet from 'react-helmet';
import {graphql} from 'gatsby';
import config from '../../../data/SiteConfig';
import {TagPageContext} from '../../../gatsby-node/types';
import {Layout} from '../templates/Layout';
import {ArticleList} from '../organisms/ArticleList';
import {Subtitle} from '../atoms/Subtitle';
import {MarkdownRemarkEdge} from '../../types';
import {AuthorCard} from '../molecules';
import {ArticleListLayout} from '../templates/ArticleListLayout';
import {Paginator} from '../atoms';

type Props = {
  pageContext: TagPageContext;
  data: {allMarkdownRemark: TagPageQuery};
};
export const TagPage: React.FC<Props> = ({pageContext, data}) => {
  const {tag} = pageContext;
  const postEdges = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | ${tag}`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>

      <main>
        <ArticleListLayout
          articleListHeader={<Subtitle>{tag}</Subtitle>}
          articles={<ArticleList postEdges={postEdges} />}
          pagination={<Paginator context={pageContext} />}
          profile={<AuthorCard />}
        />
      </main>
    </Layout>
  );
};

export const tagPageQuery = graphql`
  query TagPageQuery($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: [fields____createdAt], order: DESC}
      limit: $limit
      skip: $skip
      filter: {frontmatter: {tags: {in: [$tag]}}}
    ) {
      edges {
        node {
          fields {
            _slug
            _createdAt
            _updatedAt
          }
          excerpt(truncate: true)
          timeToRead
          frontmatter {
            title
            tags
            category
            cover {
              publicURL
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  aspectRatio: 1.0
                  width: 150
                  placeholder: BLURRED
                )
              }
              extension
            }
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;

export interface TagPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default TagPage;
