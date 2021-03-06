import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import {MarkdownRemarkEdge} from '../../types';
import {Image} from '../atoms/Image';
import {Logo} from '../atoms/Logo';
import {UpdatedAt} from '../molecules';
import {ArticleCardLayout} from './ArticleCardLayout';

type Props = {
  postInfo: MarkdownRemarkEdge;
};

export const ArticleCard: React.FC<Props> = ({postInfo: edge}) => {
  const to = edge.node.fields._slug;
  const linkKey = edge.node.frontmatter.title;
  const imgInfo = edge.node.frontmatter.cover;
  const title = edge.node.frontmatter.title;
  const updatedAt = edge.node.fields._updatedAt;
  const category = edge.node.frontmatter.category;

  return (
    <Link to={to} key={linkKey}>
      <ArticleCardLayout
        image={<_Image imgInfo={imgInfo} />}
        logo={<Logo size={40} />}
        title={<Title>{title}</Title>}
        updatedAt={
          <UpdatedAt date={updatedAt} containerStyle={{fontSize: '0.7rem'}} />
        }
        category={
          <CategoryWrapper>
            <Category>{category}</Category>
          </CategoryWrapper>
        }
      />
    </Link>
  );
};

const _Image = styled(Image)`
  border-radius: 10px;
`;

const Title = styled.span``;

const CategoryWrapper = styled.div`
  display: flex;
`;

const Category = styled.span`
  border-radius: 10px;
  color: ${(props) => props.theme.color.baseDark};
  border: 1px solid ${(props) => props.theme.color.primaryVivid};
  font-family: ${(props) => props.theme.fontFamily.primary};
  padding: 5px 20px;
`;
