import React from 'react';
import {ScrollView, Text} from 'react-native';

const AppPro = () => {
  return (
    <ScrollView>
      <Text
        style={{
          fontSize: 80,
          textAlign: 'center',
          marginTop: 50,
          lineHeight: 135,
        }}>
        hi, there people
      </Text>
    </ScrollView>
  );
};

export default AppPro;
