import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '~/assets/icons/icon-close.svg';
import { ReactComponent as LogoMedium } from '~/assets/icons/logo-medium.svg';

import { signIn } from '~/api/api-auth';
import InputLabel from '~/components/input-label';
import { ButtonLight } from '~/components/button-light';

import { SigninResponse } from '~/types/auth';

import {
  ButtonWrapper,
  CloseIconWrapper,
  LandingNavigate,
  LogoWrapper,
  OuterWrapper,
  SignUpNavigate,
  SubTitleWrapper,
  WarningWrapper,
  Wrapper,
} from './sign-in.styled';

const SignInPage = () => {
  // state 관련 리팩토링
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [validReqUsername, setValidReqUsername] = useState<boolean>(true);
  const [validReqPassword, setValidReqPassword] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleChangeUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
      setValidReqUsername(true);
      if (!e.target.value.trim()) setValidReqUsername(false);
    },
    [username]
  );

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setValidReqPassword(true);
      if (!e.target.value.trim()) setValidReqPassword(false);
    },
    [password]
  );

  const handleSubmitSignIn = useCallback((username: string, password: string) => {
    if (!username.trim() || !password.trim()) {
      setValidReqUsername(false);
      setValidReqPassword(false);
      return;
    }

    (async () => {
      const signInResult: SigninResponse = await signIn({
        username: username,
        password: password,
      });

      if (signInResult === 200) {
        console.log('환영 모달');
        navigate('/');
      } else {
        // 모달에 메시지 담아서 띄워주기
        alert(signInResult);
      }
    })();
  }, []);

  return (
    <OuterWrapper>
      <Wrapper>
        <LogoWrapper>
          <CloseIconWrapper onClick={() => navigate('/')}>
            <CloseIcon />
          </CloseIconWrapper>
          <LogoMedium />
          <SubTitleWrapper>{'워크북에 참여해 나만의 산책로를 등록해보세요!'}</SubTitleWrapper>
        </LogoWrapper>

        <InputLabel
          type={'text'}
          labelText={'username'}
          placeholder={'아이디를 입력해 주세요.'}
          value={username}
          onChange={handleChangeUsername}
        />
        {!validReqUsername && (
          <WarningWrapper>{'* 올바른 아이디(유저네임)를 입력해 주세요.'}</WarningWrapper>
        )}

        <InputLabel
          type={'password'}
          labelText={'password'}
          placeholder={'비밀번호를 입력해 주세요.'}
          value={password}
          margin={'20px'}
          onChange={handleChangePassword}
        />
        {!validReqPassword && (
          <WarningWrapper>{'* 올바른 비밀번호를 입력해 주세요.'}</WarningWrapper>
        )}

        <SignUpNavigate onClick={() => navigate('/signup')}>
          {'처음 오셨나요? 회원가입 하러가기'}
        </SignUpNavigate>
        <LandingNavigate onClick={() => navigate('/')}>{'홈으로 가기'}</LandingNavigate>

        <ButtonWrapper>
          <ButtonLight
            text={'LOG IN'}
            width={'100%'}
            height={'50px'}
            onClick={() => handleSubmitSignIn(username, password)}
          />
        </ButtonWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

export default SignInPage;
