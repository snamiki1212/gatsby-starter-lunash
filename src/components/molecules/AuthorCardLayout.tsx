import React from 'react';
import styled from 'styled-components';
import {Card} from '../atoms/Card';

type Props = {
  avator: React.ReactNode;
  name: React.ReactNode;
  sns: React.ReactNode;
  description: React.ReactNode;
  toProfile: React.ReactNode;
};

export const AuthorCardLayout: React.FC<Props> = ({
  avator,
  name,
  sns,
  description,
  toProfile,
}) => {
  return (
    <Card>
      <Grid>
        <GridAvator>{avator}</GridAvator>
        <GridName>{name}</GridName>
        <GridSNS>{sns}</GridSNS>
        <GridDescription>{description}</GridDescription>
        <GridProfileLink>{toProfile}</GridProfileLink>
      </Grid>
    </Card>
  );
};

export const avatorSizeNum = 60;

const Grid = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows:
    ${(props) => props.theme.layout.autherAvatorSizeNum / 2}px
    ${(props) => props.theme.layout.autherAvatorSizeNum / 2}px 1fr auto;
  grid-template-columns: ${(props) =>
      `${props.theme.layout.autherAvatorSizeNum + 10}px`} 1fr;
`;

const GridAvator = styled.div`
  grid-row: 1/3;
  grid-column: 1/2;

  display: grid;
  place-content: center;
`;

const GridName = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  padding-left: 0.2rem;
  display: grid;
  align-items: center;
`;

const GridSNS = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;
`;

const GridDescription = styled.div`
  padding: 1rem 0 0.5rem 0;
  grid-row: 3/4;
  grid-column: 1/3;
`;

const GridProfileLink = styled.div`
  grid-row: 4/5;
  grid-column: 1/3;
  margin: 0 auto;
`;
