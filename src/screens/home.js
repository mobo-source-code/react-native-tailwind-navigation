import React from 'react';

import {
    SafeAreaView,
    Text,
    View,
    Button
  } from 'react-native';
  

  const HomeScreen = ({navigation}) => {


    return (
      <SafeAreaView>
        <View className="flex justify-center items-center p-10">
            <Text className="text-center text-2xl mb-5">
                Home Screens
            </Text>
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </View>
      </SafeAreaView>
    );
  }
  
  
  
  export default HomeScreen;