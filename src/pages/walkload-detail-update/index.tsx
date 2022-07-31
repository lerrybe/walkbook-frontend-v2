import { useCallback, useState } from 'react';

import { Gnb } from '~/components/gnb';
import { Drawer } from '~/components/drawer';
import { BottomSheet } from '~/components/bottom-sheet';
import Header from './components/header';
import Update from './components/update';
import { Footer } from '~/components/footer';
import Map from '~/components/map';

import DesktopWrapper from '~/components/desktop-wrapper';
import MobileWrapper from '~/components/mobile-wrapper';

const WalkloadDetailUpdate = () => {
  const [address, setAddress] = useState<string>('');
  const [openUpdate, setOpenUpdate] = useState<boolean>(true);

  const handleOpenUpdate = useCallback(() => {
    setOpenUpdate((prev) => !prev);
  }, []);

  const handleChangeAddress = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  }, []);

  return (
    <>
      <Gnb bgColor={'#ffffffbf'} shadow />
      <Map />

      <DesktopWrapper>
        <Drawer>
          <Header
            address={address}
            openUpdate={openUpdate}
            handleOpenUpdate={handleOpenUpdate}
            handleChangeAddress={handleChangeAddress}
          />
          {openUpdate && <Update />}
          <Footer />
        </Drawer>
      </DesktopWrapper>

      <MobileWrapper>
        <BottomSheet arrowIconColorWhite bgColor="#00C471">
          <Header
            address={address}
            openUpdate={openUpdate}
            handleOpenUpdate={handleOpenUpdate}
            handleChangeAddress={handleChangeAddress}
          />
          {openUpdate && <Update />}
          <Footer />
        </BottomSheet>
      </MobileWrapper>
    </>
  );
};

export default WalkloadDetailUpdate;
