import { ReactNode } from 'react';
import { Input, InputWrapper, Label, Wrapper } from './input-label.styled';

interface InputLabelProps {
  labelText?: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  margin?: string;
  bgcolor?: string;
  children?: ReactNode;
}

const InputLabel = ({
  labelText,
  type,
  value,
  placeholder,
  margin,
  children,
  bgcolor,
  onChange,
}: InputLabelProps) => {
  return (
    <Wrapper margin={margin || '0px'}>
      <Label>{labelText}</Label>
      <InputWrapper>
        <Input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          bgcolor={bgcolor || '#eee'}
        />
        {children}
      </InputWrapper>
    </Wrapper>
  );
};

export default InputLabel;
