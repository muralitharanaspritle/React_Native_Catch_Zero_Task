import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ScreensComp from "./Screens/ScreensComp";
import React, { useEffect, useState } from "react";
export const State = React.createContext();

export default function App() {
  const [myState, setMyState] = useState({
    score: 0,
    randomNumber: randomNumber,
    timer: 120,
    timeFormat: ["mm", "ss"],
    countTimer: countTimer,
  });

  // function (time) {
  //   if (this.timer > 0) {
  //     setMyState({ ...myState, timer: time });
  //   }
  // }

  function countTimer(time) {
    setMyState({
      ...myState,
      timer: time,
    });
  }

  function randomNumber(random) {
    setMyState({
      ...myState,
      randomNumber: random,
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <State.Provider value={myState}>
        <ScreensComp />
      </State.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
});
