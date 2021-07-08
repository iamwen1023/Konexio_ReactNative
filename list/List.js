
import React from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

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
        width: 200,
        height: 200,
    }
})
class List extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listCountry:[],
        }
    }
    async componentDidMount(){
        try{
        const result = await fetch('http://restcountries.eu/rest/v2/all');
        const result_json = await result.json();
        //console.log("Result JSON", result_json);
        this.setState({
            listCountry:result_json,
        })
        }catch(error){
            console.error(error);
        }  
    }

    renderItem ({item}){
        return(
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
    ItemSeparator = () => <View style={{
        height: 2,
        backgroundColor: "rgba(0,0,0,0.5)",
        marginLeft: 10,
        marginRight: 10,
    }}
    />

    render(){
      return (
        <View style={styles.container}>
        <Text>List :</Text>
        <FlatList
        data={this.state.listCountry}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={this.ItemSeparator}
      /> 
      </View>

      )
    }
}
export default List;