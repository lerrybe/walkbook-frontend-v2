import { Gnb } from '~/components/gnb';
import { Drawer } from '~/components/drawer';
import { BottomSheet } from '~/components/bottom-sheet';
import Map from '~/components/map';

import DesktopWrapper from '~/components/desktop-wrapper';
import MobileWrapper from '~/components/mobile-wrapper';

const WalkloadCreatePage = () => {
  return (
    <>
      <Gnb bgColor={'#ffffffbf'} shadow />
      <Map />

      <DesktopWrapper>
        <Drawer></Drawer>
      </DesktopWrapper>

      <MobileWrapper>
        <BottomSheet arrowIconColorWhite bgColor="#00C471">
          bottom sheet
        </BottomSheet>
      </MobileWrapper>
    </>
  );
};

export default WalkloadCreatePage;
