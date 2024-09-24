An app for breakups

# The All In One CheetSheat

## React Native

## Expo

## Prettier

- To format code with Prettier and sort Tailwind classes:

  - *Install the packages*:

    ```
    npm install -D prettier prettier-plugin-tailwindcss
    ```
  - *Create a `.prettierrc` file, then add*:

    ```
    {"plugins": ["prettier-plugin-tailwindcss"]}
    ```
  - *As a plus, to format all specific files (e.g `.js` and `.jsx` files) and reformat Tailwind classes in one go, run*:

    ```
    npx prettier "**/*.{js,jsx}" --write
    ```
  -
