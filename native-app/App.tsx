import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Dimensions } from 'react-native'
export default function App() {

  const width = Dimensions.get('window').width


  return (
    <View style={styles.container}>
      <View>
        <Text>Hello</Text>
      </View>
      <Text style={styles.textStyle}>My first react native app!</Text>
      <StatusBar style="auto" />
      <TextInput 
          value={'TextInput'}/>
          <Button
          title="Button"
          color="#518933"
        />
      <View style={styles.top}>
          <View style={{backgroundColor:'tomato',width: (width/2)-5, height:100}}><Text>1</Text></View>
          <View style={{backgroundColor:'purple',width: (width/2)-5, height:100}}><Text>2</Text></View>
          <View style={{backgroundColor:'green',width: (width/2)-5, height:100}}><Text>3arefgver</Text></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top:{
    backgroundColor:"#b8ce9e",
    flexDirection:'row',
    alignItems: 'flex-end',
    height: 500,
    gap:10,
    flexWrap:'wrap'
  },
  container: {
  },
  textStyle: {
    color: "#518933",
    fontSize: 24,
    borderWidth: 3,
    borderColor: "#a811d2",
    borderRadius:10
  }
});
