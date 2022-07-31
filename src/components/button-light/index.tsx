import { ButtonWrapper } from './button-light.styled';

interface IButtonProps {
  width?: string;
  height?: string;
  text?: string;
  bgcolor?: string;
  color?: string;
  radius?: number;
  fontSize?: number;
  onClick?: () => void;
}
export const ButtonLight = ({
  width,
  height,
  text,
  bgcolor,
  color,
  radius,
  fontSize,
  onClick,
}: IButtonProps) => {
  return (
    <ButtonWrapper
      width={width || 'auto'}
      height={height || 'auto'}
      bgcolor={bgcolor || '#00C471'}
      color={color || '#fff'}
      radius={radius || 8}
      fontSize={fontSize || 14}
      onClick={onClick}
    >
      {text}
    </ButtonWrapper>
  );
};
