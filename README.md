# Michelle Lee Answers AI code assessment

Hosted on Github Pages: https://michl15.github.io/data-vis/

## Dev Setup
1. Clone the repository
2. Run `yarn` to install dependencies
3. Run `yarn dev` to start the local development server. Navigate to the `localhost` URL provided.

## Features Implemented
- Dashboard: 
  - Display data, including line chart, KPI, best scenarios
  - Open "Edit Variables" button to view variable data
- Data:
  - Displayed as line chart.
  - Select variable with dropdown
  - Hovering data points opens context for selected variable
- Drawer:
  - Shows variables by category
  - Hovering a variable will show additional context

## Technical Decisions/Tradeoffs
- Utilized Mantine's Component library to assist building
  - Due to this, it was slightly more difficult to customize CSS and styles
  - However, Mantine provided a ton of functionality with unique hooks like `useDisclosure` and `useHover`
- Utilized Redux and Redux Toolkit for state management
  - Used dummy data for initialState, but can utilize middleware to populate data via API

## Known Limitations
- Ability to search variables not implemented
- Ability to add new variables not implemented
- Auth via firebase not implemented

# Mantine Vite template

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

## Build and dev scripts

- `dev` – start development server
- `build` – build production version of the app
- `preview` – locally preview production build

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `vitest` – runs vitest tests
- `vitest:watch` – starts vitest watch
- `test` – runs `vitest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
- `prettier:write` – formats all files with Prettier
