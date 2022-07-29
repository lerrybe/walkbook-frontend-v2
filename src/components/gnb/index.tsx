import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as LogoLargeIcon } from '~/assets/icons/logo-large.svg';
import { ReactComponent as LogoSmallIcon } from '~/assets/icons/logo-small.svg';
import { ReactComponent as MenuIcon } from '~/assets/icons/icon-menu.svg';

import { clearItem, loadItem } from '~/utils/storage';

import { Button } from '../button';
import {
  ButtonWrapper,
  DesktopWrapper,
  LogoWrapper,
  MenuIconWrapper,
  MenuItemText,
  MenuItemWrapper,
  MobileMenuItemWrapper,
  MobileWrapper,
  Wrapper,
} from './gnb.styled';

interface IGnbProps {
  shadow?: boolean;
  bgColor?: string;
}
export const Gnb = ({ shadow, bgColor }: IGnbProps) => {
  const navigate = useNavigate();
  const [token] = useState(loadItem('token'));
  const [active, setActive] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setActive((prev) => !prev);
  }, [active]);

  const handleClickLogout = useCallback(() => {
    clearItem('token');
    window.location.href = '/';
  }, [token]);

  return (
    <>
      <Wrapper shadow={shadow} bgColor={bgColor}>
        <DesktopWrapper>
          <LogoWrapper onClick={() => navigate('/')}>
            <LogoLargeIcon />
          </LogoWrapper>
          <MenuItemWrapper>
            <MenuItemText onClick={() => navigate('/')}>{'About'}</MenuItemText>
            <MenuItemText onClick={() => navigate('/')}>{'Map'}</MenuItemText>
            <MenuItemText onClick={() => navigate('/')}>{'Cards'}</MenuItemText>
            {token ? (
              <>
                <MenuItemText onClick={() => navigate('/')}>{'Walkbook'}</MenuItemText>
                <ButtonWrapper onClick={() => navigate('/')}>
                  <Button text={'산책로 등록하기'} />
                </ButtonWrapper>
                <ButtonWrapper onClick={handleClickLogout}>
                  <Button text={'로그아웃'} />
                </ButtonWrapper>
              </>
            ) : (
              <ButtonWrapper onClick={() => navigate('/signin')}>
                <Button text={'로그인 / 회원가입'} />
              </ButtonWrapper>
            )}
          </MenuItemWrapper>
        </DesktopWrapper>

        <MobileWrapper>
          <LogoWrapper onClick={() => navigate('/')}>
            <LogoSmallIcon />
          </LogoWrapper>
          <MenuIconWrapper>
            <MenuIcon onClick={handleToggleMenu} />
          </MenuIconWrapper>
          <MobileMenuItemWrapper
            initial={active ? 'open' : 'close'}
            animate={active ? 'open' : 'close'}
            variants={{ open: { height: 'auto' }, close: { height: 0 } }}
            transition={{
              type: 'ease-in-out',
            }}
          >
            <MenuItemText onClick={() => navigate('/')}>{'About'}</MenuItemText>
            <MenuItemText onClick={() => navigate('/')}>{'Map'}</MenuItemText>
            <MenuItemText onClick={() => navigate('/')}>{'Cards'}</MenuItemText>
            {token ? (
              <>
                <MenuItemText onClick={() => navigate('/')}>{'Walkbook'}</MenuItemText>
                <MenuItemText onClick={() => navigate('/')}>{'산책로 등록하기'}</MenuItemText>
                <MenuItemText onClick={handleClickLogout}>{'로그아웃'}</MenuItemText>
              </>
            ) : (
              <MenuItemText onClick={() => navigate('/signin')}>{'로그인 / 회원가입'}</MenuItemText>
            )}
          </MobileMenuItemWrapper>
        </MobileWrapper>
      </Wrapper>
    </>
  );
};
