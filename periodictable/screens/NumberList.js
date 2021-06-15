import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  StyleSheet,
} from 'react-native';

import { RowItem } from '../components/RowItem';

import { Entypo } from '@expo/vector-icons';
import numbers from '../data/Numbers.json';

export default ({ navigation, route }) => {
  const params = route.params || {};

  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'white' }}>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={numbers}
          renderItem={({ item }) => {
            const selected = params.activeState === item;
            return (
              <RowItem
                text={item}
                onPress={() => {
                  params.onChange(item);
                  navigation.pop();
                }}
                rightIcon={
                  selected && (
                    <View style={styles.icon}>
                      <Entypo name="check" size={20} color="white" />
                    </View>
                  )
                }
              />
            );
          }}
          keyExtractor={(item) => item}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
