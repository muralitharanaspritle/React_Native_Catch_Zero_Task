import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import { State } from "../../App";
import GameStyles from "../GameStyles";
const GameOver = () => {
  const state = useContext(State);
  console.log(state);
  useEffect(() => {
    state.getScore();
  }, []);
  return (
    <View style={GameStyles.container}>
      <Text style={GameStyles.gameOverText}>Game Over !!</Text>
      <Text style={GameStyles.scoreText}>You Scored {state.myScore}</Text> 
      <View style={GameStyles.totalView}>
        <Text style={GameStyles.totalText}>
          Total Numbers displayed {state.totalNumbersDisplayed}
        </Text>
        <Text style={GameStyles.totalText}>
          Total Numbers skipped{" "}
          {state.totalNumbersDisplayed - state.totalNumbersClicked}
        </Text>
        <Text style={GameStyles.totalText}>
          Total Numbers clicked {state.totalNumbersClicked}
        </Text>
        <Text style={GameStyles.totalText}>
          Total zeros displayed {state.totalZeroDisplayed}
        </Text>
      </View>
    </View>
  );
};

export default GameOver;
