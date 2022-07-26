import { BottomSheet } from '~/components/bottom-sheet';
import DesktopWrapper from '~/components/desktop-wrapper';
import { Drawer } from '~/components/drawer';
import { Gnb } from '~/components/gnb';
import MobileWrapper from '~/components/mobile-wrapper';

const WalkloadCreatePage = () => {
  return (
    <>
      <Gnb shadow />
      <DesktopWrapper>
        <Drawer></Drawer>
      </DesktopWrapper>

      <MobileWrapper>
        <BottomSheet>bottom sheet</BottomSheet>
      </MobileWrapper>
    </>
  );
};

export default WalkloadCreatePage;
