import React, {useState} from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';

export default function App() {

  const [value, setvalue] = useState('Mobile number')
  const [value1, setvalue1] = useState('Password')
  
  return (
    // <View
    // <ImageBackground style={s;tyles.img} source={{uri: 'https://wallpapercave.com/wp/wp4768945.jpg'}}>
    
    <ImageBackground style={styles.img} source={require('./assets/imgs/background/imgbackground.jpg')}>
    
    <View style={{alignItems: 'center', justifyContent: 'center', alignText: 'center', position: 'relative'}}>
    <View style={styles.fields}>
    <TextInput style={styles.text} placeholder="Mobile Number"></TextInput>
    <TextInput style={styles.text} placeholder="Password"></TextInput>
    <Button style={styles.btn} mode="contained">Sign Up</Button>
    </View>
    </View>
    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1
  },
  text: {
    padding: 3, 
    marginBottom: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', 
    width: 256, 
    height: 40, 
  },
  fields: {
    marginTop: 130, 
    height: 400, 
    width: 300, 
    borderWidth: 0, 
    position: 'relative', 
    borderColor: 'black', 
    borderRadius:10, 
    backgroundColor: 'rgba(255,255,255,0.5)',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  btn: {
    width: 156,
    borderRadius: 10,
    backgroundColor: '#97f024'
  }
});
