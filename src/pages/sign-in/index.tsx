import { useCallback, useState } from 'react';
import { Button } from '~/components/button';

import { Gnb } from '~/components/gnb';
import InputLabel from '~/components/input-label';
import { ButtonWrapper, Wrapper } from './sign-in.styled';

const SignInPage = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
      console.log('함수진입');
    },
    [username]
  );

  const handleChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      console.log('함수진입22');
    },
    [password]
  );

  const handleSubmitSignIn = useCallback(() => {
    console.log('함수 진입TM');
  }, []);

  return (
    <>
      <Gnb />
      <Wrapper>
        <InputLabel
          type={'text'}
          labelText={'username'}
          placeholder={'아이디를 입력해 주세요.'}
          margin={'20px'}
          value={username}
          onChange={handleChangeUsername}
        />
        <InputLabel
          type={'password'}
          labelText={'password'}
          placeholder={'비밀번호를 입력해 주세요.'}
          value={password}
          onChange={handleChangePassword}
        />
        <ButtonWrapper>
          <Button text={'LOG IN'} width={'100%'} height={'50px'} onClick={handleSubmitSignIn} />
        </ButtonWrapper>
      </Wrapper>
    </>
  );
};

export default SignInPage;
