
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image,Pressable, ActivityIndicator, Alert} from 'react-native';
import { set } from 'react-native-reanimated';

export default function App() {
  const [showloading, setshowloading] = useState(false)
  const createAlert = () => {
  console.log("press")
    Alert.alert("alert");
    setshowloading(true)
  }
  return (
    <ScrollView style={styles.containerPrinciple}>
      <View style={styles.containerText}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>HELLO</Text>
      <Text >local logo</Text>
      <Image
        style={styles.tinyLogo}
        source={require('./logo.png')}
      />
       <Text >url logo</Text>
      <Image
        style={styles.tinyLogo}
        source={{ uri:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}}
      />
      {showloading? <ActivityIndicator size="large" /> : <Pressable onPress={createAlert}>
          <Text style={styles.text}>
            Press Me
          </Text>
      </Pressable> }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerPrinciple: {
    backgroundColor: 'blue',
  },
  containerText: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: "center",
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});
