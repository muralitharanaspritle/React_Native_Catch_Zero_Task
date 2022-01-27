import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameLive from "../Components/GameLive/GameLive";
import GameOver from "../Components/GameOver/GameOver";
import { createRef } from "react";

const Stack = createNativeStackNavigator();
const ScreensComp = () => {
  return (
    <NavigationContainer ref={createRef()}>
      <Stack.Navigator >
        <Stack.Screen
          name="GameLive"
          component={GameLive}
          
          options={headerOptions1}
        /> 
        <Stack.Screen
          name="GameOver"
          component={GameOver}
          options={headerOptions2}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );  
};

export default ScreensComp;
const headerOptions1 = {
  headerStyle: {
    backgroundColor: "#1EF28F",
  },
  headerTitleAlign: "center",
  headerTintColor: "black",
  
};
const headerOptions2 = {
  headerStyle: {
    backgroundColor: "#FF8000",
  },
  headerTitleAlign: "center",
  headerTintColor: "black",
  headerBackVisible:false
};
const styles = StyleSheet.create({});
 