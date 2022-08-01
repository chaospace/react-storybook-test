//@ts-nocheck
import GlobalStyle from '@/globalStyle';
import {Fragment} from 'react';

const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'padded',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const decorators = [
  Story => (
    <Fragment>
      <GlobalStyle />
      <div style={{margin: '3em'}}>
        <Story />
      </div>
    </Fragment>
  )
];

export {parameters, decorators};
