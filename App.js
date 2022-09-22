import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { useState } from 'react';

export default function App() {


  const [red,setRed] = useState(0.3);
  const [yellow,setYellow] = useState(0.3);
  const [green,setGreen] = useState(0.3);

  const sets = [setRed,setGreen,setYellow]


  const Closed = () =>{
    setRed(1)
    setGreen(0.3)
    setYellow(0.3)
  }

  const Open = () =>{
    setRed(0.3)
    setGreen(1)
    setYellow(0.3)
  }

  const Attention = () =>{
    setRed (0.3)
    setGreen  (0.3)
    setYellow  (1)
  }

 

  return (
    <View style={styles.container}>
     <View style={styles.semaforo}>
      <TouchableOpacity onPress={Closed}><View  style={[styles.circulo,{backgroundColor:"red", opacity:red}]}></View></TouchableOpacity>
      <TouchableOpacity onPress={Attention}><View  style={[styles.circulo,{backgroundColor:"yellow" , opacity:yellow}]}></View></TouchableOpacity>
      <TouchableOpacity onPress={Open}><View style={[styles.circulo,{backgroundColor:"green" , opacity:green}]}></View></TouchableOpacity>
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  semaforo:{
    width: 50,
    height:150,
    border: '1px solid black',
    alignItems: 'center',
    justifyContent: 'space-around',
    display:'flex'
  },
  circulo:{
    borderRadius: 20,
    height: 40,
    width:40,
    border: 'solid black 1',
    backgroundColor:'black',

  }
});
