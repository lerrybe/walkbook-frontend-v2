import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  max-height: 70vh;
  min-width: 360px;
  display: flex;
  justify-content: flex-start;
  z-index: 1000;
  overflow: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  bgcolor?: string;
}

export const Container = styled(motion.div)<ContainerProps>(
  ({ bgcolor }) => `
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 -4px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: auto;
  border-radius: 40px 40px 0 0;
  position: relative;
  ${bgcolor && `background-color: ${bgcolor}`};
`
);

interface ToggleWrapperProps extends HTMLAttributes<HTMLDivElement> {
  bgcolor?: string;
}

export const ToggleWrapper = styled.div<ToggleWrapperProps>(
  ({ bgcolor }) => `
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 5px 0 30px;
  ${bgcolor && `background-color: ${bgcolor}`};

  position: fixed;
  border-radius: 40px 40px 0 0;
`
);

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
  overflow: auto;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
