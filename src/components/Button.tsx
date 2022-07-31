import React from 'react';
import styled from 'styled-components';

interface ButtonStyleProps {
  /** 폰트 컬러 속성 */
  color?: string;
  /** 볼드 여부 설정 */
  bold?: boolean;
  /** 버튼 배경 컬러 기본값은 orange */
  bgColor?: string;
  /** 버튼 보더 설정 여부 */
  stroke?: boolean;
}

export interface ButtonProps
  extends ButtonStyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonBase = styled.button<ButtonStyleProps>`
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: ${({color}) => color};
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
  border: ${({stroke}) => (stroke ? `3px solid red` : 'none')};
  outline: none;
  text-align: center;
  background-color: ${({bgColor}) => bgColor};
`;

/**
 * 버튼 컴포넌트 기본 설명
 * @param props
 * @returns
 */
function Button(props: React.PropsWithChildren<ButtonProps>) {
  const {children, stroke, color, bold, bgColor, ...rest} = props;
  return (
    <ButtonBase {...rest} stroke={stroke} color={color} bold={bold} bgColor={bgColor}>
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  color: 'white',
  bgColor: 'orange',
  stroke: false,
  bold: false
};

export default Button;
