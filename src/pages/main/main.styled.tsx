import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1055px) {
    flex-direction: column;
    position: relative;
    z-index: 997;
  }
`;

export const LandingBgLargeImageWrapper = styled.div`
  position: relative;
  width: 700px;
  height: 497px;
  display: flex;

  @media (max-width: 1055px) {
    width: 350px;
    height: auto;
  }
`;

export const LandingBgLargeImage = styled.img``;

export const MarkerLargeImage = styled.img`
  width: 196px;
  height: auto;
  position: absolute;
  top: 80px;
  left: 290px;
  animation: motion 0.5s linear 0s infinite alternate;

  @keyframes motion {
    0% {
      margin-top: -16px;
    }
    100% {
      margin-top: 0px;
    }
  }

  @media (max-width: 1055px) {
    width: 120px;
    height: auto;
    top: 5px;
    left: 140px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 60px 40px 28px;

  @media (max-width: 1055px) {
    margin: 40px 0 0 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: end;
  margin-bottom: 32px;

  @media (max-width: 1055px) {
    justify-content: center;
    align-items: center;
  }
`;

export const TextEmphasis = styled.span`
  font-size: 36px;
  color: #27a35e;
  font-weight: 700;
  margin-left: 10px;

  @media (max-width: 1055px) {
    font-size: 24px;
  }
`;

export const TextNormal = styled.span`
  font-size: 28px;
  color: #000;
  font-weight: 600;
  text-align: end;
  margin-top: 3px;

  @media (max-width: 1055px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 56px;

  @media (max-width: 1055px) {
    margin-top: 40px;
  }
`;
