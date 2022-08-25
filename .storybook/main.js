module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/**/stories.@(ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  // workaround to prevent SB order stories alphabetically instead of by export order at webpack 5
  // https://github.com/storybookjs/storybook/issues/18535#issuecomment-1164242797
  babel: async (options) => ({
    ...options,
    plugins: [...options.plugins, ['babel-plugin-named-exports-order']],
  }),
};
