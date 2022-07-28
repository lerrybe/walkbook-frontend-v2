import styled from '@emotion/styled';

export const OuterWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  height: 100vh;
  min-width: 360px;
  position: relative;

  @media (min-width: 712px) {
    padding: 76px 50px 0 50px;
    width: 456px;
    height: 610px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: auto;
  }

  @media (max-width: 711px) {
    width: 100%;
    padding: 65px 24px 0;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const SubTitleWrapper = styled.div`
  width: auto;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.33);
  margin: 24px 0 40px 0;
`;

export const WarningWrapper = styled.div`
  margin: 5px;
  font-size: 12px;
  color: #ff5454;
`;

export const SignUpNavigate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.33);
  text-decoration-line: underline;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const LandingNavigate = styled(SignUpNavigate)`
  margin-top: 5px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
`;
