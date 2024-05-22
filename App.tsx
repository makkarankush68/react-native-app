import React, {useEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppPro from './AppPro';

function App(): React.JSX.Element {
  const BKpress = () => {
    Alert.alert(
      'Exit App',
      'Do you want to exit?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ],
      {cancelable: false},
    );
    return true;
  };
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', BKpress);
    setInterval(() => {
      setDate(new Date());
      // Alert.alert(date.getTime.toString());
      // Alert.alert('ya');
    }, 1000);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', BKpress);
    };
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.viw}>
        <ScrollView>
          <Text style={styles.text}>hi 👋</Text>
          <Text style={styles.text}>i'm</Text>
          <Text style={styles.text}>ankush</Text>
          <Text style={styles.text}>makkar</Text>
        </ScrollView>
      </View>

      <View style={styles.btn}>
        <Text style={styles.date}>{date.toLocaleTimeString()}</Text>
        <Button
          onPress={() => {
            Alert.alert('hi');
            setTimeout(() => {
              Alert.alert('bye');
            }, 1000);
            setTimeout(() => {
              BackHandler.exitApp();
            }, 2000);
          }}
          title="hi bye"
        />
        <Button onPress={BKpress} title="exit" />
      </View>
      <View style={styles.pro}>
        <AppPro />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    height: 765,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 105,
  },
  date: {
    fontSize: 40,
  },
  viw: {
    flex: 3,
    // height: 350,
    backgroundColor: 'purple',
    overflow: 'hidden',
    paddingVertical: 10,
  },
  btn: {
    // height: 200,
    flex: 2.1,
    // marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    gap: 10,
  },
  pro: {
    flex: 2.1,
  },
});

export default App;
