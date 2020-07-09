import React, { memo, FC, ReactNode, SyntheticEvent } from 'react';

import { ButtonStyled, ButtonText } from './button-styled';

export const Button: FC<IProps> = ({
  type,
  children,
  onClick,
  active,
  disabled,
  buttonType,
  inline,
  text,
  circle,
  padding,
  margin,
  loading,
  fontSize
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      active={active}
      disabled={disabled}
      buttonType={buttonType}
      inline={inline}
      circle={circle}
      padding={padding}
      margin={margin}
      loading={loading ? 'true' : undefined}
    >
      {text && <ButtonText fontSize={fontSize}>{text}</ButtonText>}
      {children}
    </ButtonStyled>
  );
};

export interface IProps {
  type?: 'submit' | 'reset' | 'button';
  children?: ReactNode;
  onClick?: (e: SyntheticEvent) => any;
  active?: boolean;
  disabled?: boolean;
  buttonType?: 'normal' | 'primary' | 'text' | 'outline';
  inline?: boolean;
  text?: string;
  circle?: boolean;
  padding?: string;
  loading?: boolean | string;
  fontSize?: string;
  margin?: string;
}

Button.defaultProps = {
  type: 'button',
  active: false,
  disabled: false,
  inline: false,
  circle: false,
  loading: false
} as Partial<IProps>;

export default memo(Button);
