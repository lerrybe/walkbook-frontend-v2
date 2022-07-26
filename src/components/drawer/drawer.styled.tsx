import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const DesktopWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  z-index: 1000;
`;

export const DesktopContainer = styled(motion.div)<{ bgColor: string }>`
  width: 390px;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ bgColor }) => `${bgColor}`};
  overflow: hidden;
`;

export const DesktopInnerWrapper = styled.div`
  min-width: 390px;
  height: auto;
  padding: 24px 20px;
`;

// TODO: toggle hook으로 만들 것
export const Button = styled.div`
  position: fixed;
  top: 0;
  right: 0;
`;
