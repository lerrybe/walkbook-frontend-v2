import { ReactNode } from 'react';
import { useBottomSheet } from '~/hooks/useBottomSheet';

import { ReactComponent as CaretUpIconWhite } from '~/assets/icons/icon-caret-up-white.svg';
import { ReactComponent as CaretUpIconBlack } from '~/assets/icons/icon-caret-up-black.svg';

import {
  Container,
  InnerWrapper,
  ToggleIconWrapper,
  ToggleWrapper,
  Wrapper,
} from './bottom-sheet.styled';

interface IBottomSheetProps {
  children?: ReactNode;
  arrowIconColorWhite?: boolean;
  bgcolor?: string;
}

export const BottomSheet = ({ children, arrowIconColorWhite, bgcolor }: IBottomSheetProps) => {
  const { active, handleToggleBottomSheet } = useBottomSheet();

  return (
    <>
      <Wrapper>
        <Container
          bgcolor={bgcolor || '#fff'}
          initial={active ? 'open' : 'close'}
          animate={active ? 'open' : 'close'}
          variants={{ open: { height: 'auto' }, close: { height: '50px' } }}
          transition={{
            type: 'spring',
            damping: 70,
            stiffness: 500,
          }}
        >
          <ToggleWrapper onClick={handleToggleBottomSheet} bgcolor={bgcolor || '#fff'}>
            <ToggleIconWrapper active={active}>
              {arrowIconColorWhite ? <CaretUpIconWhite /> : <CaretUpIconBlack />}
            </ToggleIconWrapper>
          </ToggleWrapper>

          <InnerWrapper>{children}</InnerWrapper>
        </Container>
      </Wrapper>
    </>
  );
};
