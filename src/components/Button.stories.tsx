import React from 'react';
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
  return <Button {...rest}>{children}</Button>;
};

export const Default: ComponentStory<typeof Button> = Template.bind({});
Default.parameters = {
  docs: {
    storyDescription: '기본 버튼 스타일'
  }
};
Default.args = {
  children: '버튼 라벨!'
};

export const BoldButton: ComponentStory<typeof Button> = Template.bind({});
BoldButton.args = {
  children: '볼드 라벨',
  bold: true,
  color: 'white',
  bgColor: 'orange'
};

BoldButton.parameters = {
  docs: {
    storyDescription: '라벨 볼드 버튼 스타일'
  }
};

export const StorkeButton: ComponentStory<typeof Button> = Template.bind({});
StorkeButton.args = {
  children: '스트로크 버튼',
  stroke: true
};
StorkeButton.parameters = {
  docs: {
    storyDescription: 'stroke 버튼 스타일'
  }
};

// Default.play = async ({args, canvasElement}) => {
//   const canvas = within(canvasElement);

//   const button = canvas.queryByRole('button');
//   await waitFor(() => {
//     expect(button).toBeInTheDocument();
//   });

//   button && userEvent.click(button);
//   await waitFor(() => {
//     expect(args.onClick).toHaveBeenCalled();
//   });
// };
