import { View, Text, StyleSheet } from "react-native";

export default function BattleScreen() {

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        ⚔ Battle Started
      </Text>

      <Text style={styles.subtitle}>
        Waiting for battle events...
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
    fontSize:34,
    fontWeight:"bold"
  },

  subtitle:{
    marginTop:20,
    fontSize:18
  }

});
