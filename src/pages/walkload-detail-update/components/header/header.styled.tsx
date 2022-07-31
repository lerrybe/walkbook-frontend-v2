import styled from '@emotion/styled';

export const Wrapper = styled.div`
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

export const LogoTitle = styled.div`
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
