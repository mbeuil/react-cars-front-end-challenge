# Front-End Challenge

RAC is a web-app done as a technical test. It was done with :

> React, Typescript, emotion, eslint, prettier

The state management was done through the context hook API and the design was
inspired by [dev](https://dev.to/) and [turo](https://turo.com/)

## Pointers

Key points were :

- Do the simplest thing that could work for the level you're currently solving.
- Clean, extensible and robust code (don't overlook edge cases).
- Prices are stored as integers (in cents).
- Try to handle some styling.

This test was oriented towards React and Typescript. The **/server** and a
simple **/src** were given as well as a **package.json** :

```
{
  "name": "...",
  "version": "0.0.1",
  "description": "...",
  "repository": "...",
  "license": "MIT",
  "private": true,
  "scripts": {
    "start": "node server/index.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "react": "^16.11.0",
    "react-dom": "^16.11.0"
  },
  "devDependencies": {
    "parcel-bundler": "^1.12.4",
    "typescript": "^3.6.4"
  }
}
```

---

## Challenge

- [x] lvl 1 : fetching and displaying cars.
- [x] lvl 2 : filtering by duration and distance.
- [x] lvl 3 : calculate the rental price.
- [ ] lvl 4 : degressive pricing.
