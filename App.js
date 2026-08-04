import { useEffect } from "react";
import { Text, View } from "react-native";

import socket from "./src/services/socket";

export default function App() {

  useEffect(() => {

    socket.on("connect", () => {

      console.log(
        "Connected to FitBattleAI:",
        socket.id
      );

    });


    socket.on("disconnect", () => {

      console.log("Disconnected");

    });


    return () => {
      socket.disconnect();
    };

  }, []);


  return (
    <View>
      <Text>
        FitBattle AI Connected
      </Text>
    </View>
  );

});
