import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from './Screens/HomeScreen';
import SavedScreen from './Screens/SavedScreen';
import SearchScreen from './Screens/SearchScreen';
import CollectionScreen from './Screens/CollectionScreen';
import AddScreen from './Screens/AddScreen';
// Tạo Bottom Tab Navigator
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: '#A58EFF',
          style: {
            backgroundColor: 'purple',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false, 
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="menu" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Collection"
          component={CollectionScreen}
          options={{
            headerShown: false, 
            tabBarLabel: 'Collection',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="heart-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add"
          component={AddScreen}
          options={{
            headerShown: false, 
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <View style={{ 
                position: 'absolute',
                bottom: 10, // space from bottombar
                height: 50,
                width: 50,
                borderRadius: 30,
                backgroundColor: '#A58EFF',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <MaterialCommunityIcons name="plus" color={'white'} size={30} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Saved"
          component={SearchScreen}
          options={{
            headerShown: false, 
            tabBarLabel: 'Saved',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chat-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false, 
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}