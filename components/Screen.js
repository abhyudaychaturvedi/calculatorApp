import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

class Screen extends Component {
  render() {
    const {
      expression,
      result,
    }= this.props
    return (
      <View style={styles.screenComponent}>
        <Text style={styles.expression}>
        {expression}
        </Text>
        <Text style={styles.result}>
      {result}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenComponent: {
    flex: 3,
    //borderColor: 'red',
    //borderWidth: 1,
    backgroundColor: 'skyblue',
  },
  expression: {
    fontSize: 36,
    color: 'red',
    //  borderColor: 'yellow',
   // borderWidth: 1,
    padding: 8,
    textAlign: 'right',
  },
  result: {
    fontSize: 26,
    color: 'darkgreen',
    // borderColor: 'yellow',
    //borderWidth: 1,
    padding: 9,
    textAlign: 'right',
  },
});

export default Screen;
