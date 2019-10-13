import styled from '@emotion/styled';

export const IconWrapper = styled.div`
  height: ${props => (props.height ? `${props.height}px` : 'auto')};
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  position: relative;
  cursor: pointer;
`;
