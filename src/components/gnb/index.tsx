import { useNavigate } from 'react-router-dom';

import { Button } from '../button';
import { ButtonWrapper, LogoWrapper, MenuItemText, MenuItemWrapper, Wrapper } from './gnb.styled';
import { ReactComponent as LogoLarge } from '~/assets/icons/logo-large.svg';
import { useState } from 'react';

interface IGnbProps {
  shadow?: boolean;
}
export const Gnb = ({ shadow }: IGnbProps) => {
  const navigate = useNavigate();
  const [token] = useState('sampleToken');

  return (
    <>
      <Wrapper shadow={shadow}>
        <LogoWrapper onClick={() => navigate('/')}>
          <LogoLarge />
        </LogoWrapper>
        <MenuItemWrapper>
          <MenuItemText onClick={() => navigate('/')}>{'About'}</MenuItemText>
          <MenuItemText onClick={() => navigate('/')}>{'Map'}</MenuItemText>
          <MenuItemText onClick={() => navigate('/')}>{'Cards'}</MenuItemText>
          {token && <MenuItemText onClick={() => navigate('/')}>{'Walkbook'}</MenuItemText>}
          <ButtonWrapper>
            <Button text={'산책로 등록하기'} />
          </ButtonWrapper>
          {token && (
            <ButtonWrapper>
              <Button text={'로그아웃'} />
            </ButtonWrapper>
          )}
        </MenuItemWrapper>
      </Wrapper>
    </>
  );
};
