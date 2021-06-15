import React from 'react';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native'

var screenWidth = Dimensions.get('window').width

export default function Notification({stateName}) {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Title title={`Check Vaccine Eligibility: ${stateName}`} style={{fontWeight:"bold", backgroundColor:"#6495ED"}}/>
        
        <Paragraph style={{padding:10, backgroundColor:"#d2f8d2"}}>Make sure to check your state's vaccine eligibility so that you can safely become vaccinated and help our community! </Paragraph>
        
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
