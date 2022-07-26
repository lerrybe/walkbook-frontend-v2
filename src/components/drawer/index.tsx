import { ReactNode } from 'react';
import { useDrawer } from '~/hooks/useDrawer';
import { ReactComponent as ArrowRightIcon } from '~/assets/icons/icon-arrow-right.svg';

import {
  Container,
  InnerWrapper,
  ToggleIconWrapper,
  ToggleInnerWrapper,
  ToggleWrapper,
  Wrapper,
} from './drawer.styled';

interface IDrawerProps {
  children?: ReactNode;
}
export const Drawer = ({ children }: IDrawerProps) => {
  const { active, handleToggleDrawer } = useDrawer();

  return (
    <>
      <Wrapper>
        <Container
          initial={active ? 'open' : 'close'}
          animate={active ? 'open' : 'close'}
          variants={{ open: { width: '390px' }, close: { width: 0 } }}
          transition={{
            type: 'spring',
            damping: 70,
            stiffness: 500,
          }}
        >
          <InnerWrapper>{children}</InnerWrapper>
        </Container>

        <ToggleWrapper>
          <ToggleInnerWrapper onClick={handleToggleDrawer}>
            <ToggleIconWrapper active={active}>
              <ArrowRightIcon />
            </ToggleIconWrapper>
          </ToggleInnerWrapper>
        </ToggleWrapper>
      </Wrapper>
    </>
  );
};
