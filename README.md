[![CodeQL](https://github.com/e0ipso/ts-node-startkit/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/e0ipso/ts-node-startkit/actions/workflows/codeql-analysis.yml)

# TypeScript node starter kit

Often times I want to start a TypeScript project from scratch, but I forgot all the tooling I once set up. This leads to
several hours of catching up on the latest packages and configurations for eslint, prettier, tsconfig, husky, semantic
release, ...

This project is an attempt to answer the question of: _How did I do it last time?_

## Features

This setup has several features that I like:

- `eslint` and `prettier` playing together.
- CI integration using GitHub Actions.
- `jest` configured to play nice with TypeScript.
- Yarn 2 for package management.
- Semantic release.
- A nice `tsconfig.json` that I like.
- ...

### Local development

#### One time setup

After cloning the repository you will need to do the customary `yarn install`. Moreover you need to install the husky
hooks `husky install`.
