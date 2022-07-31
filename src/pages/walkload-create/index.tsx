import { Gnb } from '~/components/gnb';
import { Drawer } from '~/components/drawer';
import { BottomSheet } from '~/components/bottom-sheet';
import Map from '~/components/map';
import { ReactComponent as LogoWhiteIcon } from '~/assets/icons/logo-small-white.svg';
import { ReactComponent as MarkerIcon } from '~/assets/icons/icon-marker.svg';
import { ReactComponent as LineIcon } from '~/assets/icons/icon-line.svg';
import { ReactComponent as KakaoMarkerIcon } from '~/assets/icons/icon-kakao-marker.svg';

import DesktopWrapper from '~/components/desktop-wrapper';
import MobileWrapper from '~/components/mobile-wrapper';
import {
  CreateOuterWrapper,
  CreateTitle,
  CreateWrapper,
  CurrentLocationWrapper,
  EnrollTitle,
  HeaderWrapper,
  HowtoTitle,
  InfoButton,
  InfoDescription,
  InfoWrapper,
  LocationWrapper,
  LogoTitleWrapper,
  LogoWrapper,
  MenuItem,
  MenuItemWrapper,
  ResetTitle,
  SearchInput,
  SearchInputWrapper,
} from './walkload-create.styled';
import { useCallback, useState } from 'react';
import InputLabel from '~/components/input-label';
import { Footer } from '~/components/footer';

const WalkloadCreatePage = () => {
  const [address, setAddress] = useState('');
  const [openCreate, setOpenCreate] = useState(true);
  const [openHowTo, setOpenHowTo] = useState(true);

  const handleOpenCreate = useCallback(() => {
    setOpenCreate((prev) => !prev);
  }, []);

  const handleOpenHowTo = useCallback(() => {
    setOpenHowTo((prev) => !prev);
  }, []);

  return (
    <>
      <Gnb bgColor={'#ffffffbf'} shadow />
      <Map />

      <DesktopWrapper>
        <Drawer>
          {/* 헤더 시작 */}
          <HeaderWrapper>
            <LogoWrapper>
              <LogoWhiteIcon />
              <LogoTitleWrapper>{'산책로 등록하기'}</LogoTitleWrapper>
            </LogoWrapper>

            <LocationWrapper>
              <SearchInputWrapper>
                <SearchInput
                  placeholder={'주소를 입력해주세요! ex) 신림로 1'}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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

            {/* state에 따라 토글 */}
            {/* HOW TO 컴포넌트 */}
            {openHowTo && (
              <>
                <HowtoTitle>{'* 마커와 선을 이용해 지도 위에 경로를 표시합니다.'}</HowtoTitle>
                <InfoWrapper>
                  <InfoButton>{'마커'}</InfoButton>
                  <KakaoMarkerIcon />
                  <InfoDescription>
                    {
                      '마커를 이용해 특이한 스팟을 찍어주세요! 클릭하면 핀이 추가되고 설명을 입력할 수 있습니다.'
                    }
                  </InfoDescription>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoButton>{'선'}</InfoButton>
                  <LineIcon />
                  <InfoDescription>
                    {'선을 이용해 경로를 표시해주세요! 클릭하여 선 그리기를 시작합니다.'}
                  </InfoDescription>
                </InfoWrapper>
              </>
            )}
            {/* 여기까지 HOW TO 컴포넌트 */}
          </HeaderWrapper>
          {/* 여기까지 헤더 */}

          {openCreate && (
            <>
              {/* 작성하기 컴포넌트 */}
              <CreateOuterWrapper>
                <CreateWrapper>
                  <ResetTitle>{'리셋'}</ResetTitle>
                  <CreateTitle>{'신규 산책로 추가'}</CreateTitle>
                  <EnrollTitle>{'등록하기'}</EnrollTitle>
                </CreateWrapper>
                <InputLabel
                  type={'text'}
                  labelText={'* 산책로 이름'}
                  placeholder={'산책로의 특징을 담은 이름을 입력해주세요.'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                />
                <InputLabel
                  type={'text'}
                  labelText={'* 산책로 설명'}
                  placeholder={'해당 산책로의 특징을 소개해주세요.'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                  margin={'16px'}
                />
                <InputLabel
                  type={'text'}
                  labelText={'* 시작위치'}
                  placeholder={'출발위치를 입력해주세요. ex) 낙성대역 1번출구'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                  margin={'16px'}
                />
                <InputLabel
                  type={'text'}
                  labelText={'* 도착위치'}
                  placeholder={'도착위치를 입력해주세요. ex) 서울대학교 정문 앞'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                  margin={'16px'}
                />
                <InputLabel
                  type={'text'}
                  labelText={'산책로 TMI'}
                  placeholder={'해당 산책로의 TMI를 알려주세요!'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                  margin={'16px'}
                />
              </CreateOuterWrapper>
              {/* 여기까지 작성하기 컴포넌트 */}
            </>
          )}
          {/* 작성하기 컴포넌트 */}
          <Footer />
        </Drawer>
      </DesktopWrapper>

      <MobileWrapper>
        <BottomSheet arrowIconColorWhite bgColor="#00C471">
          {/* 헤더 시작 */}
          <HeaderWrapper>
            <LogoWrapper>
              <LogoWhiteIcon />
              <LogoTitleWrapper>{'산책로 등록하기'}</LogoTitleWrapper>
            </LogoWrapper>

            <LocationWrapper>
              <SearchInputWrapper>
                <SearchInput
                  placeholder={'주소를 입력해주세요! ex) 신림로 1'}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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

            {/* state에 따라 토글 */}
            {/* HOW TO 컴포넌트 */}
            {openHowTo && (
              <>
                <HowtoTitle>{'* 마커와 선을 이용해 지도 위에 경로를 표시합니다.'}</HowtoTitle>
                <InfoWrapper>
                  <InfoButton>{'마커'}</InfoButton>
                  <MarkerIcon />
                  <InfoDescription>
                    {
                      '마커를 이용해 특이한 스팟을 찍어주세요! 클릭하면 핀이 추가되고 설명을 입력할 수 있습니다.'
                    }
                  </InfoDescription>
                </InfoWrapper>
                <InfoWrapper>
                  <InfoButton>{'선'}</InfoButton>
                  <LineIcon />
                  <InfoDescription>
                    {'선을 이용해 경로를 표시해주세요! 클릭하여 선 그리기를 시작합니다.'}
                  </InfoDescription>
                </InfoWrapper>
              </>
            )}
            {/* 여기까지 HOW TO 컴포넌트 */}
          </HeaderWrapper>
          {/* 여기까지 헤더 */}

          {openCreate && (
            <>
              {/* 작성하기 컴포넌트 */}
              <CreateOuterWrapper>
                <CreateWrapper>
                  <ResetTitle>{'리셋'}</ResetTitle>
                  <CreateTitle>{'신규 산책로 추가'}</CreateTitle>
                  <EnrollTitle>{'등록하기'}</EnrollTitle>
                </CreateWrapper>
                <InputLabel
                  type={'text'}
                  labelText={'* 산책로 이름'}
                  placeholder={'산책로의 특징을 담은 이름을 입력해주세요.'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                />
                <InputLabel
                  type={'text'}
                  labelText={'* 산책로 설명'}
                  placeholder={'해당 산책로의 특징을 소개해주세요.'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                  margin={'16px'}
                />
                <InputLabel
                  type={'text'}
                  labelText={'* 시작위치'}
                  placeholder={'출발위치를 입력해주세요. ex) 낙성대역 1번출구'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                  margin={'16px'}
                />
                <InputLabel
                  type={'text'}
                  labelText={'* 도착위치'}
                  placeholder={'도착위치를 입력해주세요. ex) 서울대학교 정문 앞'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                  margin={'16px'}
                />
                <InputLabel
                  type={'text'}
                  labelText={'산책로 TMI'}
                  placeholder={'해당 산책로의 TMI를 알려주세요!'}
                  onChange={(e) => setAddress(e.target.value)}
                  bgColor={'#fff'}
                  margin={'16px'}
                />
              </CreateOuterWrapper>
              {/* 여기까지 작성하기 컴포넌트 */}
            </>
          )}
          <Footer />
        </BottomSheet>
      </MobileWrapper>
    </>
  );
};

export default WalkloadCreatePage;
