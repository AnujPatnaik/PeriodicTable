import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View}  from 'react-native';



import colors from '../constants/Colors';
const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  seperator: {
    borderBottomColor: colors.borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
});

export const RowItem = ({ text, rightIcon, onPress }) => {
  
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text> 
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeperator = () => {
  return (
    <View style={styles.seperator} />
  )
}

