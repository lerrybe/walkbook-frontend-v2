import { Title, Icon, Description, InnerWrapper } from './how-to-create.styled';

import { ReactComponent as LineIcon } from '~/assets/icons/icon-line.svg';
import { ReactComponent as MarkerIcon } from '~/assets/icons/icon-marker.svg';

const HowToCreate = () => {
  return (
    <>
      <Title>{'* 마커와 선을 이용해 지도 위에 경로를 표시합니다.'}</Title>
      <InnerWrapper>
        <Icon>{'마커'}</Icon>
        <MarkerIcon />
        <Description>
          {
            '마커를 이용해 특이한 스팟을 찍어주세요! 클릭하면 핀이 추가되고 설명을 입력할 수 있습니다.'
          }
        </Description>
      </InnerWrapper>
      <InnerWrapper>
        <Icon>{'선'}</Icon>
        <LineIcon />
        <Description>
          {'선을 이용해 경로를 표시해주세요! 클릭하여 선 그리기를 시작합니다.'}
        </Description>
      </InnerWrapper>
    </>
  );
};

export default HowToCreate;
