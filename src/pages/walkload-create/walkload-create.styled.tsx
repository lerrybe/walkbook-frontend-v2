import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 0 20px 20px 20px;
  margin-top: 60px;
  background-color: #00c471;

  @media (min-width: 712px) {
    padding: 30px 20px 25px 20px;
    margin-top: 0px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
`;

export const LogoTitleWrapper = styled.div`
  font-size: 14px;
  font-weight: 700;
  width: 100px;
  height: 32px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LocationWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

export const SearchInputWrapper = styled.div`
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 46px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border: none;
  border-radius: 5px;
  padding-left: 15px;
  font-weight: 400;
  font-size: 15px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a2a2a2;
  }
`;

export const CurrentLocationWrapper = styled.div`
  width: 46px;
  height: 46px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-out;
  border-radius: 5px;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background: #e6ffdd;
  }
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  margin-top: 18px;
`;

interface MenuItemProps {
  active?: boolean;
}

export const MenuItem = styled.div<MenuItemProps>(
  ({ active }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 13px;
  font-weight: 700;
  width: 76px;
  height: 40px;
  border-radius: 6px;
  margin-left: 8px;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:first-of-type {
    margin-left: 0px;
  }
  ${active && 'background: #00a760'};
`
);

export const CreateOuterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 40px 20px;
  max-height: 100vh;
  overflow-y: auto;
  background-color: #fff;
`;

export const CreateWrapper = styled.div`
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

export const HowtoTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin-top: 15px;
  color: #ffffff;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 58px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 10px;
  margin-top: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
`;

export const InfoButton = styled.div`
  width: 44px;
  height: 32px;
  color: white;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00c471;
  border-radius: 5px;
  margin-right: 11px;
`;

export const InfoDescription = styled.div`
  color: rgba(45, 45, 45, 0.8);
  font-weight: 400;
  font-size: 10.4px;
  line-height: 15px;
  letter-spacing: -0.015em;
  width: 200px;
  margin-left: 12px;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;
