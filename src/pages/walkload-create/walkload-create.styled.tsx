import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface WrapperProps extends HTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
}

export const ButtonWrapper = styled.button<WrapperProps>(
  ({ width, height, bgColor, color }) => `
  width: ${width};
  height: ${height};
  background-color: ${bgColor};
  color: ${color};
  border-radius: 8px;
  padding: 12px 18px;
  font-size: 16px;
  font-weight: 600;
  transition: all 200ms ease-out;

  &:hover {
    background-color: #252525;
    color: #fff;
  }
`
);
