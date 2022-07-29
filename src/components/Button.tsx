import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  bold?: boolean;
}

function Button(props: React.PropsWithChildren<ButtonProps>) {
  const {children, color, bold, ...rest} = props;
  return (
    <button
      {...rest}
      style={{
        color: color,
        fontWeight: bold ? 'bold' : 'normal'
      }}
    >
      {children}
    </button>
  );
}

export default Button;
