import { ButtonWrapper } from './button.styled';

interface IButtonProps {
  width?: string;
  height?: string;
  text?: string;
  bgColor?: string;
  color?: string;
}
export const Button = ({ width, height, text, bgColor, color }: IButtonProps) => {
  return (
    <ButtonWrapper
      width={width || 'auto'}
      height={height || 'auto'}
      bgColor={bgColor || '#00C471'}
      color={color || '#fff'}
    >
      {text}
    </ButtonWrapper>
  );
};
