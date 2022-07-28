import { ReactNode } from 'react';
import { ReactComponent as LogoSmall } from '~/assets/icons/logo-small.svg';
import { Dim } from '../dim';

import { InnerWrapper, Text, Wrapper } from './announce-modal.styled';

interface IAnnounceModalProps {
  children?: ReactNode;
  color?: string;
  text?: string | number;
}
export const AnnounceModal = ({ color, text, children }: IAnnounceModalProps) => {
  return (
    <Wrapper>
      <Dim />
      <InnerWrapper>
        <LogoSmall />
        <Text color={color || '#000'}>{text}</Text>
        {children}
      </InnerWrapper>
    </Wrapper>
  );
};
