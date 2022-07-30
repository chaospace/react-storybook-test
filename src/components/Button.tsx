import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bold?: boolean;
}

const ButtonBase = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  background-color: orange;
  color: white;
  outline: none;
  text-align: center;
`;

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const {children, color, bold, ...rest} = props;
  return (
    <ButtonBase
      {...rest}
      style={{
        color: color,
        fontWeight: bold ? 'bold' : 'normal'
      }}
    >
      {children}
    </ButtonBase>
  );
}

export default Button;
