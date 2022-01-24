import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const percentageHeight = (percentage) => (SCREEN_HEIGHT * percentage) / 100;

const GameStyles = StyleSheet.create({
  container: {
    padding: percentageHeight(2),
  },
  liveScore: {
    fontWeight: "bold",
    fontSize: 20,
  },
  randomNumberContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: percentageHeight(30),
  },
  randomNumber: {
    fontSize: percentageHeight(20),
    fontWeight: "bold",
  },
  timerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: percentageHeight(10),
  },
  timer: {
    fontSize: percentageHeight(5),
    fontWeight: "bold",
  },
  timeFormat: {
    color: "blue",
    fontWeight: "bold",
    fontSize: percentageHeight(4),
  },
  button: {
    padding: percentageHeight(1),
    textAlign: "center",
    borderWidth: 1,
    fontSize: percentageHeight(2),
  },
});
export default GameStyles;
