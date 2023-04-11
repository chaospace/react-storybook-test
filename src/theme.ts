/**
 * 테마 선언 시 주의할 점
 *  - 모든 것은 현재 필요한 만큼만 개발
 *  - 기본 컬러 이름은 bootstrap을 기준으로 가져옴.
 */

type THEME_VARIANT = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
const black = '#000000';
const white = '#fff';
const grays = {
  gray10: '#f8f9fa',
  gray20: '#e9ecef',
  gray30: '#dee2e6',
  gray40: '#ced4da',
  gray50: '#adb5bd',
  gray60: '#6c757d',
  gray70: '#495057',
  gray80: '#343a40',
  gray90: '#212529',
  black: '#000000'
} as const;

const theme = {
  primary: '#017bff',
  secondary: '#6c757d',
  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
  grays,
  white,
  black
} as const;

export {THEME_VARIANT};
export default theme;
