import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import socket from "../services/socket";

import {
  countRep,
  resetExercise
} from "@/services/exercise/exerciseCounter";


export default function BattleScreen() {


  const [timeLeft, setTimeLeft] = useState(60);

  const [myScore, setMyScore] = useState(0);

  const [opponentScore, setOpponentScore] = useState(0);



  function sendExercise(){


    // simulate pose movement
    const down =
      countRep(
        "pushup",
        "down"
      );


    const up =
      countRep(
        "pushup",
        "up"
      );



    if(up.completed){


      socket.emit(
        "playerAction",
        {

          roomId: global.roomId,

          exercise:"pushup",

          reps:1,

          confidence:0.95

        }
      );


    }


  }





  useEffect(()=>{


    resetExercise("pushup");



    const timer =
      setInterval(()=>{


        setTimeLeft(
          prev=>{

            if(prev <= 1){

              clearInterval(timer);

              return 0;

            }


            return prev - 1;

          }
        );


      },1000);





    socket.on(
      "scoreUpdate",
      (data)=>{


        const scores =
          data.scores;


        const myId =
          socket.id;



        setMyScore(
          scores[myId] || 0
        );



        const opponentId =
          Object.keys(scores)
          .find(
            id=>id !== myId
          );



        if(opponentId){

          setOpponentScore(
            scores[opponentId] || 0
          );

        }


      }
    );




    return ()=>{


      clearInterval(timer);


      socket.off(
        "scoreUpdate"
      );


    };


  },[]);






  return (

    <View style={styles.container}>


      <Text style={styles.title}>
        ⚔ Battle Started
      </Text>



      <Text style={styles.player}>
        You
      </Text>


      <Text style={styles.score}>
        {myScore}
      </Text>



      <Text style={styles.player}>
        Opponent
      </Text>


      <Text style={styles.score}>
        {opponentScore}
      </Text>




      <Text style={styles.timer}>
        ⏱ {timeLeft}s
      </Text>




      <Text style={styles.status}>
        Battle in Progress
      </Text>

	<TouchableOpacity
	  onPress={() => router.push("/camera")}
	  style={styles.button}
	>
	  <Text style={styles.buttonText}>
	    Open Camera
	  </Text>
	</TouchableOpacity>


      <TouchableOpacity
        onPress={sendExercise}
        style={styles.button}
      >

        <Text style={styles.buttonText}>
          Complete Push-up
        </Text>

      </TouchableOpacity>



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
    fontWeight:"bold"
  },


  player:{
    color:"#ddd",
    fontSize:22,
    marginTop:20
  },


  score:{
    color:"#00ff88",
    fontSize:40,
    fontWeight:"bold"
  },


  timer:{
    color:"#FFD700",
    fontSize:42,
    marginTop:30
  },


  status:{
    color:"#fff",
    marginTop:20,
    fontSize:18
  },


  button:{
    marginTop:30,
    padding:15,
    backgroundColor:"#2563EB",
    borderRadius:10
  },


  buttonText:{
    color:"#fff",
    fontWeight:"bold"
  }


});
