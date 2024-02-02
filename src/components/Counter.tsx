import {Button, StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';

type CounterProps = {
  start: number;
  step: number;
};

const Counter = ({start, step}: CounterProps) => {
  const [count, setCount] = useState<number>(start);

  const handleIncrease = () => {
    const result = setCount(count + step);
    if(count > 250){
      Alert.alert("Yavaş!", "Sayı 250 üstü!");
    }
    return result;
  };
  const handleDecrease = () => {
    if(count < 0) Alert.alert("Dikkat!", "Sayı Negatif!");
    return setCount(count - step)
  };

  return (
    <View
      style={[
        styles.container,
        count > 0 ? {borderColor: 'green'} : {borderColor: 'red'},
      ]}>
      <Text
        style={[
          styles.countText,
          count > 0 ? {color: 'green'} : {color: 'red'},
        ]}>
        {count}
      </Text>
      <Text>
        Step Value: +{step}/-{step}
      </Text>
      <Button title="Increase" onPress={handleIncrease} />
      <Button title="Decrease" onPress={handleDecrease} />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderWidth: 5,
    padding: 20,
    borderRadius: 20,
  },

  countText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
