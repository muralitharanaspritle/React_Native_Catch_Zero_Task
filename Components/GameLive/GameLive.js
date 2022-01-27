import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import GameStyles from "../GameStyles";
import { State } from "../../App";
import { useNavigation } from "@react-navigation/native";

const GameLive = () => {
  const state = useContext(State);
  const [randomNumber, setRandomNumber] = useState(null);
  const [Score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [clickedNumber, setClickedNumber] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isZero, setIsZero] = useState(false);
  const [totalNumbersDisplayed, setTotalNumbersDisplayed] = useState(0);
  const [totalNumbersClicked, setTotalNumbersClicked] = useState(0);
  const [totalZeroDisplayed, setTotalZeroDisplayed] = useState(0);
  const [isWrong, setIsWrong] = useState("black");

  const navigation = useNavigation();
  let numberOfSeconds = 120;
  let randomCreater = null;
  var interval = null;

  useEffect(() => {
    state.countScore(Score);
  }, [Score]);

  useEffect(() => {
    if (gameStarted && isCompleted) {
      console.log(
        `Ramdom = ${randomNumber}, isclicked-${isClicked},clickednumber:${clickedNumber},score:${Score}}`
      );

      score();
      setIsCompleted(false);
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

  const score = () => {
    setIsWrong("black");
    if (isClicked === false && isZero === true) {
      // -3points
      setScore((prevState) => prevState - 3);
      setIsZero(false);
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
      setIsZero(false);
      setIsClicked(false);
    } else if (
      isClicked === true &&
      isZero === false &&
      clickedNumber !== null
    ) {
      // -2.5points
      setScore((prevState) => prevState - 2.5);
      setIsClicked(false);
    }else{
      console.log("nothing")
    }
  };

  const clicked = (clickedNumber) => {
    setTotalNumbersClicked((prevState) => prevState + 1);
    if (clickedNumber !== null) {
      setIsClicked(true);
      setClickedNumber(clickedNumber);
    }

    if (clickedNumber !== 0) {
      setIsWrong("red");
    }
  };

  const gameTimer = () => {
    if (numberOfSeconds % 3 === 0) {
      randomCreater = Math.floor(Math.random() * (5 - 0));
      setRandomNumber(randomCreater);
      if (randomCreater === 0) {
        setIsZero(true);
        setTotalZeroDisplayed((prevState) => prevState + 1);
      } else {
        setIsZero(false);
      }
      setTotalNumbersDisplayed((prevState) => prevState + 1);
      // console.log("Game timer ", randomCreater);
      setTimeout(() => {
        setRandomNumber(null);
        setIsCompleted(true);
      }, 2000);
    }

    if (numberOfSeconds >= 0) {
      state.countTimer(numberOfSeconds);
    } else {
      state.getScore();
      clearInterval(interval);
      navigation.navigate("GameOver");
    }
    numberOfSeconds = numberOfSeconds - 1;
  };

  const start = () => {
    setGameStarted(true);
    gameTimer();
    interval = setInterval(() => {
      gameTimer();
    }, 1000);
  };

  return (
    <View style={GameStyles.container}>
      <Text style={[GameStyles.liveScore, { color: isWrong }]}>
        Live Score: {Score}
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
      <TouchableOpacity onPress={() => start()}>
        <Text style={[GameStyles.button, { opacity: gameStarted ? 0.2 : 1 }]}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GameLive;
