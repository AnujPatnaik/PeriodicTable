import React, {useState, useCallback } from 'react';

import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Linking,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from 'react-native';
import ElementRow from '../components/ElementRow';
import Notification from '../components/Notification';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


export default ({ navigation, route }) => {
  return (
    <View>
    <Text> 'Anuj'</Text>
    </View>
  );
};


