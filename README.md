# About

This project is a minimal reproducible example of a bug in the Expo SDK

[Link to the issue](https://github.com/expo/expo/issues/25566)

# Steps to reproduce

run

```
npm install
```

```
npx expo prebuild --platform android
```

then

```
npm run android
```

The project will work correctly.

Then create a release build (for example)

```
cd android && ./gradlew assembleRelease
```

and install it on an Android device. Reanimated animations will not work (the problem may not appear on the first run. If you close the app and open it again, the problem will appear in 95% of cases)

## Possible solution

In the `MainActivity.java` file, replace

```

@Override
protected ReactActivityDelegate createReactActivityDelegate() {
return new ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED,
new DefaultReactActivityDelegate(
this,
getMainComponentName(),
// If you opted-in for the New Architecture, we enable the Fabric Renderer.
DefaultNewArchitectureEntryPoint.getFabricEnabled()));
}

```

with

```

@Override
protected ReactActivityDelegate createReactActivityDelegate() {
return new DefaultReactActivityDelegate(
this,
getMainComponentName(),
// If you opted-in for the New Architecture, we enable the Fabric Renderer.
DefaultNewArchitectureEntryPoint.getFabricEnabled());
}

```

Read more about the problem here: https://github.com/expo/expo/issues/25566
