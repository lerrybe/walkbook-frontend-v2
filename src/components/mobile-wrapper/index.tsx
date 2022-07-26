import { ReactNode } from 'react';
import { Wrapper } from './mobile-wrapper.styled';

interface IProps {
  children?: ReactNode;
}

const MobileWrapper = ({ children }: IProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MobileWrapper;
