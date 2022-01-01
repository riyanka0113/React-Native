import { useFonts } from "expo-font";
import React from "react";
import Routes from "./routes/Routes";

export default function App() {
  const [loaded] = useFonts({
    'nunito': require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  // const [fontLoaded, setFontLoaded] = useState(false);
  // const getFonts = () =>
  //   Font.loadAsync({
  //     nunito: require("./assets/fonts/Nunito-Regular.ttf"),
  //     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  //   });

  if (!loaded) {
    return null;
  }
  return <Routes />;
}
