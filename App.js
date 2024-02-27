import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontWeight: "bold", fontSize: 20}}>Kör alapú kúp térfogatának számítása!</Text>
      </View>
      <View style={styles.body}>
         <Text style={{fontSize: 16}}>Sugár (mm)</Text>
         <TextInput
          style={styles.input}         
         />
         <Text style={{fontSize: 16}}>Magasság (mm)</Text>
         <TextInput
          style={styles.input}         
         />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    backgroundColor: 'beige',
    width: '100%',
    padding: 20,
  },
  body: {
    flex: 1,
    backgroundColor: '#e5e9bf',
    alignItems: "center",
    width: '100%',
  },
  input: {
    backgroundColor: "white",
    width: '25%',
    margin: 5,
    borderRadius: 15,
    paddingStart: 8,
    paddingEnd: 8,
    height: 25,
  },
});
