import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px 20px;
  max-height: 100vh;
  overflow-y: auto;
  background-color: #fff;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  height: 70px;
  align-items: center;
  padding: 40px 0;
`;

export const ResetTitle = styled.div`
  width: 75px;
  display: flex;
  justify-content: baseline;
  font-size: 15px;
  color: #00c471;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    color: #000;
  }
`;

export const EnrollTitle = styled.div`
  width: 75px;
  display: flex;
  justify-content: end;
  font-size: 15px;
  color: #00c471;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    color: #000;
  }
`;

export const CreateTitle = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
`;
