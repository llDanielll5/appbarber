import React from "react";
import { StatusBar } from "expo-status-bar";
import useCachedResources from "./hooks/useCachedResources";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Navigation from "./navigation";
import Constants from "expo-constants";
import { View } from "react-native";
import { RecoilRoot } from "recoil";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const theme = {
    ...DefaultTheme,
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={theme}>
        <RecoilRoot>
          <View style={{ marginTop: Constants.statusBarHeight }} />
          <StatusBar style="dark" backgroundColor="white" />
          <Navigation />
        </RecoilRoot>
      </PaperProvider>
    );
  }
}
