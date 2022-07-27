import { ButtonWrapper } from './button.styled';

interface IButtonProps {
  width?: string;
  height?: string;
  text?: string;
  bgColor?: string;
  color?: string;
  radius?: number;
  fontSize?: number;
}
export const Button = ({ width, height, text, bgColor, color, radius, fontSize }: IButtonProps) => {
  return (
    <ButtonWrapper
      width={width || 'auto'}
      height={height || 'auto'}
      bgColor={bgColor || '#000'}
      color={color || '#fff'}
      radius={radius || 8}
      fontSize={fontSize || 14}
    >
      {text}
    </ButtonWrapper>
  );
};
