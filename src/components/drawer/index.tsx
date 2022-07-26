import { ReactNode, useState } from 'react';
import { Button, DesktopContainer, DesktopInnerWrapper, DesktopWrapper } from './drawer.styled';

interface IDrawerProps {
  children?: ReactNode;
}
export const Drawer = ({ children }: IDrawerProps) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Button onClick={() => setActive((prev) => !prev)}>토글버튼</Button>
      <DesktopWrapper>
        <DesktopContainer
          bgColor={'#000011'}
          initial={active ? 'open' : 'close'}
          animate={active ? 'open' : 'close'}
          variants={{ open: { width: '390px' }, close: { width: 0 } }}
          transition={{
            type: 'spring',
            damping: 70,
            stiffness: 500,
          }}
        >
          <DesktopInnerWrapper>{children}</DesktopInnerWrapper>
        </DesktopContainer>
      </DesktopWrapper>
    </>
  );
};
