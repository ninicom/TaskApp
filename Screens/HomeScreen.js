import * as React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';

function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.search}>
          <MaterialCommunityIcons name="magnify" size={24} color="gray" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Tìm kiếm..."
          /> 
        </View>        
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name="format-list-checkbox" size={24} color="#A58EFF" />
        </TouchableOpacity>
      </View> 
      <ScrollView style={styles.body}>
        <View>
          <View style={styles.textTittle}>Next to you</View>
          <View>

          </View>
        </View>
        <View>

        </View>
      </ScrollView>     
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body: {

  },
  textTittle: {
    fontStyle: 'Montserrat',
    fontSize: 27,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    width: '70%',
    margin: "auto",
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    backgroundColor: "#FBFBFB",
  },
  icon: {
    marginLeft: 5,
  },
  input: {
    height: 48,
    flex: 1,
    marginLeft: 5,
  },
  button: {
    margin: 'auto'
  },
});
export default HomeScreen;