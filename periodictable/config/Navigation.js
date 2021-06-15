import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Entypo}  from '@expo/vector-icons';

import Home from '../screens/Home';

import ElementList from "../screens/ElementList"
import ResultsPage from "../screens/ResultPage"
import NumberList from "../screens/NumberList"
 
import colors from '../constants/Colors';
const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={({ navigation, route }) => ({
        itemSelected: route.params && route.params.itemSelected,
        headerShown:false
      })}
    />
    
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator mode="modal">
    <ModalStack.Screen
      name="Home"
      component={MainStackScreen}
      options={({ navigation, route }) => ({
        itemSelected: "HOOHAA",
        headerShown:false
      })}
    />
    <ModalStack.Screen
      name="ElementList"
      component={ElementList}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
    <ModalStack.Screen
      name="NumberList"
      component={NumberList}
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
     <ModalStack.Screen
      name="Query Results"
      component={ResultsPage}
      options={({ navigation, route }) => ({
        
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);