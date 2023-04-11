const {nodeModules, sourcePath} = require('../webpack/const');

module.exports = {
  webpackFinal: async (config, {configType}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...{
        '@': sourcePath
      }
    };
    config.module.rules.push({
      test: /(\.module)?.(sass|s.?css)$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: {
              auto: /\.module.(sass|s?css)$/,
              exportLocalsConvention: 'camelCaseOnly'
            }
          }
        },
        {
          loader: 'sass-loader',
          options: {
            //additionalData: "@use '@/assets/styles/config';",
            sourceMap: true,
            sassOptions: {
              outputStyle: 'compressed',
              includePaths: [nodeModules]
            }
          }
        }
      ]
    });

    // Return the altered config
    return config;
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  staticDirs: ['../public'],
  features: {
    previewMdx2: true
  },
  core: {
    builder: 'webpack5'
  }
};
