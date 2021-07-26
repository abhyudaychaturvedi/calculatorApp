import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  StatusBar,
  ToastAndroid,
  Animated,
} from 'react-native';
import Screen from './Screen';
import Buttons from './Buttons';
import History from './History';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      result: '',
      actualExpression: '',
      history: [],
      isHistoryVisible: false,
      slideIn: new Animated.Value(0),
    };
  }
  addHistory = () => {
    const { expression, result, history } = this.state;
 

ToastAndroid.show(`Saved, ${expression}=${result}`, ToastAndroid.SHORT);

const expressionHistory ={
  expression:expression,
  result:result,
}
this.setState({
  history: [...history,expressionHistory]
}) 

  this.setState({
      expression: '',
      actualExpression: '',
      result: result
    });
  };

  openHistory = () => {
    console.log('history Openend');
    this.setState({
      isHistoryVisible: true,
    });
  };
  closeHistory = () => {
    console.log('history closed');
    this.setState({
      isHistoryVisible: false,
    });
  };
  slideIn = () => {
      this.openHistory();
      Animated.timing(this.state.slideIn, {
        toValue: 1,
        duration: 500,
      }).start()
    }

    slideOut = () => {
      Animated.timing(this.state.slideIn, {
        toValue: 0,
        duration: 500,
      }).start(() => {
        this.closeHistory()
      })
    }

  clearHistory = () => {
    console.log('clearhistory');
    ToastAndroid.show('History Cleared !', ToastAndroid.SHORT);
    this.setState({
      history: [],
    });
  };

  getPressedButtonValue = (buttonPressed) => {
    const { expression, actualExpression, result } = this.state;
    /*
    if (expression === 'Calculator') {
      this.setState({
        expression: '',
        result: '',
      });
    }
*/
//let newexpression = `${expression==='Calculator' ? '' : expression}${buttonPressed}`;
    let newExpression = `${expression}${buttonPressed}`;
    this.setState({
      expression: newExpression,
    });

    let actualCharacter = buttonPressed;
    if (buttonPressed === '÷') {
      actualCharacter = '/';
    } else if (buttonPressed === '×') {
      actualCharacter = '*';
    } else if (buttonPressed === '−') {
      actualCharacter = '-';
    }

    let newActualExpression = `${actualExpression}${actualCharacter}`;

    this.setState({
      actualExpression: newActualExpression,
    });

    try {
      this.setState({
        result: eval(newActualExpression).toString(),
      });
    } catch (e) {
      console.log(e);
    }
  };

  allClear = () => {
    ToastAndroid.show('ALL CLEARED !', ToastAndroid.SHORT,ToastAndroid.TOP)
    this.setState({
      expression: '',
      //expression: 'Calculator',
      actualExpression: '',
      result: '',
    });
    console.log('AC called');
  };

  deleteCharacter = () => {
    const { expression, actualExpression } = this.state;

    const slicedExpression = expression.slice(0, expression.length - 1);
    const slicedActualExpression = actualExpression.slice(
      0,
      expression.length - 1
    );

    this.setState({
      expression: slicedExpression,
      actualExpression: slicedActualExpression,
    });

    if (slicedActualExpression === '') {
      this.setState({
        result: '',
        // expression: 'Calculator',
      });
    }
    try {
      this.setState({
        result: eval(slicedActualExpression).toString(),
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { expression, result, isHistoryVisible,history,slideIn } = this.state;
    return (
      <View style={styles.calculatorComponent}>
        <StatusBar barStyle="light-content" backgroundColor="darkred" />
        {isHistoryVisible ? (
          <View style={styles.historyWrapper}>
            <History
              clearHistory={this.clearHistory}
              closeHistory={this.slideOut}
              history={history}
              slideIn={slideIn}
            />
          </View>
        ) : null}
        <Screen expression={expression} result={result} />
        <Buttons
          getPressedButtonValue={this.getPressedButtonValue}
          allClear={this.allClear}
          deleteCharacter={this.deleteCharacter}
          openHistory={this.slideIn}
          addHistory={this.addHistory}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculatorComponent: {
    flex: 1,
    // borderColor:'red',
    // borderWidth:1,
  },
  historyWrapper: {
    backgroundColor: '#00000061',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 10,
    zIndex: 3,
  },
});

export default Calculator;
