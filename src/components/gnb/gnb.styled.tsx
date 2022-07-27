import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const DesktopWrapper = styled.div`
  @media (min-width: 1056px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 1055px) {
    display: none;
  }
`;

export const MobileWrapper = styled.div`
  @media (min-width: 1056px) {
    display: none;
  }
  @media (max-width: 1055px) {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

interface IWrapperProps {
  shadow?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>(
  ({ shadow }) => `
  width: 100%;
  min-width: 360px;
  height: 72px;
  display: flex;
  position: fixed;
  align-items: center;
  padding: 20px 40px;
  z-index: 1002;

  ${shadow && 'box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1)'};

  @media (max-width: 1055px) {
    padding: 24px;
  }
`
);

export const LogoWrapper = styled.div`
  cursor: pointer;
`;

export const MenuItemWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
`;

interface IProps {
  active?: boolean;
}

export const MobileMenuItemWrapper = styled(motion.div)<IProps>`
  flex-direction: column;
  position: absolute;
  top: calc(100% + 8px);
  right: 5px;
  background-color: #fff;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

export const MenuItemText = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #585858;
  margin-right: 32px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    color: #00c471;
  }

  @media (max-width: 1055px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 14px 30px;
    font-size: 16px;

    &:first-of-type {
      margin-top: 24px;
    }
    &:last-child {
      margin-bottom: 24px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 12px;
  &:last-child {
    margin-right: 0px;
  }
`;

export const MenuIconWrapper = styled.div`
  cursor: pointer;
`;
