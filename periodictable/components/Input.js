import React from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
  TouchableOpacity,
  Alert,
  Text,
  Dimensions,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export const Input = ({ placeholder, onFocus, name, navigation,route, ...props }) => {
  return (
    <View style={styles.container}>
      
      <Entypo name={name} size={24} color="black" style={styles.icon}/>
      
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onFocus={onFocus}
        {...props}
      />
      
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const textWidth = screenWidth *0.8;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"blue",
    marginVertical:10,
    marginHorizontal:20,
    borderRadius:9,
    flexDirection:"row",
    width:screenWidth*0.9+5
  },
  input: {
    
    margin: 5,
    

    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 10,
    fontSize: 24,
  },
  icon: {
    justifyContent:"center",
    alignItems:"center",
    paddingTop:15,
    paddingLeft:5
  }
});
