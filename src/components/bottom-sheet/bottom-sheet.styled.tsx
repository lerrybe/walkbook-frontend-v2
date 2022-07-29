import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: flex-start;
  z-index: 1000;
`;

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 -4px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 40px 40px 0 0;
`;

export const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0;
  /* background-color: green; */
`;

interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const ToggleIconWrapper = styled.div<IconWrapperProps>(
  ({ active }) => `
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }
  ${active && 'animation: rotate 0.5s ease-in-out both'};
`
);

export const InnerWrapper = styled.div`
  min-height: 390px;
  width: auto;
`;
