import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameLive from "../Components/GameLive/GameLive";
import GameOver from "../Components/GameOver/GameOver";


const Stack = createNativeStackNavigator();
const ScreensComp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="GameLive"
          component={GameLive}
          options={headerOptions}
        />
        <Stack.Screen
          name="GameOver"
          component={GameOver}
          options={headerOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreensComp;
const headerOptions = {
  headerStyle: {
    backgroundColor: "purple",
  },
  headerTitleAlign: "center",
  headerTintColor: "white",
};
const styles = StyleSheet.create({});
