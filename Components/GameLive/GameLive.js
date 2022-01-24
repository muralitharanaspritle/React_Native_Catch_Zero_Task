import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import GameStyles from "../GameStyles";
import { State } from "../../App";
import { useNavigation } from "@react-navigation/native";
const GameLive = () => {
  const state = useContext(State);
  const navigation = useNavigation();

  const minuteConvertor = (time) => {
    const minutes = "0" + Math.floor(time / 60);
    return minutes;
  };
  const secondsConvertor = (time) => {
    const minutes = "0" + Math.floor(time / 60);
    const seconds = time - parseInt(minutes) * 60;
    if (time % 60 === 0) {
      return seconds + "0";
    } else if (seconds < 10) {
      return "0" + seconds;
    } else {
      return seconds;
    }
  };

  
  let numberOfSeconds = 120;
  const startGame = () => {
    numberOfSeconds = numberOfSeconds - 1;
    // let myTime = 120;
    // myTime = myTime - numberOfSeconds;
    if (numberOfSeconds >= 0) {
      state.countTimer(numberOfSeconds);
    //   if (myTime % 3 === 0) {
    //     let random = Math.floor(Math.random() * 5 + 1);
    //     state.countTimer(numberOfSeconds);
    //     state.randomNumber(random);
    //   }
    } else {
      clearInterval(interval);
      //   navigation.navigate("GameOver");
    }
  };

  var interval = null;
  const start = () => {
    interval = setInterval(() => {
      startGame();
    }, 1000);
  };

  return (
    <View style={GameStyles.container}>
      <Text style={GameStyles.liveScore}>Live Score-{state.score}</Text>
      <View style={GameStyles.randomNumberContainer}>
        <Text style={GameStyles.randomNumber}>{state.randomNumber}</Text>
      </View>
      <View style={GameStyles.timerContainer}>
        <Text style={GameStyles.timer}>
          {minuteConvertor(state.timer)}:{secondsConvertor(state.timer)}
        </Text>
      </View>
      <View style={GameStyles.timerContainer}>
        <Text style={GameStyles.timeFormat}>
          {state.timeFormat[0]}:{state.timeFormat[1]}
        </Text>
      </View>
      <TouchableOpacity onPress={() => start()}>
        <Text style={GameStyles.button}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameLive;
