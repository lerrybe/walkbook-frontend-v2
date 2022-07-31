import { useCallback, useState } from 'react';

import HowToCreate from '../how-to-create';

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
  openCreate?: boolean;
  handleOpenCreate?: () => void;
  handleChangeAddress?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header = ({ address, openCreate, handleOpenCreate, handleChangeAddress }: HeaderProps) => {
  const [openHowTo, setOpenHowTo] = useState(true);

  const handleOpenHowTo = useCallback(() => {
    setOpenHowTo((prev) => !prev);
  }, []);

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoWhiteIcon />
        <LogoTitle>{'산책로 등록하기'}</LogoTitle>
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
        <MenuItem onClick={handleOpenCreate} active={openCreate}>
          {'작성하기 ▾'}
        </MenuItem>
      </MenuItemWrapper>

      {openHowTo && <HowToCreate />}
    </Wrapper>
  );
};

export default Header;
