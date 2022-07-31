import { useNavigate } from 'react-router-dom';

import MarkerLargeImagePng from '~/assets/images/marker-large.png';
import LandingBgLargeImagePng from '~/assets/images/landing-bg-large.png';

import { Gnb } from '~/components/gnb';
import { Button } from '~/components/button';

import {
  ButtonWrapper,
  DescriptionWrapper,
  LandingBgLargeImage,
  LandingBgLargeImageWrapper,
  MarkerLargeImage,
  TextEmphasis,
  TextNormal,
  TextWrapper,
  TitleWrapper,
  Wrapper,
} from './main.styled';

const MainPage = () => {
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
            <TitleWrapper>
              <TextNormal>{'함께 길을 읽다, '}</TextNormal>
              <TextEmphasis>{'워크북'}</TextEmphasis>
            </TitleWrapper>
            <TextNormal>{'우리동네 산책로를 알아보고,'}</TextNormal>
            <TextNormal>{'추천 산책로를 등록해보세요.'}</TextNormal>
          </TextWrapper>
          <ButtonWrapper>
            <Button
              width={'240px'}
              height={'66px'}
              radius={40}
              text={'지금 시작하기'}
              fontSize={20}
              onClick={() => navigate('/create')}
            />
          </ButtonWrapper>
        </DescriptionWrapper>
      </Wrapper>
    </>
  );
};

export default MainPage;
