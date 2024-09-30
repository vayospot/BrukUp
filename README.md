An app for breakups

# The All In One CheetSheat

## React Native

- To add cursor selection position:
  - In`<TextInput />`, use`onSelectionChange` prop to get the clicked position:

    ```
    selection={selectionPosition}
    onSelectionChange={(event) => event.nativeEvent.selection}
    ```
  - Then use a state to keep track, then set the cursor to the current position using the`selection` prop in`<TextInput />`

## Expo

## Prettier

- To format code with Prettier and sort Tailwind classes:

  - _Install the packages_:

    ```
    npm install -D prettier prettier-plugin-tailwindcss
    ```
  - _Create a `.prettierrc` file, then add_:

    ```
    {"plugins": ["prettier-plugin-tailwindcss"]}
    ```
  - _As a plus, to format all specific files (e.g `.js` and `.jsx` files) and reformat Tailwind classes in one go, run_:

    ```
    npx prettier "**/*.{js,jsx}" --write
    ```
  -

## Commit Messages Guide

This was gotten from [Gitmoji.dev](gitmoji.dev)

- 🐛[bug]: Fix a bug.
- ✨[sparkles]: Introduce new features.
- 🚀[rocket]: Deploy stuff.
- ♻️[recycle]: Refactor code.
- 🎨[art]: Improve structure / format of the code.
- ⚡️[zap]: Improve performance.
- 📝[memo]: Add or update documentation.
- 🚑️[ambulance]: Critical hotfix.
- 💡[bulb]: Add or update comments in source code.
- 🚧[construction]: Work in progress.
- 🧑‍💻[technologist]: Improve developer experience.
- 🚸[children_crossing]: Improve user experience / usability.
- ⬆️[arrow_up]: Upgrade dependencies.
- 💄[lipstick]: Add or update the UI and style files.
- ♿️[wheelchair]: Improve accessibility.
- 👽️[alien]: Update code due to external API changes.
- 🚚[truck]: Move or rename resources (e.g.: files, paths, routes).
- ➕[heavy_plus_sign]: Add a dependency.
- ➖[heavy_minus_sign]: Remove a dependency.
- 📱[iphone]: Work on responsive design.
- 🔥[fire]: Remove code or files.
- 💬[speech_balloon]: Add or update text and literals.
- 🍱[bento]: Add or update assets.
- 💫[dizzy]: Add or update animations and transitions.
- ⬇️[arrow_down]: Downgrade dependencies.
- ✏️[pencil2]: Fix typos.
- 🙈[see_no_evil]: Add or update a .gitignore file.
- 🎉[tada]: Begin a project.
- 🗑️[wastebasket]: Deprecate code that needs to be cleaned up.
- 💩[poop]: Write bad code that needs to be improved.

## AI Prompts

- To explain and teach code concepts:

  > [Content to explain]
  >
  > You are an expert tutor in [content field]. I'm a complete beginner. Explain every aspect of the content above in a simple descriptive way. Don't hesitate to go into extensive detail with extra information and examples to ensure a thorough understanding.


- To clean, optimize and refactor code:

  > [Input Code]
  > 
  > Refactor this code to be cleaner, optimized and easier to maintain/use. Use descriptive code naming. Also, use any potential improvements that were not implemented but could be much valuable.
