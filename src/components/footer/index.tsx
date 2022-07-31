import { Wrapper } from './footer.styled';

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return <Wrapper>{`Copyright ⓒ ${year}. 워크북 all rights reserved.`}</Wrapper>;
};
