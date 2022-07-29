import styled from '@emotion/styled';

export const OuterWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Wrapper = styled.div`
  background-color: #fff;
  height: 100vh;
  min-width: 360px;
  position: relative;
  overflow: auto;

  @media (min-width: 712px) {
    padding: 50px 50px 45px 50px;
    width: 456px;
    height: auto;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: auto;
  }

  @media (max-width: 711px) {
    width: 100%;
    padding: 50px 24px 45px;
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

export const DuplicateWarningWrapper = styled.div`
  margin: 5px;
  font-size: 12px;
  color: #ffc800;
`;

export const LandingNavigate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.33);
  text-decoration-line: underline;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;

export const CheckButtonWrapper = styled.div`
  margin-left: 6px;
  height: 50px;
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 16px;
`;
