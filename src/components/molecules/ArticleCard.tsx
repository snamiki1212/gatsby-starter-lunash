import React from 'react';
import {Link} from 'gatsby';
import styled, {ThemeContext} from 'styled-components';
import {MarkdownRemarkEdge} from '../../types';
import {UpdatedAt} from '.';
import {Logo} from '../atoms/Logo';
import {Tile} from '../atoms/Tile';
import {ArticleCardLayout} from './ArticleCardLayout';

type Props = {
  postInfo: MarkdownRemarkEdge;
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

const CategoryName = styled.span`
  border-radius: 10px;
  background: ${(props) => props.theme.color.primaryVivid};
  color: ${(props) => props.theme.color.baseDark};
  padding: 0 20px;
`;

const Title = styled.div`
  font-family: ${(props) => props.theme.fontFamily.primary};
`;

export const ArticleCard: React.FC<Props> = ({postInfo}) => {
  const title = postInfo.node.frontmatter.title;
  const slug = postInfo.node.fields._slug;
  const imgInfo = postInfo.node.frontmatter.cover;
  const category = 'ここカテゴリ'; // postInfo.node.frontmatter.category;
  const updatedAt = postInfo.node.fields._updatedAt;
  const {
    layout: {articleCardLogoSize},
  } = React.useContext(ThemeContext);

  return (
    <Wrapper>
      <Link to={slug}>
        <Tile imgInfo={imgInfo} size={300}>
          <ArticleCardLayout
            logo={<Logo size={articleCardLogoSize} />}
            category={<CategoryName>{category}</CategoryName>}
            updatedAt={<UpdatedAt date={updatedAt} />}
            title={<Title>{title}</Title>}
          />
        </Tile>
      </Link>
    </Wrapper>
  );
};