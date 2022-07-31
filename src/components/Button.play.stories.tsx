import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button, {ButtonProps} from './Button';
import {expect} from '@storybook/jest';
import {userEvent, waitFor, within} from '@storybook/testing-library';

// 기본포맷 선언
export default {
  title: 'test/Button',
  component: Button,
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {hidden: true}
    },
    docs: {
      page: null
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

Default.play = async ({args, canvasElement}) => {
  const canvas = within(canvasElement);

  const button = canvas.queryByRole('button');
  await waitFor(() => {
    expect(button).toBeInTheDocument();
  });

  button && userEvent.click(button);
  await waitFor(() => {
    expect(args.onClick).toHaveBeenCalled();
  });
};
