import { useNavigate } from 'react-router-dom';

import { Gnb } from '~/components/gnb';
import { Button } from '~/components/button';

import MarkerLargeImagePng from '~/assets/images/marker-large.png';
import LandingBgLargeImagePng from '~/assets/images/landing-bg-large.png';

import {
  ButtonWrapper,
  DescriptionWrapper,
  LandingBgLargeImage,
  LandingBgLargeImageWrapper,
  MarkerLargeImage,
  TextNormal,
  TextWrapper,
  Wrapper,
} from './error.styled';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Gnb />
      <Wrapper>
        <LandingBgLargeImageWrapper>
          <LandingBgLargeImage src={LandingBgLargeImagePng} />
          <MarkerLargeImage src={MarkerLargeImagePng} />
        </LandingBgLargeImageWrapper>

        <DescriptionWrapper>
          <TextWrapper>
            <TextNormal>{'😢 잘못된 접근입니다.'}</TextNormal>
          </TextWrapper>
          <ButtonWrapper>
            <Button
              width={'230px'}
              height={'66px'}
              radius={40}
              text={'홈으로 돌아가기'}
              fontSize={20}
              onClick={() => navigate('/')}
            />
          </ButtonWrapper>
        </DescriptionWrapper>
      </Wrapper>
    </>
  );
};

export default ErrorPage;
