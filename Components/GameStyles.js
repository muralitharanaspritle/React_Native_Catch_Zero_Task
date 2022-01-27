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
    marginBottom:percentageHeight(10)
  },
  randomNumber: {
    fontSize: percentageHeight(20),
    fontWeight: "bold",
    
  },
  timerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  timer: {
    fontSize: percentageHeight(5),
    fontWeight: "bold",
  },
  timeFormat: {
    color: "blue",
    fontWeight: "bold",
    fontSize: percentageHeight(4),
    opacity:0.4
  },
  button: {
    padding: percentageHeight(1),
    textAlign: "center", 
    borderWidth: 1,
    fontSize: percentageHeight(2.5),
    fontWeight:"bold",
    marginTop:percentageHeight(5)
  },
  gameOverText:{
    fontSize:percentageHeight(4),
    fontWeight:"bold",
    alignSelf:"center",
    color:"red"
  },
  scoreText:{
    fontSize:percentageHeight(4),
    fontWeight:"bold",
    alignSelf:"center",
    color:"green"
  },
  totalView:{
    borderWidth:2,
    borderRadius:10,
    padding:percentageHeight(5),
    marginTop:percentageHeight(10)
  },
  totalText:{
    fontSize:percentageHeight(2.5),
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:percentageHeight(1)
  }
});
export default GameStyles;
