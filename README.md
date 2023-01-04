# Project template for [SvelteKit](https://kit.svelte.dev/) app.

#### This template includes:

- [Typescritpt](https://www.npmjs.com/package/typescript);
- [SvelteKit](https://kit.svelte.dev/);
- [ESlint](https://www.npmjs.com/package/eslint), [Prettier](https://www.npmjs.com/package/prettier), [StyleLint](https://www.npmjs.com/package/stylelint), [Editor config](https://editorconfig.org/), [husky](https://www.npmjs.com/package/husky), [LintStaged](https://www.npmjs.com/package/lint-staged) and related configs;

#### Related packages:
- [TailwindCSS](https://tailwindcss.com/);
- [SASS](https://www.npmjs.com/package/sass);
- [axios](https://www.npmjs.com/package/axios);

#### Requirements:

- [node](https://nodejs.org/en/) version 14.18 +

## Installation:

    $ git clone https://github.com/m31odyWeb/svelte-kit-app-template.git <new project directory>
    $ cd <new-project-directory>
    $ rm -rf .git
    $ git init -y
    $ npm install

## Available scripts:

`npm run dev` - to start project in develompent mode;

`npm run build` - to build project;

`npm run preview` - to preview a builded project;

`fix:code` - to fix JS and TS problems;

`fix:styles` - to fix CSS and SCSS problems;

`format` - to fix CSS and SCSS problems and format code with [__prettier__](https://www.npmjs.com/package/prettier);

## Configaration files:

`tsconfig.json` - for configuring __typescript__;

`vite.config.js` - for configuring __vite__;

`svelte.config.js` - for configuring __svelte__;

`tailwind.config.cjs` - for configuring __TailwindCSS__;

`postcss.config.cjs` - for configuring __PostCSS__;

`.eslintrc.cjs, .eslintrc.stage.cjs` - for configuring __ESLint__ for development and stage;

`.stylelintrc.json` - for configuring __StyleLint__ for development and stage;

`.prettierrc` - for configuring __prettier__ for development and stage;

`.editorconfig` - for configuring __Editor config__;