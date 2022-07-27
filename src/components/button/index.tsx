import { ButtonWrapper } from './button.styled';

interface IButtonProps {
  width?: string;
  height?: string;
  text?: string;
  bgColor?: string;
  color?: string;
  radius?: number;
  fontSize?: number;
  onClick?: () => void;
}
export const Button = ({
  width,
  height,
  text,
  bgColor,
  color,
  radius,
  fontSize,
  onClick,
}: IButtonProps) => {
  return (
    <ButtonWrapper
      width={width || 'auto'}
      height={height || 'auto'}
      bgColor={bgColor || '#000'}
      color={color || '#fff'}
      radius={radius || 8}
      fontSize={fontSize || 14}
      onClick={onClick}
    >
      {text}
    </ButtonWrapper>
  );
};
