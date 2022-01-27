import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,Dimensions } from "react-native";
import ScreensComp from "./Screens/ScreensComp";
import React, { useEffect, useState } from "react";
export const State = React.createContext();
const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;
const percentageHeight = (percentage) => (SCREEN_HEIGHT * percentage) / 100;



export default function App() {
  let myScoreInitial = 0;
  let myInitialNoDisplayed = 0;  
  let myInitialNoZero = 0;
  let myInitialNoClicked = 0;
  const [myState, setMyState] = useState({ 
    myScore: myScoreInitial, 
    timer: null,
    timeFormat: ["mm", "ss"],
    totalNumbersDisplayed: 0,  
    totalNumbersClicked: 0, 
    totalZeroDisplayed: 0,
    countScore: countScore,
    countTimer: countTimer,
    getScore: getScore,
    totalNumbersDisplayedFunc: totalNumbersDisplayedFunc,
    totalNumbersClickedFunc: totalNumbersClickedFunc,
    totalZeroDisplayedFunc: totalZeroDisplayedFunc,
  });
   
  function countTimer(time) {
    setMyState({
      ...myState, 
      timer: time,  
    });  
  }
  
  function countScore(Score) {
    myScoreInitial = Score;
  } 
              
  function getScore() {
    setMyState({   
      ...myState,
      myScore: myScoreInitial,  
      totalNumbersDisplayed: myInitialNoDisplayed,
      totalNumbersClicked:myInitialNoClicked,  
      totalZeroDisplayed:myInitialNoZero
    });
  }
   
  function totalNumbersDisplayedFunc(numbers) { 
    myInitialNoDisplayed = numbers;   
  }
  function totalNumbersClickedFunc(clicked) { 
    myInitialNoClicked = clicked;  
  }
  function totalZeroDisplayedFunc(zeros) { 
    myInitialNoZero = zeros; 
  } 
   
  return (
    <> 
      <State.Provider value={myState}>
        <StatusBar style='dark' /> 
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
  }, 
}); 
 