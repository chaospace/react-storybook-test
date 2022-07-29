import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button, {ButtonProps} from './Button';

// 기본포맷 선언
export default {
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template = (args: ButtonProps) => {
  const {children, ...rest} = args;
  console.log('childern', children);
  return <Button {...rest}>{children}</Button>;
};

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.args = {
  children: '버튼 라벨!'
};

export const BoldButton: ComponentStory<typeof Button> = Template.bind({});
BoldButton.args = {
  children: '볼드 라벨',
  bold: true
};
