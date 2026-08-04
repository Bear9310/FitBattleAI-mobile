import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BattleScreen() {

  const [timeLeft, setTimeLeft] = useState(60);

  const [myScore, setMyScore] = useState(0);

  const [opponentScore, setOpponentScore] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          clearInterval(timer);

          return 0;

        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        ⚔ Battle Started
      </Text>

      <Text style={styles.player}>
        You
      </Text>

      <Text style={styles.score}>
        Score: {myScore}
      </Text>

      <Text style={styles.player}>
        Opponent
      </Text>

      <Text style={styles.score}>
        Score: {opponentScore}
      </Text>

      <Text style={styles.timer}>
        ⏱ {timeLeft}s
      </Text>

      <Text style={styles.status}>
        Battle in Progress
      </Text>

    </View>

  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#111"
  },

  title:{
    color:"#fff",
    fontSize:34,
    fontWeight:"bold",
    marginBottom:30
  },

  player:{
    color:"#ddd",
    fontSize:22,
    marginTop:10
  },

  score:{
    color:"#00ff88",
    fontSize:28,
    fontWeight:"bold"
  },

  timer:{
    color:"#FFD700",
    fontSize:42,
    fontWeight:"bold",
    marginTop:35
  },

  status:{
    color:"#fff",
    fontSize:18,
    marginTop:25
  }

});
