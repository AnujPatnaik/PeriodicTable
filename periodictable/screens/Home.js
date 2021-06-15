import React, { useState, useCallback, TextInput } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import { Input } from '../components/Input';
import ElementList from './ElementList';
var PeriodNumber = "";
var ElementNumber = "";
var Lengthoftext = "";
var ElementInitals = "";
var AtomicMass = "";
var AtomicElement = "";
var arr ={};
var a = "";
var caseElement = "";
var ElementName = "";
var GroupNumber = "";
const screenWidth = Dimensions.get('window').width;
const m = new Map();
m.set('1', 'hydrogen;1.008');
m.set('2', 'helium;4.0026');
m.set('3', 'lithium;6.94');
m.set('4', 'beryllium;9.0122');
m.set('5', 'boron;10.81');
m.set('6', 'carbon;12.011');
m.set('7', 'nitrogen;14.007');
m.set('8', 'oxygen;15.999');
m.set('9', 'flourine;18.998');
m.set('10', 'neon;20.180');
m.set('11', 'sodium;22.990');
m.set('12', 'magnesium;24.305');
m.set('13', 'aluminum;26.982');
m.set('14', 'silicon;28.085');
m.set('15', 'phosphorus;30.974');
m.set('16', 'sulfur;32.06'); 
m.set('17', 'chlorine;35.45');
m.set('18', 'argon;39.948');
m.set('19', 'potassium;39.098');
m.set('20', 'Calcium;40.078');
const m1 = new Map();
m1.set('hydrogen', '1;1.008');
m1.set('helium', '2;4.0026');
m1.set('lithium', '3;6.94');
m1.set('beryllium', '4;9.0122');
m1.set('boron', '5;10.81');
m1.set('carbon', '6;12.011');
m1.set('nitrogen', '7;14.007');
m1.set('oxygen', '8;15.999');
m1.set('flourine', '9;18.998');
m1.set('neon', '10;20.180');
m1.set('sodium', '11;22.990');
m1.set('magnesium', '12;24.305');
m1.set('aluminum', '13;26.982');
m1.set('silicon', '14;28.085');
m1.set('phosphorus', '15;30.974');
m1.set('sulfur', '16;32.06');
m1.set('chlorine', '17;35.45');
m1.set('argon', '18;39.948');
m1.set('potassium', '19;39.098');
m1.set('calcium', '20;40.078');
const m2 = new Map();
m2.set('h', '1');
m2.set('he', '2');
m2.set('li', '3');
m2.set('be', '4');
m2.set('b', '5');
m2.set('c', '6');
m2.set('n', '7');
m2.set('o', '8');
m2.set('f', '9');
m2.set('ne', '10');
m2.set('na', '11');
m2.set('mg', '12');
m2.set('al', '13');
m2.set('si', '14');
m2.set('p', '15');
m2.set('s', '16');
m2.set('cl', '17');
m2.set('ar', '18');
m2.set('k', '19');
m2.set('ca', '20');
const m3 = new Map();
m3.set('hydrogen', 'H');
m3.set('helium', 'He');
m3.set('lithium', 'Li');
m3.set('beryllium', 'Be');
m3.set('boron', 'B');
m3.set('carbon', 'C');
m3.set('nitrogen', 'N');
m3.set('oxygen', 'O');
m3.set('flourine', 'F');
m3.set('neon', 'N');
m3.set('sodium', 'Na');
m3.set('magnesium', 'Mg');
m3.set('aluminum', 'Al');
m3.set('silicon', 'Si');
m3.set('phosphorus', 'P');
m3.set('sulfur', 'S');
m3.set('chlorine', 'Cl');
m3.set("argon","Ar")
m3.set("potassium","K")
m3.set("calcium","Ca")
const m4 = new Map();
m4.set("1","1")
m4.set("hydrogen","1")
m4.set("h","1")
m4.set("sodium","1")
m4.set("na","1")
m4.set("lithium","1")
m4.set("li","1")
m4.set("3","1")
m4.set("11","1")
m4.set("potassium","1")
m4.set("19","1")
m4.set("k","1")
export default ({ navigation, route }) => {
  var [baseElement, setBaseElement] = useState('');
  var [text, onChangeText] = React.useState(null);
  var [baseNumber, setbaseNumber] = useState('');
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../assets/logo.png')} style={styles.image} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.text}>Elements</Text>
        </View>
        <View style={{ height: 10 }}></View>
        <Text style={styles.text}>Number or Element</Text>
        <Input
          placeholder="Number/Text"
          onChangeText={onChangeText}
          value={text}
        />
        <View>
          <Text
            style={{
              alignItems: 'flex-start',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            Name of Element:
          </Text>
        </View>
        <View style={{ height: 10 }}></View>
        <View style={{ flexDirection: 'column' }}>
          <Input
            placeholder="Element"
            onFocus={() =>
              navigation.navigate('ElementList', {
                title: 'List of Elements',
                activeElement: { baseElement },
                onChange: (value) => setBaseElement(value),
              })
            }
            value={baseElement}
          />
          <View
            style={{ justifyContent: 'center', alignItems: 'center' }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
          }}></View>
        <View style={{ height: 5 }}>
          <Text
            style={{
              alignItems: 'flex-start',
              fontSize: 15,
              marginLeft: 10,
              fontWeight: 'bold',
            }}></Text>
          <View style={{ height: 5 }}></View>
        </View>
        <Text style={styles.text}>Element Number</Text>
        <Input
          placeholder="Number"
          onFocus={() =>
            navigation.push('NumberList', {
              title: 'List of Numbers',
              activeState: null,
              onChange: (value) => setbaseNumber(value),
            })
          }
          value={baseNumber}
        />
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
                if (text != null) {
                  baseElement = ""
                  baseNumber = ""
                  a = text.toLowerCase()
                  caseElement = a.trim();
                  if (parseInt(caseElement) == Number(caseElement)) {
                    if (m4.get(caseElement)== undefined){
                        GroupNumber = "n/a"
                      }
                      else{
                        GroupNumber = m4.get(caseElement)
                      }
                    AtomicElement = m.get(caseElement)
                    if (AtomicElement != null){
                    arr = AtomicElement.split(";")
                    AtomicMass = arr[1]
                    ElementName = arr[0]
                    }
                    ElementInitals = m3.get(ElementName)
                    if (Number(caseElement) <= 2) {
                      PeriodNumber = 1;
                    } else if (Number(caseElement) <= 10) {
                      PeriodNumber = 2;
                    } else if (Number(caseElement) <= 18) {
                      PeriodNumber = 3;
                    } else if (Number(caseElement) <= 36) {
                      PeriodNumber = 4;
                    } else if (Number(caseElement) <= 54) {
                      PeriodNumber = 5;
                    }
                    Alert.alert("Element:" + ElementName +",Element Initial: "+ ElementInitals +",Period Number: " + PeriodNumber + ", Atomic Mass:"+ AtomicMass + ",Group Numbeer:" + GroupNumber);
                  } else {
                      Lengthoftext = caseElement.length;
                      if (Lengthoftext <= 2) {
                        ElementNumber = m2.get(caseElement)
                        AtomicElement = m.get(ElementNumber)
                        if(AtomicElement!= null){
                        arr = AtomicElement.split(";")
                        AtomicMass = arr[1]
                        ElementName = arr[0]
                        }
                        if (m4.get(ElementName)!= undefined){
                          GroupNumber = "n/a"
                        }
                        else{
                          GroupNumber = m4.get(ElementName)
                        }
                         if (Number(ElementNumber) <= 2) {
                            PeriodNumber = 1;
                    }   else if (Number(ElementNumber) <= 10) {
                            PeriodNumber = 2;
                    }   else if (Number(ElementNumber) <= 18) {
                            PeriodNumber = 3;
                    }   else if (Number(ElementNumber) <= 36) {
                            PeriodNumber = 4;
                    }   else if (Number(ElementNumber) <= 54) {
                            PeriodNumber = 5;
                    }
                        Alert.alert('Element Name:'+ElementName+',Atomic Number:' +ElementNumber +',Period Number: ' +PeriodNumber +',Atomic Mass:' + AtomicMass);
                        }
                    else{
                      if (m4.get(caseElement)== undefined){
                        GroupNumber = "n/a"
                      }
                      else{
                        GroupNumber = m4.get(caseElement)
                      }
                        ElementInitals = m3.get(caseElement)
                        AtomicElement = m1.get(caseElement)
                        if(AtomicElement != null){
                        arr = AtomicElement.split(";")
                        AtomicMass = arr[1]
                        ElementNumber = arr[0]
                      }
                      if (Number(ElementNumber) <= 2) {
                            PeriodNumber = 1;
                    }   else if (Number(ElementNumber) <= 10) {
                            PeriodNumber = 2;
                    }   else if (Number(ElementNumber) <= 18) {
                            PeriodNumber = 3;
                    }   else if (Number(ElementNumber) <= 36) {
                            PeriodNumber = 4;
                    }   else if (Number(ElementNumber) <= 54) {
                            PeriodNumber = 5;
                    }       
                      Alert.alert("Element Initals: " + ElementInitals + ",Atomic Number: " + ElementNumber + ",Period Number:" + PeriodNumber + ",Group Number:" + GroupNumber)
                  }

                }
                }
              if (baseNumber != ""){
                baseElement = ""
                if (m4.get(baseNumber) == undefined){
                  GroupNumber = "n/a"
                }
                else{
                  GroupNumber = m4.get(baseNumber)
                }
                AtomicElement = m.get(baseNumber)
                if (AtomicElement != null){
                arr = AtomicElement.split(";")
                AtomicMass = arr[1]
                ElementName = arr[0]
                }
                ElementInitals = m3.get(ElementName)
              if (Number(baseNumber)<=2){
                  PeriodNumber = 1
                }
              else if(Number(baseNumber)<=10){
                  PeriodNumber = 2
                }
              else if(Number(baseNumber)<=18){
                  PeriodNumber = 3
                }
              else if(Number(baseNumber)<=36){
                PeriodNumber = 4
                }
              else if(Number(baseNumber)<=54){
                  PeriodNumber = 5
                }
              if (baseNumber != ""){
                Alert.alert("Element Name: " + ElementName + ",Element Initials: " + ElementInitals + ",Period Number: " + PeriodNumber + ",Atomic Mass:" + AtomicMass + ",Group Number: " + GroupNumber)
              }
              }
              if (baseElement!= null){
                a = baseElement.toLowerCase()
                caseElement = a.trim()
                ElementInitals = m3.get(caseElement)
                AtomicElement = m1.get(caseElement)
                if(AtomicElement != null){
                  arr = AtomicElement.split(";")
                  ElementNumber = arr[0]
                  AtomicMass = arr[1]
                }
                if (Number(ElementNumber)<=2){
                  PeriodNumber = 1
                }
              else if(Number(ElementNumber)<=10){
                  PeriodNumber = 2
                }
              else if(Number(ElementNumber)<=18){
                  PeriodNumber = 3
                }
              else if(Number(ElementNumber)<=36){
                PeriodNumber = 4
                }
              else if(Number(ElementNumber)<=54){
                  PeriodNumber = 5
                }
              if (baseElement != ""){
              Alert.alert("Element Initials: "+ElementInitals+",Atomic Number:" + ElementNumber + ",Period Number:" + PeriodNumber + ",Atomic Mass: "+ AtomicMass)
              }
              }
              } //onpress
            }>
            <Text style={styles.button}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 20 }}></View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 425,
    marginTop: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'black',
    paddingTop: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },

  touch: {
    height: 40,
    width: screenWidth * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    backgroundColor: 'white',
  },
  button: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
