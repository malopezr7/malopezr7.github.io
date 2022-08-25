const isDev = process.env.NODE_ENV === 'development';

let config = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        displayName: isDev,
        fileName: isDev,
        meaninglessFileNames: ['index', 'styles'],
        minify: !isDev,
        pure: true,
        ssr: true,
      },
    ],
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
  ],
};

// if the process using the babel config is stylelint
// or if the command summons stylelint, remove the babel config
if (
  process.env._.includes('stylelint') ||
  process.argv[1].includes('stylelint')
) {
  config = {};
}

module.exports = config;
