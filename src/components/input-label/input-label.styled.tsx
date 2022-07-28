import styled from '@emotion/styled';

interface WrapperProps {
  margin?: string;
}

export const Wrapper = styled.div(
  ({ margin }: WrapperProps) => `
  width: 100%;
  margin-top: ${margin};
`
);

export const Label = styled.label`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.5);
  line-height: 22px;
  font-weight: 700;
  width: auto;
  margin-bottom: 8px;
  margin-left: 5px;
  display: block;
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  flex-grow: 1;
  height: 50px;
  background: #eee;
  border: none;
  border-radius: 10px;
  padding: 14px;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  &:focus {
    outline: none;
  }
`;
