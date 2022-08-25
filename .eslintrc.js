module.exports = {
  root: true,
  extends: [
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    '@z1digitalstudio/eslint-config-imports',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  ignorePatterns: [
    '!.*.js',
    '!.storybook',
    'package.json',
    'graphql.config.json',
    '*apollo-helpers.ts',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended',
        '@z1digitalstudio/eslint-config-imports',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint', 'react-hooks'],
      settings: {
        react: {
          version: 'detect',
        },
      },
      // Rules that apply only to typescript files should go here
      rules: {
        // Disabled because Typescript takes care of that already.
        '@typescript-eslint/no-unused-vars': 'warn',
        // This rule is enabled by eslint-config-airbnb and disabled by
        // eslint-plugin-prettier:
        // https://github.com/prettier/eslint-plugin-prettier/issues/65
        // This is a rare issue and we feel like this rule improves the
        // consistency of the code so we keep it on.
        'arrow-body-style': 'warn',
        // Typescript takes care of that already
        'import/no-unresolved': 'off',
        // The "a" element does require the "href" attribute, but it's next's
        // Link job to pass it using "passHref".
        'jsx-a11y/anchor-is-valid': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        // Allow hoisting
        '@typescript-eslint/no-use-before-define': [2, { functions: false }],
        'no-param-reassign': [
          'error',
          {
            // Allow overwriting props from the immerjs draft
            ignorePropertyModificationsFor: ['next'],
            props: true,
          },
        ],
        'no-underscore-dangle': [
          'warn',
          {
            allow: ['__typename'],
          },
        ],
        // "void" is useful to purposefully ignore the result of promises
        'no-void': 'off',
        // "TO-DO" comments (with a hyphen so the IDE doesn't pick it up) are
        // usually left to indicate that something shouldn't be committed. In
        // the event that we actually want to commit a warning comment, we
        // should add a card to the issue tracker instead.
        'no-warning-comments': 'warn',
        // Contrary to what we'd expect, eslint-config-airbnb doesn't enable
        // this rule, so we enable it manually.
        'react/jsx-key': [
          'warn',
          {
            // This is disabled by default to prevent a breaking change. We are
            // not affected by that so we enable it.
            // https://github.com/yannickcr/eslint-plugin-react/blob/c2a790a3472eea0f6de984bdc3ee2a62197417fb/docs/rules/jsx-key.md#checkfragmentshorthand-default-false
            checkFragmentShorthand: true,
          },
        ],
        // Disabled because we use TypeScript, so we don't care about PropTypes
        'react/prop-types': 'off',
        // Disabled because as of React 17 this is not necessary
        'react/react-in-jsx-scope': 'off',
        // Disabled because there's scalable way of providing exceptions for
        // this rule. In principle, I agree with it: we shouldn't spread props
        // into our component. But in practice, it gets in the way of libraries
        // like react-hook-form or react-dropzone. Enforcing that our custom
        // components don't accept spread props should therefore be done at the
        // pull request review layer.
        'react/jsx-props-no-spreading': 'off',
        // Restrict some import formats
        '@typescript-eslint/no-restricted-imports': [
          'error',
          {
            patterns: [
              '../..',
              '!../styles',
              '!../types',
              '!../connect',
              '!../constants',
              '!../utils',
              '!../logic',
            ],
          },
        ],
        // Always prefer named exports, except in storybook and pages files
        'import/no-default-export': 'error',
      },
      overrides: [
        {
          // Files which requires a default export: pages, storybook, and others
          files: [
            '**/*.stories.*',
            '**/stories.*',
            'src/storybook/**/*.*',
            'src/pages/**/*.tsx',
            'additional.d.ts',
            'src/graphql/instrospection.ts',
          ],
          rules: {
            'import/no-anonymous-default-export': 'off',
            'import/no-default-export': 'off',
            'import/named': 'off',
          },
        },

        // Always enforce exported functions to be typed, except in specific
        // cases where we want the return type to be inferred.
        {
          files: [
            'src/components/**/logic.ts',
            'src/containers/**/connect.ts',
            'src/containers/**/logic.ts',
            'src/graphql/hooks/**/*.ts',
            'src/model/**/*.ts',
          ],
          rules: {
            '@typescript-eslint/explicit-module-boundary-types': 'off',
          },
        },
      ],
    },
    {
      files: ['.storybook/*.js'],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: { jsx: true },
      },
    },
  ],
  // Only rules that apply to both javascript and typescript files should go
  // here. Typescript rules should go in the overrides section.
  rules: {
    'arrow-body-style': 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'prettier/prettier': 'warn',
    'react/jsx-uses-react': 'error',
  },
};
