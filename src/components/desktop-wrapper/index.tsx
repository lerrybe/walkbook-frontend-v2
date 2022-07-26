import { ReactNode } from 'react';
import { Wrapper } from './desktop-wrapper.styled';

interface IProps {
  children?: ReactNode;
}

const DesktopWrapper = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default DesktopWrapper;
