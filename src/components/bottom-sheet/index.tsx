import { ReactNode } from 'react';
import { useBottomSheet } from '~/hooks/useBottomSheet';
import { ReactComponent as CaretUpIcon } from '~/assets/icons/icon-caret-up.svg';

import {
  Container,
  InnerWrapper,
  ToggleIconWrapper,
  ToggleWrapper,
  Wrapper,
} from './bottom-sheet.styled';

interface IBottomSheetProps {
  children?: ReactNode;
}
export const BottomSheet = ({ children }: IBottomSheetProps) => {
  const { active, handleToggleBottomSheet } = useBottomSheet();

  return (
    <>
      <Wrapper>
        <Container
          initial={active ? 'open' : 'close'}
          animate={active ? 'open' : 'close'}
          variants={{ open: { height: 'auto' }, close: { height: '50px' } }}
          transition={{
            type: 'spring',
            damping: 70,
            stiffness: 500,
          }}
        >
          <ToggleWrapper onClick={handleToggleBottomSheet}>
            <ToggleIconWrapper active={active}>
              <CaretUpIcon />
            </ToggleIconWrapper>
          </ToggleWrapper>

          <InnerWrapper>{children}</InnerWrapper>
        </Container>
      </Wrapper>
    </>
  );
};
