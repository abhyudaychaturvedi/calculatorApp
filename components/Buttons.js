import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

const bttnRipple = {
  color: 'pink',
  borderless: true,
};
const bttnRippleRightSide = {
  color: 'orange',
  borderless: true,
};

class Buttons extends Component {
  render() {
    const { getPressedButtonValue, allClear, deleteCharacter,openHistory ,addHistory} = this.props;
    return (
      <View style={styles.buttonComponent}>
        <View style={styles.leftSideButtons}>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={allClear}>
            <Text style={styles.buttonText}>AC</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton}
           android_ripple={bttnRipple}
           onPress={deleteCharacter}
           >

            <Text style={styles.buttonText}>DEL</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('%');
            }}>
            <Text style={styles.buttonText}>%</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('7');
            }}>
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('8');
            }}>
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('9');
            }}>
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('4');
            }}>
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('5');
            }}>
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('6');
            }}>
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('3');
            }}>
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('2');
            }}>
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('1');
            }}>
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable style={styles.leftSideButton} android_ripple={bttnRipple}
          onPress={openHistory}
          >
            <Text style={styles.buttonText}>H</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('0');
            }}>
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
          <Pressable
            style={styles.leftSideButton}
            android_ripple={bttnRipple}
            onPress={() => {
              getPressedButtonValue('.');
            }}>
            <Text style={styles.buttonText}>.</Text>
          </Pressable>
        </View>

        <View style={styles.rightSideButtons}>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={bttnRippleRightSide}
            onPress={() => {
              getPressedButtonValue('÷');
            }}>
            <Text style={styles.buttonTextRight}>÷</Text>
          </Pressable>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={bttnRippleRightSide}
            onPress={() => {
              getPressedButtonValue('×');
            }}>
            <Text style={styles.buttonTextRight}>×</Text>
          </Pressable>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={bttnRippleRightSide}
            onPress={() => {
              getPressedButtonValue('−');
            }}>
            <Text style={styles.buttonTextRight}>−</Text>
          </Pressable>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={bttnRippleRightSide}
            onPress={() => {
              getPressedButtonValue('+');
            }}>
            <Text style={styles.buttonTextRight}>+</Text>
          </Pressable>
          <Pressable
            style={styles.rightSideButton}
            android_ripple={bttnRippleRightSide}
            onPress={addHistory}
            >
            <Text style={styles.equalsButton}>=</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonComponent: {
    flex: 7,
    //borderColor: 'red',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  leftSideButtons: {
    //    borderColor: 'black',
    // borderWidth: 1,
    flex: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rightSideButtons: {
    //  borderColor: 'black',
    // borderWidth: 1,
    flex: 2,
  },
  leftSideButton: {
    width: '33.33%',
    //borderColor: 'green ',
    //  borderWidth: 1,
    justifyContent: 'center',
    height: '20%',
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
    //borderColor: 'orange',
    //borderWidth: 1,
    textAlign: 'center',
  },
  buttonTextRight: {
    fontSize: 30,
    color: 'white',
    //  borderColor: 'orange',
    //borderWidth: 1,
    textAlign: 'center',
    backgroundColor: '#a17944',
    borderRadius: 40,
    height: 67,
    padding: 10,
    marginTop: 2,
  },
  rightSideButton: {
    height: '20%',
    // borderColor: 'green ',
    // borderWidth: 1,
    justifyContent: 'center',
  },
  equalsButton: {
    fontSize: 30,
    color: 'white',
    //  borderColor: 'orange',
    //borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'darkred',
    borderRadius: 40,
    height: 67,
    padding: 10,
    marginTop: 2,
  },
});

export default Buttons;
