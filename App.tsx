import React, {useEffect} from 'react';
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
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', BKpress);
  });
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
        <Button
          onPress={() => {
            Alert.alert('hi');
            setTimeout(() => {
              Alert.prompt('bye');
            }, 1000);
            setTimeout(() => {
              BackHandler.exitApp();
            }, 2000);
          }}
          title="hi bye"
        />
        <Button onPress={BKpress} title="exit" />
      </View>
      <AppPro />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 120,
  },
  main: {
    backgroundColor: 'black',
    height: 870,
  },
  btn: {
    height: 200,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    gap: 10,
  },
  viw: {
    height: 350,
    backgroundColor: 'purple',
    overflow: 'hidden',
    paddingVertical: 10,
  },
});

export default App;
