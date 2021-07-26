import React, { Component } from 'react';
import { Text, View, StyleSheet, Pressable,ToastAndroid , Animated, ScrollView} from 'react-native';

const clearRipple = {
  borderless: true,
  color: '#FF00FF',
};

class History extends Component {
  render() {
    const { clearHistory,closeHistory , history, slideIn} = this.props;

    return (
      <View style={styles.historyComponent}>
       <Animated.View
          style={{
            ...styles.historyContainer,
            bottom: slideIn.interpolate({
              inputRange: [0, 1],
              outputRange: ['100%', '0%'],
            }),
          }}>
        <View style={styles.historyContainer}>
          <View style={styles.historyHeader}>
            <View style={styles.historyTextContainer}>
              <Text style={styles.historyText}>History</Text>
            </View>
            <Pressable
              style={styles.clearButton}
              android_ripple={clearRipple}
              onPress={clearHistory}>
              <Text style={styles.clearText}>Clear</Text>
            </Pressable>
          </View>

          <View style={styles.historyBody}>
         

         { 
           history.map((item,index)=>(
            <Text style={styles.historyBodyText}>
            {item.expression}={item.result}
            </Text>

          ))

         }
       
          </View>

          <Pressable style={styles.historyClose}
          onPress={closeHistory}
          android_ripple={{ color: '#FF00FF', borderless: true }}>
          
            <Text style={styles.historyCloseButton}>Close</Text>
          </Pressable>
        </View>
         </Animated.View>
        <View style={styles.historyTransparent}>
        <Text></Text></View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  historyComponent: {
    flex: 1,
  },

  historyTransparent: {
    flex: 1,
  },
  historyContainer: {
    flex: 9,
    backgroundColor: 'darkred',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  historyHeader: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
  },
  historyBody: {
    flex: 8, //borderWidth:1,
    //borderColor:'white',
  },
  historyBodyText:{
fontSize:24,
color:'white',

  },
  historyCloseButton: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    height: '100%',
  },
  historyClose: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: 'white',
  },
  historyText: {
    color: 'white',
    fontSize: 34,
    paddingLeft: 10,
    paddingTop: 5,
    //borderWidth:1,
    //borderColor:'white',
  },
  historyTextContainer: {
    flex: 7,
    justifyContent: 'center',
  },
  clearButton: {
    flex: 3,
    justifyContent: 'center',
  },
  clearText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    //   borderWidth:1,
    //borderColor:'white',
  },
});
export default History;
