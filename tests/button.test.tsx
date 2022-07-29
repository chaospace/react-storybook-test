import React from 'react';
import * as stories from '@/components/Button.stories';
import {composeStories} from '@storybook/react';
import {render, screen} from '@testing-library/react';

describe('스토리북 연동 테스트', () => {
  it('기본버튼 동작확인', () => {
    const {Default} = composeStories(stories);
    render(<Default />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
