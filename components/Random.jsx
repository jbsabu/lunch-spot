import { useContext } from "react";
import {StyleSheet,View,Text,TouchableOpacity} from "react-native"
import { RestaurantContext } from "../App";


export default function Random(){

  const {setSelectedRestaurant} = useContext(RestaurantContext);

  const chooseRandom = ()=>{
    const index =  Math.Floor(Math.random() * foodList.length)
    setSelectedRestaurant(foodList[index]);
    navigation.navigate("Details")
  }


  return(
    <TouchableOpacity onPress = {chooseRandom}>
      <View style = {styles.fab}>
        <Text style = {styles.fabText}>
          🎲
        </Text>
      </View>
    </TouchableOpacity>
  )

}


const styles = StyleSheet.create({
  fabText:{
    fontSize: 40,
    justifyContent: "center",
    textAlign: "center"
  },
  fab:{
    display: 'absolute',
    bottom: 30,
    left: 160,
    backgroundColor: '#15317E',
    padding: 5,
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
    shadowColor: "black",
    elevation: 4,
    shadowOffset: {width: 1, height: 2 },
    shadowOpacity: .4,
    shadowRadius: 3,
  }
})