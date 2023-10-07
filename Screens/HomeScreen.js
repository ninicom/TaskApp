import * as React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-web';
import { ImageBackground } from 'react-native';
const Post = () => {
  return (
    <View style={styles.item}>
    <ImageBackground source={require('../assets/imgDogCard1.png')} style={styles.ImgCard}>  
      <View style={styles.datetym}>
        <Text style={styles.date}>Until 26.09</Text>
        <View style={styles.tym}>
          <MaterialCommunityIcons name="heart-outline" size={24} color={'white'}/>
        </View>
      </View>
      <View style={styles.avar_name_verify}>
        <Image style={styles.avar} source={require('../assets/ava1.png')}></Image>
        <Text style={styles.name_p}>Anderson G. </Text>
        <Image style={styles.verify} source={require('../assets/verify.png')}></Image>
      </View>
    </ImageBackground>
    <View style={styles.Titel}>
      <Text style={styles.textTitel}>Go for a walk and feed the dog</Text> 
      <View style={styles.iconTitel}>
        <MaterialCommunityIcons name="chat-outline" size={30} color={'rgba(165, 142, 255, 1)'}/>
      </View>            
    </View>
  </View>
  );
} 
const Categorie = () => {
  return(
    <View style={styles.categorie}>

    </View>
  )
}
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
        <View style={styles.Tittle}>
          <Text style={styles.textTittle}>Next to you</Text>
          <View style={styles.ToMap}>
            <Text style={styles.TextToMap}>On the map {'>'}</Text>
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.containerItem} showsHorizontalScrollIndicator={false}>
          {Post()}
          {Post()}
          {Post()}
          {Post()}
        </ScrollView>        
      </ScrollView>  
      <ScrollView style={styles.body}>
        <View style={styles.Tittle}>
          <Text style={styles.textTittle}>Categories</Text>
          <View style={styles.ToMap}>
            <Text style={styles.TextToMap}>See all {'>'}</Text>
          </View>
        </View>
        <ScrollView horizontal={true} style={styles.containerCategories} showsHorizontalScrollIndicator={false}>
          {Categorie()}
        </ScrollView>        
      </ScrollView>    
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  containerCategories: {
  },
  categorie: {
    width: 327,
    height: 72,
    backgroundColor: 'white',
    borderRadius: 16,
  },
  iconTitel: {
    flex: 1,
    alignItems: 'flex-end',
    height: 44,
    justifyContent: 'center',
  },
  textTitel: {
    width: 142,
    height: 44,
    fontSize: 16,
    fontStyle: 'Montserrat',
    color:'rgba(49, 49, 49, 1)',
  },
  Titel: {
    flexDirection: 'row',
    paddingTop: 14,
  },
  verify: {
    width: 16,
    height: 16,
  },
  name_p: {
    color: 'white',
    fontSize: '13px'
  },
  avar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    marginRight: 5,
  },
  avar_name_verify: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 10,
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
  },
  date: {
    flex: 1,
    color: 'white',
    fontSize: 13,
  },
  tym: {
    flex: 1,
    alignItems: 'flex-end',
  },
  datetym: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ImgCard: {
    width: '232px', 
    height: '228px', 
    borderRadius: '16px', 
    overflow: 'hidden',
    padding: 16,
    paddingBottom: 10,
    paddingTop: 10,
  },
  containerItem: {
    paddingTop: 10,
    //backgroundColor: "#FBFBFB",
    backgroundColor: 'red',
  },
  item: {
    width: 264,
    height: 326,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 16,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: '20px',
  },
  TextToMap: {
    opacity: '0.5',
  },
  ToMap: {
    alignItems: 'flex-end',
    flex: 1,
  },
  Tittle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    marginTop: 30,
  },
  textTittle: {
    flex: 1,
    fontSize: 20,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    width: '70%',
    margin: "auto",
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#F6F6F6',
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