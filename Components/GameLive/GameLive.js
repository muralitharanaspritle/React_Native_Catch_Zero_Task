import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GameStyles from "../GameStyles";
import { State } from "../../App";
import { useNavigation } from "@react-navigation/native";

const GameLive = () => {
  const state = useContext(State);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const [isZero, setIsZero] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedNumber, setClickedNumber] = useState(null); 
  const [wrongClickColor, setWrongClickColor] = useState("black");
  const [isCompleted, setIsCompleted] = useState(false);
  const [totalNumbersDisplayed, setTotalNumbersDisplayed] = useState(0);
  const [totalNumbersClicked, setTotalNumbersClicked] = useState(0);
  const [totalZeroDisplayed, setTotalZeroDisplayed] = useState(0);
  const [newInterval, setNewInterval] = useState(null);
  const navigation = useNavigation();
  const INTERVAL_TIME = 1000; //in millisecond
  const INTERVAL_BETWEEN_TWO_RANDOM_NUMBER = 3 //seconds
  let numberOfSeconds = 120;
  let randomCreater = null;
  

  useEffect(() => {
    state.countScore(score);
  }, [score]);

  useEffect(() => {
    if (isGameStarted && isCompleted) {
      console.log(
        `Ramdom = ${randomNumber}, isclicked-${isClicked},clickednumber:${clickedNumber},score:${score}}`
      );
      scoreCalculation();
      setIsCompleted(false);
      setClickedNumber(null);
      state.totalNumbersDisplayedFunc(totalNumbersDisplayed);
      state.totalNumbersClickedFunc(totalNumbersClicked);
      state.totalZeroDisplayedFunc(totalZeroDisplayed);
    }
  }, [randomNumber]);

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

  const scoreCalculation = () => {
    setWrongClickColor("black")
    if (isClicked === false && isZero === true) {
      // -3points
      setScore((prevState) => prevState - 3);
    } else if (
      isClicked === false &&
      isZero === false &&
      randomNumber !== null
    ) {
      // +1 points
      setScore((prevState) => prevState + 1);
    } else if (isClicked === true && isZero === true) {
      // +5 points
      setScore((prevState) => prevState + 5);

      setIsClicked(false);
    } else if (
      isClicked === true &&
      isZero === false
    ) {
      // -2.5points
      setScore((prevState) => prevState - 2.5);
      setIsClicked(false);
    } else {
      console.log("nothing ");
    }
  };

  const clicked = (clickedNumber) => {
    setTotalNumbersClicked((prevState) => prevState + 1);
    if (clickedNumber !== null) {
      setIsClicked(true);
      setClickedNumber(clickedNumber);
    }

    if (clickedNumber !== 0) {
      setWrongClickColor("red")
    }
  };

  const gameTimer = () => {
    if (numberOfSeconds % INTERVAL_BETWEEN_TWO_RANDOM_NUMBER === 0) {
      randomCreater = Math.floor(Math.random() * (5 - 0));
      setRandomNumber(randomCreater);
      if (randomCreater === 0) {
        setIsZero(true);
        setTotalZeroDisplayed((prevState) => prevState + 1);
      } else {
        setIsZero(false);
      }
      setTotalNumbersDisplayed((prevState) => prevState + 1);
      setTimeout(() => {
        setRandomNumber(null);
        setIsCompleted(true);
      }, 2000);
    }
    if (numberOfSeconds >= 0) {
      state.countTimer(numberOfSeconds);
    } else {
      clearInterval(newInterval);
      state.getScore();
      setIsGameStarted(false);
      navigation.navigate("GameOver");
    }
    numberOfSeconds = numberOfSeconds - 1; 
  };

  const start = () => {
    setIsGameStarted(true);
    gameTimer();
    setNewInterval(
      setInterval(() => {
        gameTimer();
      }, INTERVAL_TIME)
    );
  };

  const stop = () => {
    setIsGameStarted(false);
    clearInterval(newInterval);
    navigation.navigate("GameOver");
  };
  return (
    <View style={GameStyles.container}>
      <Text style={[GameStyles.liveScore, { color: wrongClickColor }]}>
        Live Score: {score}
      </Text>
      <TouchableOpacity
        style={GameStyles.randomNumberContainer}
        onPress={() => clicked(randomNumber)}
      >
        <Text style={GameStyles.randomNumber}>{randomNumber}</Text>
      </TouchableOpacity>
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
 
      {isGameStarted ? (
        <TouchableOpacity onPress={() => stop()}>
          <Text style={[GameStyles.stopButton]}>Stop</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => start()}>
          <Text style={[GameStyles.startButton]}>Start</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GameLive;
