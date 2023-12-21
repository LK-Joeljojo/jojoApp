import React from "react";
import { StyleSheet, View, Text } from "react-native";
import HomeScreen from "./ecran/HomeScreen";
import DetailScreen from "./ecran/DetailScreen";
import ShopScreen from "./ecran/ShopScreen";

export default function App(){
  return(
    <srollView >
      {/* <HomeScreen /> */}
      {/* <DetailScreen /> */}
      <ShopScreen />
    </srollView>
  );
}


