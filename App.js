import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import profile from './assets/profile.jpg';

function App() {
  return (
    <View style={styles.container}>
      <Image source={profile} style={styles.image}/>

      <View style={styles.detailContainer}>
       <Text style={styles.label}>Name</Text>
       <Text style={[styles.label, styles.info]}>Tony Stark</Text>
      </View>

      <View style={styles.detailContainer}>
       <Text style={styles.label}>Email</Text>
       <Text style={[styles.label, styles.info]}>tonystark@gmail.com</Text>
      </View>

      <View style={styles.detailContainer}>
       <Text style={styles.label}>Gender</Text>
       <Text style={[styles.label, styles.info]}>Male</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10, 
    marginTop:60
  },
  image: {
    width: 150,
    height: 150,
    marginBottom:30,
    marginTop:50,
    alignSelf:"center",
    borderRadius:75
  },
  detailContainer: {
    flexDirection:"row",
    marginVertical:3
  },
  label:{
    borderColor:"blue",
    borderWidth:1,
    fontSize: 20,
    marginRight:3,
    flex:2.5,
    paddingHorizontal:5
  },
  info:{
    flex:7.5,
  }
});

export default App;
