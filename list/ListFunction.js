import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

function ListFunction() {
    const [list, setList] = useState([]);
    useEffect(() => {
        (async () => {
            try{
                const result = await fetch('http://restcountries.eu/rest/v2/all');
                const result_json = await result.json();
                console.log("Result JSON function ", result_json);
                setList(result_json)
                }catch(error){
                    console.error(error);
                } 
        })()
      }, [])
    const renderItem = ({item}) => {
        return (
        <View>
        <Image
        style={styles.tinyLogo}
        source={{
          uri: item.flag,
        }}/>
        <Text style={styles.titleText}>Country : {item.name} </Text>
        <Text style={styles.titleText}>Capital : {item.capital}</Text>
        </View>
        )
        
    }

    return (
    <View style={styles.container}>
        <Text>List function :</Text>
        <FlatList
        data={list}
        renderItem={renderItem}
      /> 
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
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    tinyLogo:{
        width: 400,
        height: 200,
    }
})



export default ListFunction;