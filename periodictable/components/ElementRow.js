import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

import vaccineOrder from './ElementOrderPoint'

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import { AntDesign } from '@expo/vector-icons';

import { format } from 'date-fns';

import Unorderedlist from 'react-native-unordered-list';

export default function VaccineRow({
  name,
  url,
  vaccineName,
  
  address,
  onPress,
}) {
  const screenWidth = Dimensions.get('window').width;
  const date = new Date();

  const AvailableVaccines = ({data}) => {
    if (data == null) {
      return (
        <vaccineOrder text="None"/>
      )
    } else {
      data.map((item) => {
        if (item == true) {
          <vaccineOrder text="None"/>

        }
      }

      )
    }
  }
  
  return (
    <View style={{ marginBottom: 10 }}>
      <ScrollView>
        <Card>
          <Card.Content>
            <Title style={{ fontSize: 25 }}>
              {name}: {vaccineName} {address}
            </Title>

            <View style={{ flexDirection: 'row' }}>
              <Paragraph
                style={{
                  fontSize: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: 15,
                }}>{`Updated ${format(date, 'MMMM do yyyy')}`}</Paragraph>
              <View style={{justifyContent:"center", alignItems:"center", paddingLeft:10}}>
                <AntDesign name="checkcircleo" size={24} color="black" />
              </View>
            </View>
            <Paragraph style={{fontSize:24, paddingTop:15}}>Available Vaccines: </Paragraph>
            
            
            
            <Paragraph>
              <View style={{ backgroundColor: '#ffc1c1', borderRadius: 5 }}>
                <TouchableOpacity
                  style={{ width: screenWidth * 0.75, padding: 15 }}
                  onPress={onPress}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 24 }}>Visit {name}</Text>
                    <AntDesign
                      name="arrowright"
                      size={24}
                      color="black"
                      style={{ justifyContent: 'center', alignItems: 'center' }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
}
