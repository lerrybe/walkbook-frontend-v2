import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '~/assets/icons/icon-close.svg';
import { ReactComponent as LogoMedium } from '~/assets/icons/logo-medium.svg';

import { signIn } from '~/api/api-auth';
import InputLabel from '~/components/input-label';
import { ButtonLight } from '~/components/button-light';
import { AnnounceModal } from '~/components/announce-modal';

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

  const [modalText, setModalText] = useState<SigninResponse>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

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

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleSubmitSignIn = useCallback((username: string, password: string) => {
    // REFACTOR: 그냥 valid~로 체크 가능?
    // 처음에 true라 공백 걸러줘야함. -> 공백에 넣는건? 좋다.
    if (!username.trim()) {
      setValidReqUsername(false);
      return;
    }
    if (!password.trim()) {
      setValidReqPassword(false);
      return;
    }

    (async () => {
      const signInResult: SigninResponse = await signIn({
        username: username,
        password: password,
      });

      if (signInResult === 200) {
        navigate('/');
      } else {
        setModalText(signInResult);
        setModalVisible(true);
        return;
      }
    })();
  }, []);

  return (
    <OuterWrapper>
      {modalVisible && (
        <AnnounceModal text={modalText}>
          <ButtonLight text={'확인'} radius={12} onClick={handleCloseModal} />
        </AnnounceModal>
      )}

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
