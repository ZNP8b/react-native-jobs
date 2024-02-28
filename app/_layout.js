import { Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Makes the native splash screen (configured in app.json) remain visible until hideAsync is called.
SplashScreen.preventAutoHideAsync();

const Layout = () => {
  // useFonts - hook to load fonts from local assets
  const [fontsLoaded, fontError] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  // if fontError - throw fontError
  useEffect(() => {
    if (fontError) throw error;
  }, [fontError]);

  // if fontsLoaded - hide the splash screen
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // If fonts are not loaded - return null
  if (!fontsLoaded) {
    return null;
  }

  // If everything is loaded - return the stack.
  // Stack - is a component that wraps for expo-router
  return <Stack />;
};

export default Layout;
