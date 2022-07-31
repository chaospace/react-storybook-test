import React from 'react';
import styled from 'styled-components';

interface ButtonStyleProps {
  color?: string;
  bold?: boolean;
  bgColor?: string;
  stroke?: boolean;
}

export interface ButtonProps
  extends ButtonStyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonBase = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: ${({color}) => color ?? 'white'};
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
  border: ${({stroke}) => (stroke ? `3px solid red` : 'none')};
  outline: none;
  text-align: center;
  background-color: ${({bgColor}) => bgColor ?? 'orange'};
`;

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const {children, stroke, color, bold, bgColor, ...rest} = props;
  return (
    <ButtonBase {...rest} stroke={stroke} color={color} bold={bold} bgColor={bgColor}>
      {children}
    </ButtonBase>
  );
}

export default Button;
