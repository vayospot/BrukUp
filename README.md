# The All In One CheetSheat

This is my knowledge...

## JavaScript

- [Configuing of absolute imports](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-standards.md#absolute-imports) i.e using `@/components/my-component` instead of `../../../components/my-component`.

## React

- [`children` prop is the most basic and easiest way to optimize your components.](https://github.com/alan2207/bulletproof-react/blob/master/docs/performance.md#children-as-the-most-basic-optimization)

## React Native

- [React Native Starter Guide](https://starter.obytes.com/overview/)
- [React Native Starter Pack to create an Expo app.](http://rn.new/)
- For authentication structure, [react-navigation docs explained it well](https://reactnavigation.org/docs/auth-flow/).
- To add cursor selection position:

  - In `<TextInput />`, use `onSelectionChange` prop to get the clicked position:

    ```javascript
    selection={selectionPosition}
    onSelectionChange={(event) => event.nativeEvent.selection}
    ```
  - Then use a state to keep track, then set the cursor to the current position using the `selection` prop in `<TextInput />`
- [Use the SafeAreaView component on the screens you register with a React Navigation navigator.](https://reactnavigation.org/docs/4.x/handling-iphonex/#:~:text=use%20the%20SafeAreaView%20component%20on%20the%20screens%20you%20register%20with%20a%20React%20Navigation%20navigator.)
- [Use useSafeAreaInsets hook from react-native-safe-area-context instead of SafeAreaView component](https://reactnavigation.org/docs/handling-safe-area#summary:~:text=Use%20useSafeAreaInsets%20hook%20from%20react%2Dnative%2Dsafe%2Darea%2Dcontext%20instead%20of%20SafeAreaView%20component)
- For setting up [themes](https://reactnavigation.org/docs/themes)
- To persist in a current screen when developing, [this could come in handy](https://reactnavigation.org/docs/state-persistence).
- Use `TouchableWithoutFeedback` to wrap the entire screen to dismiss the keyboard when tapping outside the `TextInput` by calling `Keyboard.dismiss()`.

## Expo

- To delay the app's startup until resources are ready, [check here](https://docs.expo.dev/versions/latest/sdk/splash-screen/#usage).
- In expo router, [something must be rendered to the screen](https://docs.expo.dev/router/reference/authentication/#alternative-loading-states) while [loading the initial auth state](https://docs.expo.dev/router/reference/authentication/#navigating-without-navigation).
- Instead of using fonts through assets you can opt in for getting the fonts straight from [expo-google-fonts](https://github.com/expo/google-fonts)
- To start expo app without cache, run `npx expo start --clear`
- So apparently, there's [expo secure store](https://docs.expo.dev/versions/latest/sdk/securestore/) and [react native async storage](https://react-native-async-storage.github.io/async-storage/docs/usage/), each can both used to store values locally on the device. When to use which:

  > Use react native async storage to store non-sensitive data, such as user preferences, user preferences, app state, or caching.
  >
  > Use expo secure store to store sensitive data like passwords, tokens, or personal information
  >
- Using [Expo Secure store as the custom persistence manger for firebase auth](https://github.com/expo/fyi/blob/main/firebase-js-auth-setup.md#use-a-custom-persistence-manager) *(untested)*
- Expo vector icon supports [using the icon as a button](https://docs.expo.dev/guides/icons/#button-component). For instance:

  ```javascript
  <Ionicons.Button name={"people"} size={24} color="#ffffff">
    This is a button icon
  </Ionicons.Button>
  ```
- Expo Router automatically adds [react-native-safe-area-context support](https://docs.expo.dev/router/migrate/from-react-navigation/#:~:text=Expo%20Router%20automatically,support.).
- To preload/cache expo icons, expo google fonts or local fonts in the `useFonts` hook:

  ```javascript
  const [fontLoaded, fontError] = useFonts({
    BarlowSCRegular: require("RELATIVE_PATH_HERE"), // Load local fonts
    Inter_900Black, // Load fonts from expo-google-fonts
    ...Ionicons.font, // Load icon fonts from @expo/vector-icons
  });
  ```
- In Expo Router, keep only the initial screens in the `(tabs)` folder. Move any nested stacks outside to avoid issues with [hiding the tab bar](https://reactnavigation.org/docs/hiding-tabbar-in-screens/) and [routing between stacks in different tabs](https://github.com/expo/expo/issues/26211#issuecomment-1887857547).
- For keyboard handling, check out this thorough [guide](https://docs.expo.dev/guides/keyboard-handling/).
- To prevent bottom tabs from moving above the keyboard on Android, set `softwareKeyboardLayoutMode` to `pan` in [app config](https://docs.expo.dev/guides/keyboard-handling/#keyboard-avoiding-view:~:text=%22expo%22%20%7B%0A%20%20%22android%22%3A%20%7B%0A%20%20%20%20%22softwareKeyboardLayoutMode%22%3A%20%22pan%22%0A%20%20%7D%0A%7D) or [tabBarHideOnKeyboard](https://reactnavigation.org/docs/bottom-tab-navigator/#tabbarhideonkeyboard)

## Prettier

- To format code with Prettier and sort Tailwind classes:

  - _Install the packages_:

    ```javascript
    npm install -D prettier prettier-plugin-tailwindcss
    ```
  - _Create a `.prettierrc` file, then add_:

    ```javascript
    npm install -D prettier prettier-plugin-tailwindcss
    ```
  - _As a plus, to format all specific files (e.g `.js` and `.jsx` files) and reformat Tailwind classes in one go, run_:

    ```javascript
    npx prettier "**/*.{js,jsx}" --write
    ```

## [NativeWind](https://www.nativewind.dev/v4/overview/)

- ClassNames can be used in a [Flatlist component](https://www.nativewind.dev/v4/overview/#:~:text=NativeWind%20maps%20className%2D%3Estyle%2C%20but%20it%20can%20handle%20the%20mapping%20of%20complex%20components.).
- To create a component with default styles

  ```javascript
  function MyComponent({ className }) {
    const defaultStyles = "text-black dark:text-white";
    return <Text className={`${defaultStyles} ${className}`} />;
  }

  <MyComponent className="font-bold" />;
  ```
- To handle components with multiple style props:

  ```javascript
  function MyComponent({ className, textClassName }) {
    return (
      <View className={className}>
        <Text className={textClassName}>Text Component</Text>
      </View>
    );
  }
  ```
- To style a child element based on its parent's state, [mark the parent with the `group` class and apply `group-*` modifiers](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state).
- [Don&#39;t use `space-{n}` anymore, instead use `gap-*`](https://www.nativewind.dev/v4/tailwind/spacing/space-between#:~:text=space%2D%7Bn%7D%20was%20temporary%20removed%20in%20v4)
- `Divide Width` has [temporarily been removed](https://www.nativewind.dev/v4/tailwind/borders/divide-width).
- Outline doesn't work in NativeWind
- Transitions and Animations are experimental features. Use with caution.

## Firebase

- In Firestore, [addDoc()](https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document) adds a new document with an auto-generated ID. [setDoc()](https://firebase.google.com/docs/firestore/manage-data/add-data#set_a_document) creates or replaces a document with a specific ID (pass `{ merge: true }` to avoid overwriting document). [updateDoc()](https://firebase.google.com/docs/firestore/manage-data/add-data#update-data) updates specific fields in an existing document (and only if the document exists).
- Currently, [Firebase does not support providers authentication](https://github.com/firebase/firebase-js-sdk/issues/5699#issuecomment-961263804) (e.g Google) using signInWIthPopup / signInWIthRedirect f**or React Native.** Here is [another way to set it up](https://docs.expo.dev/guides/google-authentication/).
- To reduce storage costs, [exclude long string fields](https://firebase.google.com/docs/firestore/query-data/index-overview#:~:text=Description-,Large%20string%20fields,-If%20you%20have) not used for querying (e.g., notes, comments) from indexing.
- In Firestore, [serverTimestamp()](https://firebase.google.com/docs/firestore/manage-data/add-data#server_timestamp) is preferred to ensure all records have a consistent timestamp.
- All [Firebase Auth Error Codes](https://firebase.google.com/docs/reference/js/auth#autherrorcodes)
- In Firebase, [prefer initializeAuth() over getAuth()](https://firebase.google.com/docs/auth/web/custom-dependencies#:~:text=The%20first%2C,map%20of%20dependencies.).
- To batch upload data to Firestore Database:
  ```javascript
  async function batchUploadToFirestore(dataArray, collectionName) {
    try {
      const uploadPromises = dataArray.map(async (dataItem) => {
        const docRef = doc(collection(db, collectionName));
        await setDoc(docRef, { ...dataItem, id: docRef.id });
      });

      await Promise.all(uploadPromises);
      console.log(`All data uploaded to Firestore collection: ${collectionName}`);
    } catch (error) {
      console.error(`Failed to upload data to Firestore collection: ${collectionName}`, error);
    }
  }
  /*
   * Note:
   * - This is most efficient for creating new documents with auto-generated IDs.
   * - If your dataItem already has a meaningful 'id', use:
   *   setDoc(doc(db, collectionName, dataItem.id), dataItem);
   */
  ```

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
  >
- To clean, optimize and refactor code:

  > [Input Code]
  >
  > Refactor this code to be cleaner, optimized and easier to maintain/use. Use descriptive naming and better styling practices (nativewind). Also, use any potential improvements that were not implemented but could be much valuable.
  >
- To generate commit messages:

  > Using these commit guide emojis:
  > 🐛(Fix a bug), ✨ (Introduce new features), 🚀 (Deploy stuff), ♻️ (Refactor code), 🎨 (Improve structure / format of the code), ⚡️ (Improve performance), 📝 (Add or update documentation), 🚑️ (Critical hotfix), 💡 (Add or update comments in source code), 🚧 (Work in progress), 🧑‍💻 (Improve developer experience), 🚸 (Improve user experience / usability), ⬆️ (Upgrade dependencies), 💄 (Add or update the UI and style files), ♿️ (Improve accessibility), 👽️ (Update code due to external API changes), 🚚 (Move or rename resources), ➕ (Add a dependency), ➖ (Remove a dependency), 📱 (Work on responsive design), 🔥 (Remove code or files), 💬 (Add or update text and literals), 🍱 (Add or update assets), 💫 (Add or update animations and transitions), ⬇️ (Downgrade dependencies), ✏️ (Fix typos), 🙈 (Add or update a .gitignore file), 🎉 (Begin a project), 🗑️ (Deprecate code that needs to be cleaned up), 💩 (Write bad code that needs to be improved).
  >
  > Generate a concise commit message based on the provided code changes. Ensure the commit message is readable at a glance and limited to a single sentence. The output should be in the format: **"[Emoji]: [Commit message]"**
  >
- To generate Vector illustration:

  > Generate outline vector illustration with white background showing a group of people going through a breakup
  >
- To summarize or shorten

  > Provide me with a summary - "[Include content]"
  >
- To create database structure for an app:

  > Create a [Firestore] data structure for my app. Here are the core features of the app so you'd use that to construct a full most optimal data structure for the app firestore database:
  >
  > [- add app feature in list format]
  >
- To generate better prompts:

  > [Input Prompt]
  >
  > Act as a prompt engineer. Review the above prompt, optimize it to make it better and ask any question you have before proceeding
  >

## Overall

- For color theme generation, use [UI Colors](https://uicolors.app/) or [Realtime Colors](realtimecolors.com) or [Color Mind](http://colormind.io/bootstrap/) or better still ask AI (Copilot or Claude)
- For UI component libraries, use [Tamagui](https://tamagui.dev/) or [gluestack (formerly NativeBase)](https://gluestack.io/).
- For toast notification, use [react-native-toast-message](https://github.com/calintamas/react-native-toast-message),  [react-native-notifier](https://github.com/seniv/react-native-notifier), [react-native-toast](https://github.com/backpackapp-io/react-native-toast)
- In Zustand, [when combining smaller stores into a single bounded store](https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md), use `create` only for the bounded store, not for each individual stores.
  > Note: When combining stores into one, make sure each store has **unique state property names**. If state properties overlap (e.g., both stores having `isLoading`), this can lead to serious side effects, as one state might overwrite the other unexpectedly.
  >

## App Essentials Checklist

* [ ] Design wireframes and mockups for all screens.
* [ ] Integrate navigation (e.g., React Navigation, Expo router).
* [ ] Implement user authentication (Firebase or custom backend).
* [ ] Ensure form validation with instant feedback.
* [ ] Add loading spinners for sign-in, sign-out, and data fetching.
* [ ] Use skeleton loaders for placeholder content while images or videos load.
* [ ] Set keyboard management to auto-dismiss and avoid covering input fields.
* [ ] Check navigation flows to ensure smooth back-and-forth between screens.
* [ ] Implement smooth animations for screen transitions and interactions.
* [ ] Use lazy loading for images, videos, or heavy content to improve performance.
* [ ] Enable offline support for critical parts of the app.
* [ ] Add a splash screen for a polished startup experience.
* [ ] Add pull-to-refresh gestures for lists and content-heavy pages.
* [ ] Add toast messages for non-critical notifications.
* [ ] Add password visibility toggles for password fields.
* [ ] Test on multiple devices and screen sizes for compatibility.
* [ ] Support biometric authentication (Face ID, fingerprint).
* [ ] Ensure high contrast and readability for text, especially in dark and light modes.
* [ ] Design for one-handed usage by placing important actions near the bottom.
* [ ] Add sync indicators for reconnecting after being offline.
* [ ] Auto-logout feature after a session timeout for security.
* [ ] Implement auto-complete or suggestions to make forms easier to fill out.
* [ ] Setup color themes for light and dark modes if needed.
* [ ] Use TypeScript to catch errors early during development.
* [ ] Use ESLint and Prettier for code formatting and error prevention.
* [ ] Store secrets securely with environment variables or SecureStore.
