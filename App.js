import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <>
      <ExpoStatusBar style="auto" />
      <RestaurantsScreen />
    </>
  );
}
