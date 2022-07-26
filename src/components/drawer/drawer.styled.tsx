import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  z-index: 1000;
`;

export const Container = styled(motion.div)`
  width: 390px;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  min-width: 390px;
  height: auto;
  padding: 24px 20px;
`;

export const ToggleWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const ToggleInnerWrapper = styled.div`
  width: 28px;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
