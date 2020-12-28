import React from 'react';
import Helmet from 'react-helmet';
import config from '../../../data/SiteConfig';
import Layout from '../organisms/Layout';
import {MarkdownRemarkEdge} from '../../types';
import {Link} from 'gatsby';
import Button from '@material-ui/core/Button';

type Props = {
  pageContext: any;
  data: any;
};

export const CategorySelectionTemplate: React.FC<Props> = ({
  pageContext,
  data,
}) => {
  const {categories} = pageContext;

  return (
    <Layout>
      <Helmet>
        <title>{`${config.siteTitle} | カテゴリー`}</title>
        <link rel="canonical" href={`${config.siteUrl}`} />
      </Helmet>

      {categories.map(({name, count, path}) => {
        return (
          <Button key={name}>
            <Link to={path}>{`${name}(${count})`}</Link>
          </Button>
        );
      })}
    </Layout>
  );
};

export interface CategoryPageQuery {
  edges: MarkdownRemarkEdge[];
}

export default CategorySelectionTemplate;