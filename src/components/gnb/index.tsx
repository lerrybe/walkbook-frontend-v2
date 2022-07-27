import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as LogoLargeIcon } from '~/assets/icons/logo-large.svg';
import { ReactComponent as LogoSmallIcon } from '~/assets/icons/logo-small.svg';
import { ReactComponent as MenuIcon } from '~/assets/icons/icon-menu.svg';

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
}
export const Gnb = ({ shadow }: IGnbProps) => {
  const navigate = useNavigate();
  const [token] = useState('sampleToken');
  const [active, setActive] = useState(false);
  const handleToggleMenu = useCallback(() => {
    setActive((prev) => !prev);
  }, [active]);

  return (
    <>
      <Wrapper shadow={shadow}>
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
                <ButtonWrapper onClick={() => navigate('/')}>
                  <Button text={'로그아웃'} />
                </ButtonWrapper>
              </>
            ) : (
              <ButtonWrapper onClick={() => navigate('/')}>
                <Button text={'로그인 / 회원가입'} />
              </ButtonWrapper>
            )}
          </MenuItemWrapper>
        </DesktopWrapper>

        <MobileWrapper>
          <LogoWrapper>
            <LogoSmallIcon onClick={() => navigate('/')} />
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
                <MenuItemText onClick={() => navigate('/')}>{'로그아웃'}</MenuItemText>
              </>
            ) : (
              <MenuItemText onClick={() => navigate('/')}>{'로그인 / 회원가입'}</MenuItemText>
            )}
          </MobileMenuItemWrapper>
        </MobileWrapper>
      </Wrapper>
    </>
  );
};