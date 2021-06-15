import React from 'react';

import Unorderedlist from 'react-native-unordered-list';

import {Text} from 'react-native'



export default function vaccineOrder({vaccineName}) {
  return (
    <Unorderedlist><Text>{vaccineName}</Text></Unorderedlist>
  )
}