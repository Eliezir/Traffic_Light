import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { useState } from 'react';

export default function App() {


  /* const [red,setRed] = useState(0.3);
  const [yellow,setYellow] = useState(0.3);
  const [green,setGreen] = useState(0.3);

  const sets = [setRed,setGreen,setYellow]


  const Closed = () =>{
    setRed(1)
    setGreen(0.3)
    setYellow(0.3)
  }

  const Open = (e) =>{
    e.target.style.opacity=1;
    setRed(0.3)
    setYellow(0.3)
  }

  const Attention = (e) =>{
    e.target.style.opacity=1;
    setRed (0.3)
    setGreen  (0.3)
   
  } */

 const[color,setColor] = useState({
  c1: 0.3,
  c2: 0.3,
  c3: 0.3
 });

const initial = {
  c1: 0.3,
  c2: 0.3,
  c3: 0.3}

function changeColor(cor){
    setColor((initialState = initial) => {
        console.log({...initial})
      if(cor === 'c1')
      return {c1: 1 , c2:0.3, c3:0.3}
      else if(cor === 'c2')
      return {c1: 0.3 , c2:1, c3:0.3}
      else if(cor === 'c3')
      return {c1: 0.3 , c2:0.3, c3:1}
    });
}


  return (
    <View style={styles.container}>
     <View style={styles.semaforo}>
      <TouchableOpacity onPress={() => changeColor('c1')}><View  style={[styles.circulo,{backgroundColor:"red", opacity:color.c1}]}></View></TouchableOpacity>
      <TouchableOpacity onPress={() => changeColor('c2')}><View  style={[styles.circulo,{backgroundColor:"yellow" , opacity:color.c2}]}></View></TouchableOpacity>
      <TouchableOpacity onPress={() => changeColor('c3')}><View style={[styles.circulo,{backgroundColor:"green" , opacity:color  .c3}]}></View></TouchableOpacity>
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
