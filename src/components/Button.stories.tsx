import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button, {ButtonProps} from './Button';
import {expect} from '@storybook/jest';
import {userEvent, waitFor, within} from '@storybook/testing-library';
import ButtonDoc from './Button.mdx';
// 기본포맷 선언
export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      page: () => {
        return (
          <div>
            <ButtonDoc />
          </div>
        );
      }
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

export const StorkeButton: ComponentStory<typeof Button> = Template.bind({});
StorkeButton.args = {
  children: '스트로크 버튼',
  stroke: true
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
