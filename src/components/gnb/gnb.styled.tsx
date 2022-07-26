import styled from '@emotion/styled';

interface IWrapperProps {
  shadow?: boolean;
}

export const Wrapper = styled.div<IWrapperProps>(
  ({ shadow }) => `
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  ${shadow && 'box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.1)'};
`
);

export const LogoWrapper = styled.div`
  cursor: pointer;
`;

export const MenuItemWrapper = styled.div`
  width: auto;
  display: flex;
  align-items: center;
`;

export const MenuItemText = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #585858;
  margin-right: 32px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    color: #00c471;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-right: 12px;
  &:last-child {
    margin-right: 0px;
  }
`;
