//@ts-nocheck
import '@/assets/styles/index.scss';

const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  layout: 'none',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const decorators = [
  Story => (
    <div style={{margin: '3em'}}>
      <Story />
    </div>
  )
];

export {parameters, decorators};
