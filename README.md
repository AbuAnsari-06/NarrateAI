# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deploying to GitHub Pages

1. Create a GitHub repository for this project.
2. Push this project to the `main` branch.
3. Enable GitHub Pages in the repository settings or use the workflow in `.github/workflows/gh-pages.yml`.
4. The workflow builds `dist/` and deploys it automatically.

If your site does not load correctly, make sure GitHub Pages is configured to publish from the `gh-pages` branch or the repository's Pages setting. The Vite `base` is set to `./` so the app works from a project subpath.

### Local publish helper

After you initialize Git and push to GitHub, you can publish with:

```bash
npm run build
npm run deploy
```

This uses `gh-pages` to publish the `dist/` folder.
