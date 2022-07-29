import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

interface WrapperProps extends HTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  radius?: number;
  fontSize?: number;
}

export const ButtonWrapper = styled.button<WrapperProps>(
  ({ width, height, bgColor, color, radius, fontSize }) => `
  width: ${width};
  height: ${height};
  background-color: ${bgColor};
  color: ${color};
  border-radius: ${`${radius}px`};
  text-align: center;
  vertical-align: center;
  font-size: ${`${fontSize}px`};
  font-weight: 600;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`
);
