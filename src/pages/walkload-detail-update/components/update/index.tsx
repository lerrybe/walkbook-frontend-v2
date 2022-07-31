import InputLabel from '~/components/input-label';
import { Wrapper, UpdateTitle, TitleWrapper, EnrollTitle, ResetTitle } from './update.styled';

const Update = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <ResetTitle>{'초기화'}</ResetTitle>
        <UpdateTitle>{'산책로 수정하기'}</UpdateTitle>
        <EnrollTitle>{'등록하기'}</EnrollTitle>
      </TitleWrapper>
      <InputLabel
        type={'text'}
        labelText={'* 산책로 이름'}
        placeholder={'산책로의 특징을 담은 이름을 입력해주세요.'}
        onChange={() => console.log('test')}
        bgColor={'#fff'}
      />
      <InputLabel
        type={'text'}
        labelText={'* 산책로 설명'}
        placeholder={'해당 산책로의 특징을 소개해주세요.'}
        onChange={() => console.log('test')}
        bgColor={'#fff'}
        margin={'16px'}
      />
      <InputLabel
        type={'text'}
        labelText={'* 시작위치'}
        placeholder={'출발위치를 입력해주세요. ex) 낙성대역 1번출구'}
        onChange={() => console.log('test')}
        bgColor={'#fff'}
        margin={'16px'}
      />
      <InputLabel
        type={'text'}
        labelText={'* 도착위치'}
        placeholder={'도착위치를 입력해주세요. ex) 서울대학교 정문 앞'}
        onChange={() => console.log('test')}
        bgColor={'#fff'}
        margin={'16px'}
      />
      <InputLabel
        type={'text'}
        labelText={'산책로 TMI'}
        placeholder={'해당 산책로의 TMI를 알려주세요!'}
        onChange={() => console.log('test')}
        bgColor={'#fff'}
        margin={'16px'}
      />
    </Wrapper>
  );
};

export default Update;
