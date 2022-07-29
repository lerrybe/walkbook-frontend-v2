import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as CloseIcon } from '~/assets/icons/icon-close.svg';
import { ReactComponent as LogoMedium } from '~/assets/icons/logo-medium.svg';

import InputLabel from '~/components/input-label';
import { ButtonLight } from '~/components/button-light';
import { AnnounceModal } from '~/components/announce-modal';

import {
  ButtonWrapper,
  CheckButtonWrapper,
  CloseIconWrapper,
  DuplicateWarningWrapper,
  LandingNavigate,
  LogoWrapper,
  OuterWrapper,
  SubTitleWrapper,
  WarningWrapper,
  Wrapper,
} from './sign-up.styled';

const SignUpPage = () => {
  // state 관련 리팩토링
  // 리팩토링 쉽게 함수별 분리 잘하기
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [introduction, setIntroduction] = useState<string>('');

  const [modalText] = useState('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  // 처음에 true라 제출에서 걸러줘야 함.
  const [validReqUsername, setValidReqUsername] = useState<boolean>(true);
  const [validReqPassword, setValidReqPassword] = useState<boolean>(true);
  const [validReqPasswordConfirm, setValidReqPasswordConfirm] = useState<boolean>(true);
  const [validReqNickname, setValidReqNickname] = useState<boolean>(true);

  const [duplicatedUsername, setDuplicatedUsername] = useState(false);
  const [duplicatedNickname, setDuplicatedNickname] = useState(false);

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

  // 이 부분 조정, 리렌더링 문제
  const handleChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordConfirm(e.target.value);
      if (password !== passwordConfirm) setValidReqPasswordConfirm(false);
      if (password === passwordConfirm) setValidReqPasswordConfirm(true);
    },
    [passwordConfirm]
  );

  const handleChangeNickname = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNickname(e.target.value);
      setValidReqNickname(true);
      if (!e.target.value.trim()) setValidReqNickname(false);
    },
    [nickname]
  );

  const handleChangeIntroduction = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIntroduction(e.target.value);
    },
    [introduction]
  );

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const handleCheckDuplicatedUsername = useCallback(() => {
    setDuplicatedUsername((prev) => !prev);
    console.log('유저네임 중복체크');
  }, []);

  const handleCheckDuplicatedNickname = useCallback(() => {
    setDuplicatedNickname((prev) => !prev);
    console.log('닉네임 중복체크');
  }, []);

  const handleSubmitSignUp = useCallback(
    (username: string, password: string, passwordConfirm: string, nickname: string) => {
      if (!username.trim()) {
        setValidReqUsername(false);
        return;
      }
      if (!password.trim()) {
        setValidReqPassword(false);
        return;
      }
      if (!passwordConfirm.trim()) {
        setValidReqPasswordConfirm(false);
        return;
      }
      if (!nickname.trim()) {
        setValidReqNickname(false);
        return;
      }
      // 여기서 걸리나?
      if (!validReqUsername || !validReqPassword || !validReqPasswordConfirm || !validReqNickname) {
        return;
      }
      console.log('회원가입 성공');
    },
    []
  );

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
          <SubTitleWrapper>{'회원가입을 통해 나만의 워크북을 시작해 보세요.'}</SubTitleWrapper>
        </LogoWrapper>

        <InputLabel
          type={'text'}
          labelText={'* username'}
          placeholder={'아이디를 입력해 주세요.'}
          value={username}
          onChange={handleChangeUsername}
        >
          <CheckButtonWrapper>
            <ButtonLight
              width={'62px'}
              height={'46px'}
              text={'중복확인'}
              fontSize={12}
              onClick={handleCheckDuplicatedUsername}
            />
          </CheckButtonWrapper>
        </InputLabel>
        {!validReqUsername && (
          <WarningWrapper>{'* 올바른 아이디(유저네임)를 입력해 주세요.'}</WarningWrapper>
        )}
        {duplicatedUsername && (
          <DuplicateWarningWrapper>{'* 중복된 아이디(유저네임)입니다.'}</DuplicateWarningWrapper>
        )}

        <InputLabel
          type={'password'}
          labelText={'* password'}
          placeholder={'비밀번호를 입력해 주세요.'}
          value={password}
          margin={'20px'}
          onChange={handleChangePassword}
        />
        {!validReqPassword && (
          <WarningWrapper>{'* 올바른 비밀번호를 입력해 주세요.'}</WarningWrapper>
        )}

        <InputLabel
          type={'password'}
          labelText={'* password confirmation'}
          placeholder={'비밀번호를 한 번 더 입력해 주세요.'}
          value={passwordConfirm}
          margin={'20px'}
          onChange={handleChangePasswordConfirm}
        />
        {!validReqPasswordConfirm && (
          <WarningWrapper>{'* 비밀번호가 일치하지 않습니다.'}</WarningWrapper>
        )}

        <InputLabel
          type={'text'}
          labelText={'* nickname'}
          placeholder={'닉네임을 입력해 주세요.'}
          value={nickname}
          margin={'20px'}
          onChange={handleChangeNickname}
        >
          <CheckButtonWrapper>
            <ButtonLight
              width={'62px'}
              height={'46px'}
              text={'중복확인'}
              fontSize={12}
              onClick={handleCheckDuplicatedNickname}
            />
          </CheckButtonWrapper>
        </InputLabel>
        {!validReqNickname && (
          <WarningWrapper>{'* 공백문자는 입력하실 수 없습니다.'}</WarningWrapper>
        )}
        {duplicatedNickname && (
          <DuplicateWarningWrapper>{'* 중복된 닉네임입니다.'}</DuplicateWarningWrapper>
        )}

        <InputLabel
          type={'text'}
          labelText={'introduction'}
          placeholder={'간단한 본인 소개를 부탁드립니다.'}
          value={introduction}
          margin={'20px'}
          onChange={handleChangeIntroduction}
        />

        <LandingNavigate onClick={() => navigate('/')}>{'홈으로 가기'}</LandingNavigate>

        <ButtonWrapper>
          <ButtonLight
            text={'SIGN UP'}
            width={'100%'}
            height={'50px'}
            onClick={() => handleSubmitSignUp(username, password, passwordConfirm, nickname)}
          />
        </ButtonWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

export default SignUpPage;
