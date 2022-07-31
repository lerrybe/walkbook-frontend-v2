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
  bgColor?: string;
}
export const BottomSheet = ({ children, arrowIconColorWhite, bgColor }: IBottomSheetProps) => {
  const { active, handleToggleBottomSheet } = useBottomSheet();

  return (
    <>
      <Wrapper>
        <Container
          bgColor={bgColor || '#fff'}
          initial={active ? 'open' : 'close'}
          animate={active ? 'open' : 'close'}
          variants={{ open: { height: 'auto' }, close: { height: '50px' } }}
          transition={{
            type: 'spring',
            damping: 70,
            stiffness: 500,
          }}
        >
          <ToggleWrapper onClick={handleToggleBottomSheet} bgColor={bgColor || '#fff'}>
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
