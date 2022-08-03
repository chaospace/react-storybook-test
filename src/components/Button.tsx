import React from 'react';
import styled, {css} from 'styled-components';

interface ButtonStyleProps {
  /** 폰트 컬러 속성 */
  color?: string;
  /** 볼드 여부 설정 */
  bold: boolean;
  /** 버튼 배경 컬러 기본값은 orange */
  bgColor: string;
  /** 버튼 보더 설정 여부 */
  border: boolean;
}

/**
 * 컬러 조정 함수
 */
const adjustColor = (color: string, value: number) => {
  const nColor = parseInt(color.replace('#', ''), 16);
  const r = (nColor & 0xff0000) >> 16;
  const g = (nColor & 0x00ff00) >> 8;
  const b = nColor & 0x0000ff;
  const nr = Math.max(0, Math.min(r + value, 0xff));
  const ng = Math.max(0, Math.min(g + value, 0xff));
  const nb = Math.max(0, Math.min(b + value, 0xff));
  const results = (nr << 16) | (ng << 8) | nb;
  return results;
};

/**
 * 컬러 값을 16진수 핵값으로 변경
 */
const convertStyleValue = (value: number) => {
  return `#${Number(value).toString(16)}`;
};

const changeColor = (color: string, value: number) => convertStyleValue(adjustColor(color, value));

export interface ButtonProps
  extends ButtonStyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonBase = styled.button<ButtonStyleProps>`
  appearance: none;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  color: ${({color}) => color};
  font-weight: ${({bold}) => (bold ? 'bold' : 'normal')};
  border: ${({border}) => (border ? `3px solid red` : 'none')};
  outline: none;
  text-align: center;
  background-color: ${({bgColor}) => bgColor};

  &:hover,
  &:active,
  &:focus {
    background-color: ${props => changeColor(props.bgColor!, -10)};
  }
`;

/**
 * 버튼 컴포넌트 기본 설명e
 * @param props
 * @returns
 */
function Button(props: React.PropsWithChildren<ButtonProps>) {
  const {children, border, color, bold, bgColor, ...rest} = props;
  return (
    <ButtonBase {...rest} border={border} color={color} bold={bold} bgColor={bgColor}>
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  color: '#ffffff',
  bgColor: '#ffcc00',
  border: false,
  bold: false
};

export default Button;
