import React, { memo, FC, SyntheticEvent } from 'react';

import { InputStyled } from './input-styled';

type IType = 'text' | 'checkbox' | 'radio' | 'search' | 'number' | 'email' | 'password';

export const Input: FC<IProps> = ({ value, type = 'text', onChange, placeholder, autoFocus, name }) => {
  return (
    <InputStyled
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
      name={name}
      id={name || ''}
      autoComplete="off"
    />
  );
};

export interface IProps {
  value?: any;
  type?: IType;
  onChange?: (e: SyntheticEvent) => void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
}

Input.defaultProps = {
  type: 'text',
  autoFocus: false,
  placeholder: ' '
} as Partial<IProps>;

export default memo(Input);
