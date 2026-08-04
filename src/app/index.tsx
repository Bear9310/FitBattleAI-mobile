import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";

import socket from "../services/socket";


export default function HomeScreen(){

  useEffect(()=>{

    socket.on("connect",()=>{

      console.log(
        "Connected:",
        socket.id
      );

    });


    return ()=>{

      socket.disconnect();

    };


  },[]);


  return(

    <View style={styles.container}>

      <Text style={styles.title}>
        FitBattle AI
      </Text>

      <Text>
        Ready for Battle
      </Text>

    </View>

  );

}


const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:32,
    fontWeight:"bold"
  }

});
