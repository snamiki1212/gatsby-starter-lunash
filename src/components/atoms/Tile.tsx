import React from 'react';
import {Image} from '../atoms/Image';
import styled, {css} from 'styled-components';

// REF: https://markoskon.com/gatsby-background-image-example/

const mixinChild = css`
  position: absolute;
  top: 0;
`;

const Parent = styled.div<{size: number}>`
  position: relative;
  min-width: ${({size}) => `${size}px`};
  min-height: ${({size}) => `${size}px`};
  border-radius: 10px;
  background: var(--base-dark-B3);
`;

const ChildContent = styled.div`
  ${mixinChild};
  width: 100%;
  height: 100%;
`;

const ChildBackground = styled(Image)`
  ${mixinChild};
  z-index: -1;
  height: 100%;
  border-radius: 10px;
`;

export const Tile: React.FC<{imgInfo: any; size: number}> = ({
  imgInfo,
  size,
  children,
}) => {
  return (
    <Parent size={size}>
      <ChildBackground imgInfo={imgInfo} />
      <ChildContent>{children}</ChildContent>
    </Parent>
  );
};
