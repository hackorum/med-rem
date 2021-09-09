import React from "react";
import Routes from "./navigation/index";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: require("./assets/Poppins/Poppins-Regular.ttf"),
    PoppinsMedium: require("./assets/Poppins/Poppins-Medium.ttf"),
    PoppinsBold: require("./assets/Poppins/Poppins-Bold.ttf"),
  });
  if (fontsLoaded) {
    return <Routes />;
  } else {
    return <AppLoading />;
  }
}
