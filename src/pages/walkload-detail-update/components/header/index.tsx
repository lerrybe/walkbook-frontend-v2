import { useCallback, useState } from 'react';

import HowToUpdate from '../how-to-update';

import { ReactComponent as MarkerIcon } from '~/assets/icons/icon-marker.svg';
import { ReactComponent as LogoWhiteIcon } from '~/assets/icons/logo-small-white.svg';

import {
  Wrapper,
  LogoWrapper,
  LogoTitle,
  LocationWrapper,
  SearchInputWrapper,
  SearchInput,
  CurrentLocationWrapper,
  MenuItemWrapper,
  MenuItem,
} from './header.styled';

interface HeaderProps {
  address?: string;
  openUpdate?: boolean;
  handleOpenUpdate?: () => void;
  handleChangeAddress?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ address, openUpdate, handleOpenUpdate, handleChangeAddress }: HeaderProps) => {
  const [openHowTo, setOpenHowTo] = useState(true);

  const handleOpenHowTo = useCallback(() => {
    setOpenHowTo((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoWhiteIcon />
        <LogoTitle>{'산책로 수정하기'}</LogoTitle>
      </LogoWrapper>

      <LocationWrapper>
        <SearchInputWrapper>
          <SearchInput
            placeholder={'주소를 입력해주세요! ex) 신림로 1'}
            value={address}
            onChange={handleChangeAddress}
          />
        </SearchInputWrapper>

        <CurrentLocationWrapper>
          <MarkerIcon />
        </CurrentLocationWrapper>
      </LocationWrapper>

      <MenuItemWrapper>
        <MenuItem onClick={handleOpenHowTo} active={openHowTo}>
          {'HOW TO ▾'}
        </MenuItem>
        <MenuItem onClick={handleOpenUpdate} active={openUpdate}>
          {'수정하기 ▾'}
        </MenuItem>
      </MenuItemWrapper>

      {openHowTo && <HowToUpdate />}
    </Wrapper>
  );
};

export default Header;
