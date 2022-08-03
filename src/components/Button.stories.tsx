import React, {Fragment} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button, {ButtonProps} from './Button';
// import {expect} from '@storybook/jest';
// import {userEvent, waitFor, within} from '@storybook/testing-library';
import ButtonDoc from './Button.mdx';
// 기본포맷 선언
export default {
  title: 'Button',
  component: Button,
  parameters: {
    componentSubtitle: '버튼 컴포넌트 서브 타이틀!',
    // docs page설정을 mdx로 설정하면 markdown을 이용한 문서 작성 가능
    docs: {
      page: ButtonDoc
    }
  },
  argTypes: {
    onClick: {
      action: true
    }
  }
} as ComponentMeta<typeof Button>;

const Template = (args: ButtonProps) => {
  const {children, ...rest} = args;
  console.log('args', args);
  return <Button {...rest}>{children}</Button>;
};

const Default: ComponentStory<typeof Button> = Template.bind({});
Default.parameters = {
  docs: {
    storyDescription: '기본 버튼 스타일'
  }
};
Default.args = {
  children: '버튼 라벨!'
};

const BoldButton: ComponentStory<typeof Button> = Template.bind(
  {},
  {
    children: '볼드 라벨',
    bold: true,
    color: 'while',
    bgColor: '0xff00ff'
  }
);
// BoldButton.args = {
//   children: '볼드 라벨',
//   bold: true,
//   color: 'while',
//   bgColor: '0xff00ff'
// };

BoldButton.parameters = {
  docs: {
    storyDescription: '라벨 볼드 버튼 스타일'
  }
};

const StrokeButton: ComponentStory<typeof Button> = Template.bind({});
StrokeButton.args = {
  children: '스트로크 버튼',
  border: true
};
StrokeButton.parameters = {
  docs: {
    storyDescription: 'stroke 버튼 스타일'
  }
};

const ButtonWrapper = () => {
  const Other = Template.bind({}, {children: '링크버튼', color: '#ff00ee', bgColor: '#aa0000'});
  const Bold = Template.bind({}, {children: '버튼기본', bold: true, bgColor: '#000000'});
  const Normal = Template.bind({}, {children: '버튼기본'});
  const Border = Template.bind({}, {children: '버튼보더', bold: true, border: true});
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '8px'
      }}
    >
      <Normal />
      <Bold />
      <Other />
      <Border />
    </div>
  );
};
ButtonWrapper.storyName = 'all buttons';
ButtonWrapper.parameters = {
  controls: {disable: true}
};
export {ButtonWrapper, Default, BoldButton, StrokeButton};
