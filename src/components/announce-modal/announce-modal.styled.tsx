import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

export const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const InnerWrapper = styled.div`
  position: absolute;
  width: 340px;
  height: auto;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1004;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 25px 30px 25px;
  border-radius: 12px;
`;

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export const Text = styled.div<TextProps>(
  ({ color }) => `
  color: ${color};
  margin: 25px 0;
  height: auto;
`
);
