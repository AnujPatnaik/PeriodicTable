import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { RowItem } from '../components/RowItem';
import elements from '../data/Elements.json';
import { Entypo } from '@expo/vector-icons';
export default ({ navigation, route }) => {
  const params = route.params || {};
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'white' }}>
        <StatusBar barStyle="dark-content" />
        <FlatList
          data={elements}
          renderItem={({ item }) => {
            const selected = params.activeElement === item;
            return (
              <RowItem
                text={item}
                onPress={() => {
                  params.onChange(item)
                  navigation.pop()
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

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
