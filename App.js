import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import { useState } from 'react';
/* var wasActive = 'c1'; */

const initial = {
  c1: 0.3,
  c2: 0.3,
  c3: 0.3}

export default function App() {

 const[color,setColor] = useState({
  ...initial
 });

 // armazenando o initial state em uma variavel
 function changeColor(cor){
      setColor(() => { 
      return{...initial, [cor]:1}
    });
    console.log(color)
} 


// armazenando a cor que estava ativa em uma variavel
/* function changeColor(cor){
  setColor((previusState) => {
  return{...previusState, [wasActive]:0.3, [cor]:1}
});
wasActive = cor;
console.log(color)
}  */




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
