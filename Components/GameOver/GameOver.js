import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { State } from '../../App';

const GameOver = () => {
    const state = useContext(State)
  return (
    <View>
      <Text>Game Over</Text>
    </View>
  );
};

export default GameOver;

