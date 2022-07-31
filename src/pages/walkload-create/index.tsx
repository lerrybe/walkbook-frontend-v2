import { useCallback, useState } from 'react';

import { Gnb } from '~/components/gnb';
import { Drawer } from '~/components/drawer';
import { BottomSheet } from '~/components/bottom-sheet';
import Header from './components/header';
import Create from './components/create';
import { Footer } from '~/components/footer';
import Map from '~/components/map';

import DesktopWrapper from '~/components/desktop-wrapper';
import MobileWrapper from '~/components/mobile-wrapper';

const WalkloadCreatePage = () => {
  const [address, setAddress] = useState<string>('');
  const [openCreate, setOpenCreate] = useState<boolean>(true);

  const handleOpenCreate = useCallback(() => {
    setOpenCreate((prev) => !prev);
  }, []);

  const handleChangeAddress = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  }, []);

  return (
    <>
      <Gnb bgcolor={'#ffffffbf'} shadow />
      <Map />

      <DesktopWrapper>
        <Drawer>
          <Header
            address={address}
            openCreate={openCreate}
            handleOpenCreate={handleOpenCreate}
            handleChangeAddress={handleChangeAddress}
          />
          {openCreate && <Create />}
          <Footer />
        </Drawer>
      </DesktopWrapper>

      <MobileWrapper>
        <BottomSheet arrowIconColorWhite bgcolor="#00C471">
          <Header
            address={address}
            openCreate={openCreate}
            handleOpenCreate={handleOpenCreate}
            handleChangeAddress={handleChangeAddress}
          />
          {openCreate && <Create />}
          <Footer />
        </BottomSheet>
      </MobileWrapper>
    </>
  );
};

export default WalkloadCreatePage;
